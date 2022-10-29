import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((state) => state.login);
  return user.isLogged;
};

const isLoginPage = () => {
  return window.location.pathname === "/login" ? true : false;
};

const PublicRoute = () => {
  return useAuth() ? (
    <Navigate to="/home" />
  ) : isLoginPage() ? (
    <Outlet />
  ) : (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PublicRoute;
