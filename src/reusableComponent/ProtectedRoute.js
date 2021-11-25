import React, { useContext } from "react";
import AppContext from "../store/app-context";
import { Route, Redirect } from "react-router";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  // const [store, dispatch] = useContext(AppContext);
  // console.log(store);
  return (
    <Route
      {...rest}
      render={(props) => {
        // if (store.authenticated) {
        return <Component {...props} />;
        // } else {
        return <Redirect to={"/"} />;
        // }
      }}
    />
  );
};
