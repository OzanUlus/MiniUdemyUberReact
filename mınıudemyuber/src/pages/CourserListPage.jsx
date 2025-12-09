import { useEffect, useState, useContext } from "react";
import { getCourses } from "../api/courseApi";
import { pay } from "../api/paymentApi";
import { AuthContext } from "../context/AuthContext";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);

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
 
  return (
    <div>
      <h2>Eğitimler</h2>

      {courses.map((c) => (
        <div key={c.id} style={{ border: "1px solid #ddd", margin: 10, padding: 10 }}>
          <h3>{c.title}</h3>
          <p>{c.description}</p>
          <strong>{c.price} TL</strong>
          <br />
          <button onClick={() => handleBuy(c.id)}>Satın Al</button>
        </div>
      ))}
    </div>
  );
};

export default Courses;