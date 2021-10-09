import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import "./AppRouter.css";
import NavBar from "../pages/NavBar/NavBar";
import Dashboard from "../pages/Dashboard/Dashboard";

import Listing from "../pages/Listing/Listing";
import Checkout from "../pages/Checkout/Checkout";
import Pickup from "../pages/Pickup/Pickup";
import Login from "../pages/Login/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/login" exact render={(props) => <Login {...props} />} />
      {/* If user autorized and loged in show NavBar ===useReducer.authorized &&*/}
      <NavBar />
      <Switch>
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
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
