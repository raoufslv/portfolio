import React from "react";
import { Routes, Route } from "react-router-dom";
import { MyProvider } from "../utils/MyContext.jsx";
import Home from "../pages/Home.jsx";
import EkriEchri from "../pages/EkriEchri.jsx";
import Tomobiltek from "../pages/Tomobiltek.jsx";
import AIarticle from "../pages/AIarticle.jsx";

const Routers = () => {
  return (
    <MyProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/EkriEchri" element={<EkriEchri />}></Route>
        <Route path="/Tomobiltek" element={<Tomobiltek />}></Route>
        <Route path="/AIarticle" element={<AIarticle />}></Route>
      </Routes>
    </MyProvider>
  );
};

export default Routers;
