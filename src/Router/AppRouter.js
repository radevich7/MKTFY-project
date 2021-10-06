// import React, { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import "./AppRouter.css";
import NavBar from "../Components/NavBar/NavBar";
import Dashboard from "../Components/Dashboard/Dashboard";
import Footer from "../Components/Footer/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* If user autorized and loged in show NavBar ===useReducer.authorized &&*/}
      <NavBar />
      <Dashboard />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
