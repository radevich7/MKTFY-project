import { useEffect } from "react";
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
import ProtectedRoute from "../reusableComponent/ProtectedRoute";
import AppContext from "../store/app-context";

const AppRouter = () => {
  const [store, dispatch] = useContext(AppContext);

  const RequireAuth = ({ children }) => {
    if (!store.token) {
      return <Redirect to={"/"} />;
    }
    return children;
  };

  const LoginLogic = (props) => {
    let token = new URLSearchParams(props.location.hash.substr(1)).get(
      "access_token"
    );

    useEffect(() => {
      if (token && token.length > 0) {
        localStorage.setItem("Auth_token", token);

        dispatch({ type: "SET_AUTHENTICATED", authenticated: true });
        // props.store.setStore((prevState) => ({
        //   ...prevState,
        //   authenticated: true,
      }
    }, []);
    return <Redirect to={"/home"} />;
  };

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
