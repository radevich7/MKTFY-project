import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import "./AppRouter.css";
import NavBar from "../pages/NavBar/NavBar";
import Dashboard from "../pages/Dashboard/Dashboard";
import Listing from "../pages/ViewListing/Listing";
import Checkout from "../pages/Checkout/Checkout";
import Pickup from "../pages/Pickup/Pickup";
import Login from "../pages/Login/Login";
import AccountInformation from "../pages/AccountInformation/AccountInformation";
import { useAuth0 } from "@auth0/auth0-react";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import TermsOfService from "../pages/TermsFaqContactUs/TermsOfService";
import Purchases from "../pages/Purchases/Purchases";
import PrivacyPolicy from "../pages/TermsFaqContactUs/PrivacyPolicy";
import CreateListing from "../pages/CreateListing/CreateListing";
import MyListings from "../pages/MyListings/MyListings";
import Faq from "../pages/TermsFaqContactUs/Faq";
import { useContext } from "react";
import { useHistory } from "react-router";
import AppContext from "../store/app-context";
import { POST } from "../api/api";

const AppRouter = () => {
  const [store, dispatch] = useContext(AppContext);
  // console.log(store.authenticated);

  const RequireAuth = ({ children }) => {
    if (!store.authenticated) {
      // return <Redirect to={"/"} />;
    }
    return children;
  };

  // Get ID from the TOKEN function
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    let payload = JSON.parse(jsonPayload);
    return payload.sub;
  }
  //

  const LoginLogic = (props) => {
    let token = new URLSearchParams(props.location.hash.substr(1)).get(
      "access_token"
    );

    useEffect(() => {
      if (token && token.length > 0) {
        localStorage.setItem("Auth_token", token);

        dispatch({ type: "SET_AUTHENTICATED", authenticated: true });
      }
    }, [token]);
    return <Redirect to="/home" />;
  };

  // SIGNUP LOGIC

  const SignUpLogic = (props) => {
    let token = new URLSearchParams(props.location.hash.substr(1)).get(
      "access_token"
    );

    let signUpData = JSON.parse(localStorage.getItem("signupData"));
    let auth_id = parseJwt(token);

    let data = { ...signUpData, id: auth_id };
    console.log(data);
    useEffect(() => {
      if (token && token.length > 0) {
        localStorage.setItem("Auth_token", token);
        dispatch({ type: "SET_AUTHENTICATED", authenticated: true });

        POST("/api/profile", data).then((res) => {
          if (res.failed === false) {
            localStorage.removeItem("signupData");
          } else {
            // SHOW MESSAGE TO CONTACT US
          }
        });
      }
    }, []);
    return <Redirect to={"/home"} />;
    // return history.push("/home");
  };

  // Log Out Logic
  const LogoutLogic = () => {
    localStorage.removeItem("Auth_token");
    const { logout } = useAuth0();
    logout({ returnTo: window.location.origin });
    useEffect(() => {
      dispatch({ type: "SET_AUTHENTICATED", authenticated: false });
    }, []);
    return <Redirect to={"/"} />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          exact
          render={(props) => <LoginLogic {...props} />}
        />
        <Route
          path="/signup"
          exact
          render={(props) => <SignUpLogic {...props} />}
        />
        <Route path="/" exact render={(props) => <Login {...props} />} />
        <Route
          path="/terms&services"
          exact
          render={(props) => <TermsOfService {...props} />}
        />
        <Route
          path="/privacy"
          exact
          render={(props) => <PrivacyPolicy {...props} />}
        />
        {/* <Route
          path="/form"
          exact
          render={(props) => < {...props} />}
        /> */}

        <RequireAuth>
          {store.authenticated && <NavBar />}
          <Route
            path="/logout"
            exact
            render={(props) => <LogoutLogic {...props} />}
          />
          <Route
            path="/home"
            exact
            render={(props) => <Dashboard {...props} />}
          />
          <Route
            path="/post/:lisningId"
            exact
            render={(props) => <Listing {...props} />}
          />
          <Route
            path="/post/:lisningId/checkout"
            exact
            render={(props) => <Checkout {...props} />}
          />
          <Route
            path="/post/:lisningId/checkout/pickupConfirmation"
            exact
            render={(props) => <Pickup {...props} />}
          />
          <Route
            path="/home/account"
            exact
            render={(props) => <AccountInformation {...props} />}
          />
          <Route
            path="/home/changepassword"
            exact
            render={(props) => <ChangePassword {...props} />}
          />
          <Route
            path="/home/purchases"
            exact
            render={(props) => <Purchases {...props} />}
          />
          <Route
            path="/home/create"
            exact
            render={(props) => <CreateListing {...props} />}
          />
          <Route
            path="/home/mylistings"
            exact
            render={(props) => <MyListings {...props} />}
          />
          <Route
            path="/home/faq"
            exact
            render={(props) => <Faq {...props} />}
          />
        </RequireAuth>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
