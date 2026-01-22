import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password
    });

    if (!res.data.success) {
      alert(res.data.message);
      return;
    }

    login(res.data.user.email, res.data.user.role);

    if (res.data.user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="center-page">
      <div className="card">
        <img src="/logo.png" alt="LMS Logo" className="logo" />
        <h2>LMS Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p style={{ fontSize: "12px", marginTop: "10px" }}>
          Admin: admin@gmail.com / admin123
        </p>
      </div>
    </div>
  );
}

export default Login;
