import { useEffect, useState, useContext } from "react";
import { getCourses } from "../api/courseApi";
import { pay } from "../api/paymentApi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCourses().then((data) => {
      console.log("Courses:", data);
      setCourses(data);
    });
  }, []);

  const handleBuy = async (courseId) => {
    await pay(user.id, courseId);
    alert("Satın alma başarılı.");
  };

  const goLiveLesson = () => {
    navigate("/live/");
  };

  const goMyCourses = () => {
    navigate("/purchased");
  };

  return (
    <div>
      <h2>Eğitimler</h2>

      {/* --- Butonlar Artık Kartların Dışında --- */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={goLiveLesson}
          style={{
            marginRight: "10px",
            padding: "8px 14px",
            borderRadius: "6px",
            border: "1px solid #007bff",
            background: "white",
            color: "#007bff",
            cursor: "pointer",
          }}
        >
          Canlı Ders Al
        </button>

        <button
          onClick={goMyCourses}
          style={{
            padding: "8px 14px",
            borderRadius: "6px",
            border: "1px solid #28a745",
            background: "white",
            color: "#28a745",
            cursor: "pointer",
          }}
        >
          Satın Aldığım Kurslar
        </button>
      </div>

      {/* --- Kurs Kartları --- */}
      {courses.map((c) => (
        <div
          key={c.id}
          style={{
            border: "1px solid #ddd",
            margin: 10,
            padding: 10,
            borderRadius: 8,
          }}
        >
          <h3>{c.title}</h3>
          <p>{c.description}</p>
          <strong>{c.price} TL</strong>
          <br />
          <br />

          <button
            onClick={() => handleBuy(c.id)}
            style={{
              padding: "8px 14px",
              borderRadius: "6px",
              border: "none",
              background: "#ff9800",
              color: "white",
              cursor: "pointer",
            }}
          >
            Satın Al
          </button>
        </div>
      ))}
    </div>
  );
};

export default Courses;
