import React, { useState } from "react";
import "./assets/mktfy.css";
import AppRouter from "./Router/AppRouter";
import "./App.css";

const App = () => {
  const defaultStore = {
    authenticated: false,
    userData: {
      firstName: "Julian",
      lastName: "Radevych",
      email: "test@test.com",
      phone: "4033077577",
      address: "28 Mahogany View",
      city: "Calgary",
      province: "AB",
      country: "Canada",
    },
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
