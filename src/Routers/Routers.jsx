import React from "react";
import { Routes, Route } from "react-router-dom";
import { MyProvider } from "../utils/MyContext.jsx";
import Home from "../pages/Home.jsx";
import ProjectDetails from "../pages/ProjectDetails.jsx";

const Routers = () => {
  return (
    <MyProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project/:id" element={<ProjectDetails />}></Route>
      </Routes>
    </MyProvider>
  );
};

export default Routers;
