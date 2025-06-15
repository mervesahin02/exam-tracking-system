import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/LoginPage/RegisterPage";
import ForgotPasswordPage from "./pages/LoginPage/ForgotPasswordPage";
import SayacPage from "./pages/SayacPage/SinavlarPage.js";
import ModullerPage from "./pages/ModullerPage/ModullerPage";
import SinavlarPage from "./pages/SinavlarPage/SinavlarPage";
import IletisimPage from "./pages/IletisimPage/IletisimPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sayac" element={<SayacPage />} />
        <Route path="/moduller" element={<ModullerPage />} />
        <Route path="/sinavlar" element={<SinavlarPage />} />
        <Route path="/iletisim" element={<IletisimPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
