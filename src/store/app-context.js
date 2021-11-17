import React from "react";

const AppContext = React.createContext({
  loading: false,
  authenticated: false,
  user: [],
  faq: [],
  signUpData: [],
});

export default AppContext;
