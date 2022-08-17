import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import NotFound from "../views/errors/NotFound";
import Navbar from "../components/Navbar";

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
      </Routes>
    </>
  );
};

export default Router;
