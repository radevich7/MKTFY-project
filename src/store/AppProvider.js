import AppContext from "./app-context";
import { useEffect, useReducer } from "react";
import { Redirect } from "react-router-dom";
const initialState = {
  loading: true,
  authenticated: false,
  user: [],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_AUTHENTICATED": {
      return { ...state, authenticated: action.authenticated };
    }
    case "SET_USER": {
      return { ...state, user: action.user };
    }
  }

  return initialState;
};

const AppProvider = (props) => {
  const [store, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    if (localStorage.getItem("Auth_token")) {
      // Axios call to back to get userInfo
      dispatch({ type: "SET_LOADING", loading: false });
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
  const RequireAuth = ({ children }) => {
    if (!store.authenticated) {
      return <Redirect to={"/"} />;
    }
    return children;
  };

  const appContext = {
    loading: store.loading,
    authenticated: store.authenticated,
    user: store.user,
    dispatch: dispatch,
    RequireAuth: RequireAuth,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
