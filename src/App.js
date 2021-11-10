import React, { useState } from "react";
import "./assets/mktfy.css";
import AppRouter from "./Router/AppRouter";
import "./App.css";
import AppProvider from "./store/AppProvider";

const App = () => {
  // const defaultStore = {
  //   authenticated: false,
  // };
  // if (localStorage.getItem("Auth_token")) {
  //   defaultStore.authenticated = true;
  // }
  // const [store, setStore] = useState(defaultStore);
  // {...store} setStore={setStore}

  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
