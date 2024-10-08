// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import Card from "./components/Card";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
