import React from "react";
import { Redirect } from "react-router-dom";

//Tables
import GridTables from "../pages/Tables/GridTables";

//login
import Login from "../pages/Authentication/Login";

const authProtectedRoutes = [
  //Tables
  { path: "/tables-gridjs", component: GridTables },

  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/tables-gridjs" />,
  },
];

const publicRoutes = [{ path: "/login", component: Login }];

export { authProtectedRoutes, publicRoutes };
