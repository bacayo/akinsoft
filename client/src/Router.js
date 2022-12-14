import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

//* react navigation
function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="home" element={<HomePage />} />
    </Routes>
  );
}

export default Router;
