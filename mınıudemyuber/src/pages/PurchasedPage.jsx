import { useEffect, useState, useContext } from "react";
import { getPurchasedCourses } from "../api/userApi";
import { AuthContext } from "../context/AuthContext";

const PurchasedPage = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getPurchasedCourses(user.id).then(setCourses);
  }, []);

  return (
    <div>
      <h2>Satın Aldığım Eğitimler</h2>

      {courses.map((c) => (
        <div key={c.id} style={{ border: "1px solid #ddd", margin: 10, padding: 10 }}>
          <h3>{c.title}</h3>
          <p>{c.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PurchasedPage;