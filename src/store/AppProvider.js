import AppContext from "./app-context";
import { useEffect, useReducer } from "react";
import { GET } from "../api/api";

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
  useEffect(() => {
    if (token) {
      const user_id = parseJwt(token);
      const urlListing = "/api/Listing";
      const urlProfile = `/api/profile/${user_id}`;
      const urlFAQ = `/api/FAQ`;

      GET(urlListing).then((res) =>
        dispatch({ type: "SET_ALL_LISTINGS", allListings: res.data })
      );
      GET(urlProfile).then((res) =>
        dispatch({ type: "SET_USER", user: res.data })
      );
      GET(urlFAQ).then((res) => dispatch({ type: "SET_FAQ", faq: res.data }));

      dispatch({ type: "SET_AUTHENTICATED", authenticated: true });
    }
  }, [token]);

  return (
    <AppContext.Provider value={[store, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
