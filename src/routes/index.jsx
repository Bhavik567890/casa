import React from "react";

// import pages
export const RegisterPage = React.lazy(() => import("../pages/auth/register"));
export const LogInPage = React.lazy(() => import("../pages/auth/login"));
export const CreatePropertiesPage = React.lazy(() =>
  import("../pages/seller/create-properties")
);
