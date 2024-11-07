// AuthLayout.js
import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <Outlet /> {/* It will render the login/register components */}
    </div>
  );
};

export default AuthLayout;
