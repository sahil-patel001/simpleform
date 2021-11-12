import React from "react";
import { Routes, Route } from "react-router";
import Dashboard from "../components/Dashboard";

const Private = () => {
  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Private;
