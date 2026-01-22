import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="page">
        <h2>Dashboard</h2>
        <p>Welcome, {user.email}</p>
      </div>
    </>
  );
}

export default Dashboard;
