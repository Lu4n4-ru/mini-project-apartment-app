import { useParams, Link } from "react-router-dom";

function ApartmentDetailsPage(props) {
  const { apartmentId } = useParams();
  
  const apartment = props.apartments.find((apartmentsObj) => {
    return apartmentsObj.id === parseInt(apartmentId);
  });

  // Handle case where apartment is not found
  if (!apartment) {
    return (
      <div>
        <h2>Apartment not found</h2>
        <Link to="/">Back to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="apt-details">
      <h2>Details for apt. Id: {apartment.id}</h2>
      <h3>{apartment.name}</h3>
      <img src={apartment.picture_url} alt={apartment.name} />
      <p id="description">Description: {apartment.description}</p>
      <p><b>Available:</b> {apartment.has_availability ? "Yes" : "No"}</p>
      
      <button
        style={{
          background: "white",
          border: "1px solid red",
          color: "hotpink",
          marginRight: "10px"
        }}
        onClick={() => {
          props.onDelete(apartment.id);
          // You might want to navigate back to dashboard after deletion
        }}
      >
        Delete Apartment
      </button>
      
      <Link to="/">
        <button 
        style={{
          background: "white",
          border: "1px solid red",
          color: "hotpink",
          marginRight: "10px"
        }}>Back to Dashboard</button>
      </Link>

      <Link to={`/apartments/edit/${apartment.id}`}>
      <button 
      style={{
          background: "white",
          border: "1px solid red",
          color: "hotpink",
          marginRight: "10px"
        }}>Modify apartment details</button> 
        </Link>
    </div>
  );
}

export default ApartmentDetailsPage;