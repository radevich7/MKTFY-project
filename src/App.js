import React, { useState } from "react";
import "./assets/mktfy.css";
import AppRouter from "./Router/AppRouter";
import "./App.css";

const App = () => {
  const defaultStore = {
    authenticated: false,
  };
  if (localStorage.getItem("Auth_token")) {
    defaultStore.authenticated = true;
  }
  const [store, setStore] = useState(defaultStore);

  return (
    <React.Fragment>
      <AppRouter {...store} setStore={setStore} />
    </React.Fragment>
  );
};

export default App;
