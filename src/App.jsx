import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import ApartmentDetailsPage from "./pages/ApartmentDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import list from "./data/listing.json"; 

function App() {
  const [apartmentToDisplay, setApartmentToDisplay] = useState(list.results);

  const deleteApartment = (apartmentId) => {
    const newApartmentList = apartmentToDisplay.filter(
      (apartment) => apartment.id !== apartmentId
    );
    setApartmentToDisplay(newApartmentList);
  };

  return (
    
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <DashboardPage 
                apartments={apartmentToDisplay} 
                onDelete={deleteApartment} 
              />
            } 
          />
          <Route
            path="/apartments/:apartmentId"
            element={
              <ApartmentDetailsPage 
                apartments={apartmentToDisplay} 
                onDelete={deleteApartment} 
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}


export default App;