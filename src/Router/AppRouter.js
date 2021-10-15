import { useEffect } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import "./AppRouter.css";
import NavBar from "../pages/NavBar/NavBar";
import Dashboard from "../pages/Dashboard/Dashboard";

import Listing from "../pages/Listing/Listing";
import Checkout from "../pages/Checkout/Checkout";
import Pickup from "../pages/Pickup/Pickup";
import Login from "../pages/Login/Login";
import CreatePasswordOverlay from "../pages/Login/CreatePasswordOverlay";
import AccountInformation from "../pages/AccountInformation/AccountInformation";
// const FakeLogin = (props) => {
//   const token = new URLSearchParams(props.location.hash.substr(1)).get(
//     "access_token"
//   );
//   console.log(token);

//   useEffect(() => {
//     if (token.length > 0) {
//       localStorage.setItem("Auth_token", token);
//       props.store.setStore((prevState) => ({
//         ...prevState,
//         authenticated: true,
//       }));
//     }
//   }, []);
//   return <Redirect to={"/"} />;
// };
const AppRouter = (props) => {
  return (
    <BrowserRouter>
      {/* If user autorized and loged in show NavBar ===useReducer.authorized &&*/}
      <Switch>
        {/* <Route
          path="/"
          exact
          render={(props) => <FakeLogin {...props} store={props.store} />}
        /> */}
        <Route path="/login" exact render={(props) => <Login {...props} />} />
        <Route
          path="/form"
          exact
          render={(props) => <CreatePasswordOverlay {...props} />}
        />

        <div>
          <NavBar />
          <Route path="/" exact render={(props) => <Redirect to="/home" />} />
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
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
