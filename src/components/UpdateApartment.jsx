import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function UpdateApartment(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hostName, setHostName] = useState("");
  const [hostLocation, setHostLocation] = useState("");
  const [roomType, setRoomType] = useState("");
  const [beds, setBeds] = useState("");

  const { apartmentId } = useParams();
  const navigate = useNavigate();

  const apartment = props.apartments.find(
    (apt) => apt.id === parseInt(apartmentId)
  ); //find apt to modify and pre-fill the form
  useEffect(() => {
    if (apartment) {
      // Se l'appartamento non viene trovato
      if (!apartment) {
        return (
          <div>
            <h2>Apartment not found</h2>
            <Link to="/">Back to Dashboard</Link>
          </div>
        );
      }
      setName(apartment.name || "");
      setDescription(apartment.description || "");
      setHostName(apartment.host_name || "");
      setHostLocation(apartment.host_location || "");
      setRoomType(apartment.room_type || "");
      setBeds(apartment.beds || "");
    }
  }, [apartment]);

  const handleNameInput = (e) => setName(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleHostNameInput = (e) => setHostName(e.target.value);
  const handleHostLocationInput = (e) => setHostLocation(e.target.value);
  const handleRoomTypeInput = (e) => setRoomType(e.target.value);
  const handleBedsInput = (e) => setBeds(e.target.value);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newDetails = {
      name: name,
      description: description,
      host_name: hostName,
      host_location: hostLocation,
      room_type: roomType,
      beds: beds,
    };
    props.onUpdate(apartmentId, newDetails); //call the fn to update from App.jsx
    
    //back to details page after the update
    navigate(`/apartments/${apartmentId}`);
  };

   


  return (
    <div>
      <h2>Add a new apartment</h2>;
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name
            <input
              value={name}
              name="name"
              type="text"
              placeholder="Name"
              onChange={handleNameInput}
            />
          </label>

          <label>
            Description
            <input
              value={description}
              name="description"
              type="text"
              placeholder="Description"
              onChange={handleDescriptionInput}
            />
          </label>

          <label>
            Phone
            <input
              value={hostName}
              name="host_name"
              type="text"
              placeholder="Host Name"
              onChange={handleHostNameInput}
            />
          </label>
        </div>

        <div>
          <label>
            Room Type
            <input
              value={roomType}
              name="roomType"
              type="text"
              placeholder="Room Type"
              onChange={handleRoomTypeInput}
            />
          </label>

          <label>
            Location
            <input
              value={hostLocation}
              name="hostLocation"
              type="text"
              placeholder="Location"
              onChange={handleHostLocationInput}
            />
          </label>

          <label>
            Number of Beds
            <input
              value={beds}
              name="beds"
              type="number"
              onChange={handleBedsInput}
            />
          </label>

          <br></br>
          <button className="details-button" type="submit">
            Update Apartment
          </button>
          <Link to="/">
            <button className="details-button">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UpdateApartment;
