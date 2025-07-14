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
import UpdateApartment from "./components/UpdateApartment";
import AddApartment from "./components/UpdateApartment";

function App() {
  const [apartmentToDisplay, setApartmentToDisplay] = useState(list.results);

  const deleteApartment = (apartmentId) => {
    const newApartmentList = apartmentToDisplay.filter(
      (apartment) => apartment.id !== apartmentId
    );
    setApartmentToDisplay(newApartmentList);
  };

  const createApartment = (newApartmentDetails) => {
    const apartmentId = apartmentToDisplay.map((apartmentsObj) => {
      return apartmentsObj.id;
    });
    const maxId = Math.max(...apartmentId);
    const nextId = maxId + 1;

    const newList = {
      ...newApartmentDetails,
      id: nextId,
    };

    const newApartmentArr = [newApartmentList, ...apartmentToDisplay];

    setApartmentToDisplay(newList);
  };

  /*const createMovie = (newMovieDetails) => {

    // calculate the id of the next movie that we will create
    const movieIds = apartmentToDisplay.map((apartmentsObj) => {
      return apartmentsObj.id;
    });
    const maxId = Math.max(...apartmentId);
    const nextId = maxId + 1;

    // prepare an object with the details of the new movie
    const newApartmentt = {
      ...newApartmentDetails,
      id: nextId
    }

    // prepare an array with the new list of movies
    const newList = [newMovie, ...moviesToDisplay]

    // update the list of movies
    setMoviesToDisplay(newList)
  }*/

  return (
    /////////////////////////////////

    <div className="app-container">
      <Sidebar>
        
      </Sidebar>
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
          <Route path="/create-new" element={<AddApartment />} />
          <Route
            path="/create"
            element={<AddApartment onCreate={createApartment} />}
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
