import React, { useContext } from "react";
import AppContext from "../store/app-context";
import { Route, Redirect } from "react-router";

const ProtectedRoute = (props) => {
  const authenticated = localStorage.getItem("Auth_token");
  return authenticated ? <Route {...props} /> : <Redirect to="/" />;
};

export default ProtectedRoute;
