import React from "react";

const AppContext = React.createContext({
  authenticated: false,
  loading: true,
  user: [],
  faq: [],
  signUpData: [],
  allListings: [],
  searchListings: null,
});

export default AppContext;
