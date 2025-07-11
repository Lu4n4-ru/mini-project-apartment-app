import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import ApartmentDetailsPage from "./pages/ApartmentDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ApartmentList from "./components/ApartmentList";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/apartments/:apartmentId" element={<ApartmentDetailsPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}


export default App;
