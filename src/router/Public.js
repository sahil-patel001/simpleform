import React from "react";
import { Routes, Route } from "react-router";
import Signup from "../components/Signup";
import Login from "../components/Login";

const Public = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Public;
