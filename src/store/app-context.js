import React from "react";

const AppContext = React.createContext({
  loading: false,
  authenticated: false,
  user: [],
  faq: [],
});

export default AppContext;
