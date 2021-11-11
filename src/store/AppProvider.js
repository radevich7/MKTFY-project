import AppContext from "./app-context";
import { useEffect, useReducer } from "react";
import { Redirect } from "react-router-dom";
// import GET from "../api/api";
const initialState = {
  loading: false,
  authenticated: false,
  user: [],
  faq: [],
  token: localStorage.getItem("Auth_token"),
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_AUTHENTICATED": {
      return { ...state, authenticated: action.authenticated };
    }
    case "SET_TOKEN": {
      return { ...state, authenticated: action.authenticated };
    }
    case "SET_USER": {
      return { ...state, user: action.user };
    }
    case "SET_FAQ":
      return { ...state, faq: action.faq };
  }

  return initialState;
};

const AppProvider = (props) => {
  const [store, dispatch] = useReducer(AppReducer, initialState);
  console.log(store.token);

  useEffect(() => {
    if (store.token) {
      // Axios call to back to get userInfo
      dispatch({ type: "SET_AUTHENTICATED", authenticated: true });
      dispatch({
        type: "SET_USER",
        user: {
          firstName: "Julian",
          lastName: "Radevych",
          email: "test@test.com",
          phone: "+14033077577",
          address: "28 Mahogany View",
          city: "Calgary",
          province: "AB",
          country: "Canada",
        },
      });
    }
  }, []);
  console.log(store.authenticated);

  // const RequireAuth = ({ children }) => {
  //   // useEffect(() => {
  //   // console.log(store.authenticated);
  //   if (!store.authenticated) {
  //     return <Redirect to={"/"} />;
  //   }
  //   // }, [store.authenticated]);

  //   return children;
  // };

  return (
    <AppContext.Provider value={[store, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
