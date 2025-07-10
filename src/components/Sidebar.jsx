import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <nav>
        <NavLink to="/about">About us</NavLink>
      </nav>

      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
