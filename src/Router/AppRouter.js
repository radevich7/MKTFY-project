import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import "./AppRouter.css";
import NavBar from "../Components/NavBar/NavBar";
import Dashboard from "../Components/Dashboard/Dashboard";
import Footer from "../Components/Footer/Footer";
import Listing from "../Components/Listing/Listing";
const AppRouter = () => {
  return (
    <BrowserRouter>
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
          path="/home/:lisningId"
          exact
          render={(props) => <Listing {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
