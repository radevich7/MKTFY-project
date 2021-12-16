import { useEffect, useReducer } from "react";
import AppContext from "./app-context";
import jwt_decode from "jwt-decode";
import { GET } from "../api/api";
import { useHistory, Redirect } from "react-router-dom";

// import GET from "../api/api";
const initialState = {
  authenticated: false,
  loading: true,
  user: [],
  faq: [],
  signUpData: [],
  allListings: [],
  searchListings: null,
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

    case "SET_SEARCH_LISTINGS": {
      return { ...state, searchListings: action.searchListings };
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
  const history = useHistory();

  useEffect(() => {
    if (token) {
      // decode user id from token
      const decode = jwt_decode(token);
      let user_id = decode.sub;
      dispatch({ type: "SET_AUTHENTICATED", authenticated: true });

      const urlListing = "/api/listing/category/deals?region=Calgary";
      const urlProfile = `/api/profile/${user_id}`;

      const urlFAQ = `/api/FAQ`;
      Promise.all([GET(urlListing), GET(urlProfile), GET(urlFAQ)]).then(
        (values) => {
          // if values isn't valid, sign_out the user
          if (!values) {
            alert(
              "Ooooppss, something went wrong, please contact customer support service"
            );
            return history.push("/logout");
          }
          dispatch({ type: "SET_USER", user: values[1].data });
          dispatch({ type: "SET_FAQ", faq: values[2].data });
          dispatch({ type: "SET_LOADING", loading: false });
          dispatch({ type: "SET_ALL_LISTINGS", allListings: values[0].data });
        }
      );
    }
  }, [token]);

  return (
    <AppContext.Provider value={[store, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
