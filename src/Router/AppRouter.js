// import React, { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import "./AppRouter.css";
import NavBar from "../Components/NavBar/NavBar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* If user autorized and loged in show NavBar ===useReducer.authorized &&*/}

      <NavBar />
    </BrowserRouter>
  );
};

export default AppRouter;
