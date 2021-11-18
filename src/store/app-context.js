import React from "react";

const AppContext = React.createContext({
  loading: false,
  authenticated: false,
  user: [],
  faq: [],
  signUpData: [],
  allListings: [],
});

export default AppContext;
