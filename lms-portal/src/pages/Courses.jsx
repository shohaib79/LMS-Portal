import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Courses() {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/courses")
      .then((res) => setCourses(res.data));
  }, []);

  const enroll = (courseTitle) => {
    axios.post("http://localhost:5000/api/courses/enroll", {
      email: user.email,
      course: courseTitle
    });

    alert(`Enrolled in ${courseTitle}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Courses</h2>

      {courses.map((c) => (
        <div key={c.id} style={{ marginBottom: "10px" }}>
          {c.title}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => enroll(c.title)}
          >
            Enroll
          </button>
        </div>
      ))}
    </div>
  );
}

export default Courses;
