import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AppContext from "../store/app-context";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [store] = useContext(AppContext);
  console.log(store.authenticated);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (store.authenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/"} />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
