import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="sidebar" style={{border: "1px solid hotPink"}}>
      <div className="sidebar-header">
        <h2>Admin Dashboard</h2>
        
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/about">About us</NavLink>
        <br></br>
        <NavLink to="/">Home</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
