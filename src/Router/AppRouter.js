import { useEffect } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import "./AppRouter.css";
import NavBar from "../pages/NavBar/NavBar";
import Dashboard from "../pages/Dashboard/Dashboard";
import Listing from "../pages/Listing/Listing";
import Checkout from "../pages/Checkout/Checkout";
import Pickup from "../pages/Pickup/Pickup";
import Login from "../pages/Login/Login";
import AccountInformation from "../pages/AccountInformation/AccountInformation";
import { useAuth0 } from "@auth0/auth0-react";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import TermsOfService from "../pages/LegalDocuments/TermsOfService";
import Purchases from "../pages/Purchases/Purchases";
import PrivacyPolicy from "../pages/LegalDocuments/PrivacyPolicy";
import CreateListing from "../pages/CreateListing/CreateListing";

const AppRouter = (store) => {
  const RequireAuth = ({ children }) => {
    if (!store.authenticated) {
      return <Redirect to={"/"} />;
    }
    return children;
  };
  const LoginLogic = (props) => {
    let token = new URLSearchParams(props.location.hash.substr(1)).get(
      "access_token"
    );
    console.log(token);

    useEffect(() => {
      if (token.length > 0) {
        localStorage.setItem("Auth_token", token);
        props.store.setStore((prevState) => ({
          ...prevState,
          authenticated: true,
        }));
      } else {
        // return RequireAuth();
      }
    }, []);
    return <Redirect to={"/home"} />;
  };

  const LogoutLogic = (props) => {
    localStorage.removeItem("Auth_token");
    const { logout } = useAuth0();
    logout({ returnTo: window.location.origin });
    useEffect(() => {
      props.store.setStore((prevState) => ({
        ...prevState,
        authenticated: false,
      }));
    }, []);
    return <Redirect to={"/"} />;
  };

  return (
    <BrowserRouter>
      {/* If user autorized and loged in show NavBar ===useReducer.authorized &&*/}
      <Switch>
        <Route
          path="/login"
          exact
          render={(props) => <LoginLogic {...props} store={store} />}
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

        <RequireAuth>
          {store.authenticated && <NavBar />}
          <Route
            path="/logout"
            exact
            render={(props) => <LogoutLogic {...props} store={store} />}
          />
          <Route
            path="/home"
            exact
            render={(props) => <Dashboard {...props} store={store} />}
          />
          <Route
            path="/post/:lisningId"
            exact
            render={(props) => <Listing {...props} store={store} />}
          />
          <Route
            path="/post/:lisningId/checkout"
            exact
            render={(props) => <Checkout {...props} store={store} />}
          />
          <Route
            path="/post/:lisningId/checkout/pickupConfirmation"
            exact
            render={(props) => <Pickup {...props} store={store} />}
          />
          <Route
            path="/home/account"
            exact
            render={(props) => <AccountInformation {...props} store={store} />}
          />
          <Route
            path="/home/changepassword"
            exact
            render={(props) => <ChangePassword {...props} store={store} />}
          />
          <Route
            path="/home/purchases"
            exact
            render={(props) => <Purchases {...props} store={store} />}
          />
          <Route
            path="/home/create"
            exact
            render={(props) => <CreateListing {...props} store={store} />}
          />
        </RequireAuth>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
