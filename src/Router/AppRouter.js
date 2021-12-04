import React, { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  useHistory,
} from "react-router-dom";
import "./AppRouter.css";
import NavBar from "../pages/NavBar/NavBar";
import Dashboard from "../pages/Dashboard/Dashboard";
import Listing from "../pages/ViewListing/Listing";
import Checkout from "../pages/Checkout/Checkout";
import Pickup from "../pages/Pickup/Pickup";
import Login from "../pages/Login/Login";
import AccountInformation from "../pages/AccountInformation/AccountInformation";
import { useAuth0 } from "@auth0/auth0-react";
import TermsOfService from "../pages/TermsFaqContactUs/TermsOfService";
import Purchases from "../pages/Purchases/Purchases";
import PrivacyPolicy from "../pages/TermsFaqContactUs/PrivacyPolicy";
import CreateListing from "../pages/CreateListing/CreateListing";
import MyListings from "../pages/MyListings/MyListings";
import Faq from "../pages/TermsFaqContactUs/Faq";
import { useContext } from "react";
import jwt_decode from "jwt-decode";
import AppContext from "../store/app-context";
import { POST } from "../api/api";
import SuccessPage from "../pages/SuccessPage/SuccessPage";
import ProtectedRoute from "../reusableComponent/ProtectedRoute";
import MainPageContent from "../pages/MainPageContent/MainPageContent";
import Contact from "../pages/Contact.js/Contact";
import UpdateListing from "../pages/CreateListing/UpdateListing";
import ListingModal from "../reusableComponent/ListingModal";

const AppRouter = () => {
  const [store, dispatch] = useContext(AppContext);
  const history = useHistory();
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

  // Token expiration time
  const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const remainingDuration = expirationTime * 1000 - currentTime;
    return remainingDuration;
  };

  const LoginLogic = (props) => {
    let token = new URLSearchParams(document.location.hash.substr(1)).get(
      "access_token"
    );

    //  Auto logout when expire token
    const { exp } = jwt_decode(token);
    const remainingTime = calculateRemainingTime(exp);

    setTimeout(() => {
      props.history.push("/logout");
    }, remainingTime);

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
    let token = new URLSearchParams(document.location.hash.substr(1)).get(
      "access_token"
    );
    localStorage.setItem("Auth_token", token);

    let signUpData = JSON.parse(localStorage.getItem("signupData"));
    const decode = jwt_decode(token);
    let auth_id = decode.sub;

    let data = { ...signUpData, id: auth_id };

    // auto logout logic when token will expire

    const remainingTime = calculateRemainingTime(decode.exp);

    setTimeout(() => {
      props.history.push("/logout");
    }, remainingTime);

    useEffect(() => {
      if (token && token.length > 0) {
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
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginLogic} />
        <Route path="/signup" exact component={SignUpLogic} />
        <Route path="/" exact component={Login} />
        <Route path="/terms&services" exact component={TermsOfService} />
        <Route path="/privacy" exact component={PrivacyPolicy} />
        <Route path="/success" component={SuccessPage} />
        <Route path="/form" component={ListingModal} />

        <React.Fragment>
          <NavBar />
          <ProtectedRoute path="/logout" exact component={LogoutLogic} />

          <ProtectedRoute path="/home" exact component={Dashboard} />
          <ProtectedRoute
            path="/content/:categoryId"
            exact
            component={MainPageContent}
          />

          <ProtectedRoute path="/post/:lisningId" exact component={Listing} />

          <ProtectedRoute
            path="/post/:lisningId/checkout"
            exact
            component={Checkout}
          />
          <ProtectedRoute
            path="/post/:lisningId/checkout/pickupConfirmation"
            exact
            component={Pickup}
          />
          <ProtectedRoute
            path="/home/account"
            exact
            component={AccountInformation}
          />
          <ProtectedRoute path="/home/purchases" exact component={Purchases} />
          <ProtectedRoute path="/home/create" exact component={CreateListing} />
          <Route path="/update" component={UpdateListing} />
          <ProtectedRoute
            path="/home/mylistings"
            exact
            component={MyListings}
          />
          <ProtectedRoute path="/home/faq" exact component={Faq} />
          {/* BUILD NOT FOUND PAGE */}
          <ProtectedRoute path="/contact" component={Contact} />
          <NavBar />
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
