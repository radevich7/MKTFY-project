import React from "react";

const AppContext = React.createContext({
  loading: false,
  authenticated: false,
  user: [],
  dispatch: () => {},
  RequireAuth: () => {},
});

export default AppContext;
