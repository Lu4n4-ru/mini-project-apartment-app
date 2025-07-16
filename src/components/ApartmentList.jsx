import { Link } from "react-router-dom";

function ApartmentList(props) {
  const isAvailable = (has_availability) => {
    return has_availability === true ? "is available" : "is not available";
  };

  return (
    <div className="cards">
      {props.apartments.map((apartmentsObj) => {
        return (
          <div key={apartmentsObj.id} className="card">
            <p>
              <b>Apartment Available:</b> {isAvailable(apartmentsObj.has_availability)}{" "}
            </p>
            <h2>{apartmentsObj.name}</h2>
            <img src={apartmentsObj.picture_url} alt={apartmentsObj.name} />
            <h4>Description: {apartmentsObj.description}</h4>


              <Link to={`/apartments/${apartmentsObj.id}`}>
                <button className="details-button">Show Apartment Details</button>
              </Link>
              <button className="delete-button" onClick={() => {
                  props.onDelete(apartmentsObj.id);
                  }}>
                Delete Apartment
              </button>

          </div>
        );
      })}
    </div>
  );
}

export default ApartmentList;