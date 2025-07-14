import ApartmentList from "../components/ApartmentList";

function DashboardPage(props) {
  return (
    <div>
      <h1 id="dashboard">Dashboard</h1>
      <ApartmentList 
        apartments={props.apartments} 
        onDelete={props.onDelete} 
      />
    </div>
  );
}

export default DashboardPage;
