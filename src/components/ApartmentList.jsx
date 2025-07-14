import { Link } from "react-router-dom";

function ApartmentList(props) {
  const isAvailable = (has_availability) => {
    return has_availability === true ? "is available" : "is not available";
  };

  return (
    <div className="cards">
      <h3 id="apt-list-title">Apartments list</h3>
      {props.apartments.map((apartmentsObj) => {
        return (
          <div key={apartmentsObj.id} className="cards">
            <p>
              <b>Apartment Available:</b> {isAvailable(apartmentsObj.has_availability)}{" "}
            </p>
            <h2>{apartmentsObj.name}</h2>
            <img src={apartmentsObj.picture_url} alt={apartmentsObj.name} />
            <h4>Description: {apartmentsObj.description}</h4>
            
            <p>
              <button
                onClick={() => {
                  props.onDelete(apartmentsObj.id);
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