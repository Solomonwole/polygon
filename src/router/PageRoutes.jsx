import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "../polygon/screens/home/HomePage";
import Header from "../polygon/components/header/Header";

function PageRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default PageRoutes;
