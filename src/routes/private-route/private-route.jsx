import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

export default PrivateRoute;