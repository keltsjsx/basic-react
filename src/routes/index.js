import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import NotFound from "../views/errors/NotFound";
import Navbar from "../components/Navbar";
import Login from "../views/auth/Login";
import UserIndex from "../views/users/Index";
import UserShow from "../views/users/Show";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <Navbar>
              <Home />
            </Navbar>
          }
        ></Route>
        <Route
          path="about"
          element={
            <Navbar>
              <About />
            </Navbar>
          }
        ></Route>
        <Route
          exact
          path="users"
          element={
            <Navbar>
              <UserIndex />
            </Navbar>
          }
        ></Route>
        <Route
          path="users/:id"
          element={
            <Navbar>
              <UserShow />
            </Navbar>
          }
        ></Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
