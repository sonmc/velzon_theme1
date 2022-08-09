import React from "react";
import { Redirect } from "react-router-dom";

//Tables
import GridTables from "../pages/Tables/GridTables/GridTables";

//login
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

const authProtectedRoutes = [
  //Tables
  { path: "/tables-gridjs", component: GridTables },

  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard-analytics" />,
  },
];

const publicRoutes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

export { authProtectedRoutes, publicRoutes };
