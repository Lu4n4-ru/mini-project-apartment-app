import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddApartment(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hostName, setHostName] = useState("");
  const [hostLocation, setHostLocation] = useState("");
  const [roomType, setRoomType] = useState("");
  const [beds, setBeds] = useState("");

  const handleNameInput = (e) => setName(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleHostNameInput = (e) => setHostName(e.target.value);
  const handleHostLocationInput = (e) => setHostLocation(e.target.value);
  const handleRoomTypeInput = (e) => setRoomType(e.target.value);
  const handleBedsInput = (e) => setBeds(e.target.value);
  const navigate = useNavigate();
  
  function submitNewApt(e) {
    e.preventDefault();

    let newApt = {
      name: name,
      description: description,
      host_name: hostName,
      host_location: hostLocation,
      room_type: roomType,
      beds: beds,
    };

    props.onCreate(newApt);

    navigate("/");
  }

  return (
    <div>
      <span>Add a new Apartment</span>
      <form onSubmit={submitNewApt}>
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
            Add Apartment
          </button>
          <Link to="/">
            <button className="details-button">Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddApartment;
