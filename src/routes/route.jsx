import React from "react";

// for private-route
import PrivateRoute from "./private-route/private-route";
import { CreatePropertiesPage, LogInPage, RegisterPage } from "./index";

export const routes = [
  {
    path: "/",
    element: <RegisterPage />,
  },

  {
    path: "/login",
    element: <LogInPage />,
  },
  {
    path: "/create/property",
    element: (
      <PrivateRoute>
        <CreatePropertiesPage />
      </PrivateRoute>
    ),
  },
];
