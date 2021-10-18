import { useEffect } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import "./AppRouter.css";
import NavBar from "../pages/NavBar/NavBar";
import Dashboard from "../pages/Dashboard/Dashboard";
import auth0js from "auth0-js";
import Listing from "../pages/Listing/Listing";
import Checkout from "../pages/Checkout/Checkout";
import Pickup from "../pages/Pickup/Pickup";
import Login from "../pages/Login/Login";
import CreatePasswordOverlay from "../pages/Login/CreatePasswordOverlay";
import AccountInformation from "../pages/AccountInformation/AccountInformation";
import { useAuth0 } from "@auth0/auth0-react";
import ChangePassword from "../pages/ChangePassword/ChangePassword";

const AppRouter = (store) => {
  const RequireAuth = ({ children }) => {
    if (!store.authenticated) {
      return <Redirect to={"/"} />;
    }
    return children;
  };
  const LoginLogic = (props) => {
    const expiresIn = new URLSearchParams(props.location.hash.substr(1)).get(
      "expires_in"
    );
    console.log(expiresIn);
    const token = new URLSearchParams(props.location.hash.substr(1)).get(
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
        {/* <Route
          path="/form"
          exact
          render={(props) => <CreatePasswordOverlay {...props} />}
        /> */}

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
        </RequireAuth>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
