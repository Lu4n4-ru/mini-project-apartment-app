import { Link } from "react-router-dom";
import list from "../data/listing.json";
import { useState } from "react";

function ApartmentList() {
  const [apartmentToDisplay, setApartmentToDisplay] = useState(list.results);
  
  const isAvailable = (has_availability) => {
    return has_availability === true ? "is available" : "is not available";
  };

  const deleteApartment = (apartmentId) => {
    const newApartmentList = apartmentToDisplay.filter(
      (apartment) => apartment.id !== apartmentId
    );

    setApartmentToDisplay(newApartmentList);
    console.log(typeof newApartmentList);
  };

  console.log(apartmentToDisplay);

  return (
    <div className="cards">
      <h3>Apartments list</h3>
      {apartmentToDisplay.map((apartmentsObj) => {
        return (
          <div key={apartmentsObj.id} className="cards">
            <p>
              Apartment Available: {isAvailable(apartmentsObj.has_availability)}{" "}
            </p>
            <h2>{apartmentsObj.name}</h2>
            <img src={apartmentsObj.picture_url} alt="" />
            <h4>Description: {apartmentsObj.description}</h4>
            {/* <p>Room Type: {apartmentsObj.room_type}</p>
                        <p>Bedrooms: {apartmentsObj.bedrooms}</p>
                        <p>Beds: {apartmentsObj.beds}</p> */}

            <p>
              <button
                onClick={() => {
                  deleteApartment(apartmentsObj.id);
                }}
                style={{ border: "1px solid black" }}
              >
                Delete Apartment
              </button>
            </p>
            <p>
              <Link to={`/apartments/${apartmentsObj.id}`}>
                <button>Show Apartment Details</button>
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ApartmentList;
