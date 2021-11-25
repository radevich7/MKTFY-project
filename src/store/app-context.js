import React from "react";

const AppContext = React.createContext({
  authenticated: false,
  user: [],
  faq: [],
  signUpData: [],
  allListings: [],
  choosenListing: [],
});

export default AppContext;
