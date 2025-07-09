import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <nav>
        <Link to="/about">About us</Link>
      </nav>

      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
