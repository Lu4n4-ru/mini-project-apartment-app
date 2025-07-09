import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ApartmentList from "./components/ApartmentList"
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Footer />
        <ApartmentList />

      
      </BrowserRouter>
    </>
  );
}

export default App;
