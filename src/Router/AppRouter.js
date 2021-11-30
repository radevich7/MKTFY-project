import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import "./AppRouter.css";
import NavBar from "../pages/NavBar/NavBar";
import Dashboard from "../pages/Dashboard/Dashboard";
import Listing from "../pages/ViewListing/Listing";
import Checkout from "../pages/Checkout/Checkout";
import Pickup from "../pages/Pickup/Pickup";
import Login from "../pages/Login/Login";
import AccountInformation from "../pages/AccountInformation/AccountInformation";
import { useAuth0 } from "@auth0/auth0-react";
import TermsOfService from "../pages/TermsFaqContactUs/TermsOfService";
import Purchases from "../pages/Purchases/Purchases";
import PrivacyPolicy from "../pages/TermsFaqContactUs/PrivacyPolicy";
import CreateListing from "../pages/CreateListing/CreateListing";
import MyListings from "../pages/MyListings/MyListings";
import Faq from "../pages/TermsFaqContactUs/Faq";
import { useContext } from "react";

import AppContext from "../store/app-context";
import { POST } from "../api/api";
import SuccessPage from "../pages/SuccessPage/SuccessPage";
import ProtectedRoute from "../reusableComponent/ProtectedRoute";
import MainPageContent from "../pages/MainPageContent/MainPageContent";
import Contact from "../pages/Contact.js/Contact";

const AppRouter = () => {
  const [store, dispatch] = useContext(AppContext);
  // console.log("AppRouter rerender");
  // Get ID from the TOKEN function
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
  //

  const LoginLogic = () => {
    let token = new URLSearchParams(document.location.hash.substr(1)).get(
      "access_token"
    );

    useEffect(() => {
      if (token && token.length > 0) {
        localStorage.setItem("Auth_token", token);

        dispatch({ type: "SET_AUTHENTICATED", authenticated: true });
      }
    }, [token]);
    return <Redirect to="/home" />;
  };

  // SIGNUP LOGIC

  const SignUpLogic = () => {
    let token = new URLSearchParams(document.location.hash.substr(1)).get(
      "access_token"
    );
    localStorage.setItem("Auth_token", token);

    let signUpData = JSON.parse(localStorage.getItem("signupData"));
    let auth_id = parseJwt(token);

    let data = { ...signUpData, id: auth_id };

    useEffect(() => {
      if (token && token.length > 0) {
        dispatch({ type: "SET_AUTHENTICATED", authenticated: true });
        POST("/api/profile", data).then((res) => {
          if (res.failed === false) {
            localStorage.removeItem("signupData");
          } else {
            // SHOW MESSAGE TO CONTACT US
          }
        });
      }
    }, []);
    return <Redirect to={"/home"} />;
  };

  // Log Out Logic
  const LogoutLogic = () => {
    localStorage.removeItem("Auth_token");
    const { logout } = useAuth0();
    logout({ returnTo: window.location.origin });
    useEffect(() => {
      dispatch({ type: "SET_AUTHENTICATED", authenticated: false });
    }, []);
    return <Redirect to={"/"} />;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginLogic} />
        <Route path="/signup" exact component={SignUpLogic} />
        <Route path="/" exact component={Login} />
        <Route path="/terms&services" exact component={TermsOfService} />
        <Route path="/privacy" exact component={PrivacyPolicy} />
        <Route path="/success" component={SuccessPage} />
        <React.Fragment>
          <NavBar />
          <ProtectedRoute path="/logout" exact component={LogoutLogic} />

          <ProtectedRoute path="/home" exact component={Dashboard} />
          <ProtectedRoute
            path="/content/:categoryId"
            exact
            component={MainPageContent}
          />

          <ProtectedRoute path="/post/:lisningId" exact component={Listing} />

          <ProtectedRoute
            path="/post/:lisningId/checkout"
            exact
            component={Checkout}
          />
          <ProtectedRoute
            path="/post/:lisningId/checkout/pickupConfirmation"
            exact
            component={Pickup}
          />
          <ProtectedRoute
            path="/home/account"
            exact
            component={AccountInformation}
          />
          <ProtectedRoute path="/home/purchases" exact component={Purchases} />
          <ProtectedRoute path="/home/create" exact component={CreateListing} />
          <ProtectedRoute
            path="/home/mylistings"
            exact
            component={MyListings}
          />
          <ProtectedRoute path="/home/faq" exact component={Faq} />
          {/* BUILD NOT FOUND PAGE */}
          <ProtectedRoute path="/contact" component={Contact} />
          <NavBar />
        </React.Fragment>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
