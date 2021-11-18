import AppContext from "./app-context";
import { useEffect, useReducer } from "react";
import { GET } from "../api/api";
import axios from "axios";

// import GET from "../api/api";
const initialState = {
  loading: false,
  authenticated: false,
  user: [],
  faq: [],
  signUpData: [],
  allListings: [],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_SIGNUPDATA":
      return { ...state, signUpData: action.signUpData };
    case "SET_AUTHENTICATED": {
      return { ...state, authenticated: action.authenticated };
    }
    case "SET_ALL_LISTINGS": {
      return { ...state, allListings: action.allListings };
    }
    case "SET_USER": {
      return { ...state, user: action.user };
    }
    case "SET_FAQ":
      return { ...state, faq: action.faq };
    default:
      return initialState;
  }
};

const AppProvider = (props) => {
  const [store, dispatch] = useReducer(AppReducer, initialState);
  let token = localStorage.getItem("Auth_token");

  useEffect(() => {
    const url = "/api/Listing";
    if (token) {
      GET(url, token).then((res) => console.log(res));

      // GET(url, token).then((res) => {
      //   if (!res.failed) {
      //     dispatch({ type: "SET_ALL_LISTINGS", allListings: res.data });
      //   } else {
      //     console.log(res);
      //     // show message error to the user
      //   }
      // });

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
  }, [token]);

  return (
    <AppContext.Provider value={[store, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
