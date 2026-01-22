import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h3>LMS Portal</h3>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/courses">Courses</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
