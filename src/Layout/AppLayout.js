// AppLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> 
      {/* {Render's app component} */}
    </div>
  );
};

export default AppLayout;
