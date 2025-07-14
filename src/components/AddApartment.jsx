function AddApartment() {
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

  function submitNewApt(e) {
    let newApt = {
      name: name,
      description: description,
      host_name: hostName,
      host_location: hostLocation,
      room_type: roomType,
      beds: beds,
    };

    e.preventDefault();
        props.handleAddApartment(newApartment);
  }

  return (
    <form onSubmit={submitForm}>
      <span>Add a new Apartment</span>
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

        <label>
          Email
          <input
            value={hostLocation}
            name="hostLocation"
            type="text"
            placeholder="Location"
            onChange={(handle = HostLocationInput)}
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
            onChange={(handle = HostRoomTypeInput)}
          />
        </label>

        <label>
          Location
          <input
            value={hostLocation}
            name="hostLocation"
            type="text"
            placeholder="Location"
            onChange={(handle = HostLocationInput)}
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

        <button type="submit">Add Apartment</button>
      </div>
    </form>
  );
}

export default AddApartment;
