/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "./PrivateRoute.css";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div className="lds-dual-ring"></div>;

  if (user) return children;

  return <Navigate state={{ from: location }} to={"/login"} replace></Navigate>;
};

export default PrivateRoute;
