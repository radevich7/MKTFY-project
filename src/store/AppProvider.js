import { useEffect, useReducer } from "react";
import AppContext from "./app-context";

import { GET } from "../api/api";
import { useHistory } from "react-router";

// import GET from "../api/api";
const initialState = {
  authenticated: false,
  loading: true,
  user: [],
  faq: [],
  signUpData: [],
  allListings: [],
  choosenListing: [],
  electronics: [],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_SIGNUPDATA":
      return { ...state, signUpData: action.signUpData };
    case "SET_AUTHENTICATED": {
      return { ...state, authenticated: action.authenticated };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.loading };
    }
    case "SET_ALL_LISTINGS": {
      return { ...state, allListings: action.allListings };
    }

    case "SET_CHOOSEN_LISTING": {
      return { ...state, choosenListing: action.choosenListing };
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
  const history = useHistory();
  let token = localStorage.getItem("Auth_token");

  // Get user ID from the token function
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    let payload = JSON.parse(jsonPayload);
    return payload.sub;
  }

  // Check for token expiration

  useEffect(() => {
    if (token) {
      dispatch({ type: "SET_AUTHENTICATED", authenticated: true });
      const user_id = parseJwt(token);
      const urlListing = "/api/Listing";
      const urlProfile = `/api/profile/${user_id}`;

      const urlFAQ = `/api/FAQ`;
      Promise.all([GET(urlListing), GET(urlProfile), GET(urlFAQ)])
        .then((values) => {
          dispatch({ type: "SET_ALL_LISTINGS", allListings: values[0].data });
          dispatch({ type: "SET_USER", user: values[1].data });
          dispatch({ type: "SET_FAQ", faq: values[2].data });
          dispatch({ type: "SET_LOADING", loading: false });
        })
        .catch((err) => {
          if (err) {
            localStorage.removeItem("Auth_token");
            dispatch({ type: "SET_AUTHENTICATED", authenticated: false });
          }
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
