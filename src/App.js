import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./page/CartPage";
import CategoryPage from "./page/CategoryPage";
import DetailPage from "./page/DetailPage";
import LandingPage from "./page/LandingPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import SearchPage from "./page/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/category/:category/detail/:id" element={<DetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
