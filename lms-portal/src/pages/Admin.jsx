import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/courses/enrolled")
      .then((res) => setEnrollments(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin – Enrolled Students</h2>

      {enrollments.length === 0 ? (
        <p>No students enrolled yet</p>
      ) : (
        enrollments.map((e, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <p><strong>Student Email:</strong> {e.email}</p>
            <p><strong>Course Enrolled:</strong> {e.course}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;
