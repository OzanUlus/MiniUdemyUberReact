import { useState, useContext } from "react";
import { requestLiveLesson } from "../api/matchApi";
import { AuthContext } from "../context/AuthContext";

const LiveLesson = () => {
  const { user } = useContext(AuthContext);
  const [topic, setTopic] = useState("");
  const subjects = ["React", "C#", "EFCore", "API", "JavaScript"];

  const handleRequest = async () => {
    if (!topic) {
      alert("Lütfen bir konu seçiniz.");
      return;
    }

    const res = await requestLiveLesson(user.id, topic);

  
    alert(res || "Ders talebi başarılı.");

    
 
  };

  return (
    <div>
      <h2>Canlı Ders Talebi</h2>

      <label>Konu Seçin:</label>
      <select
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        style={{ marginLeft: 10, marginBottom: 20 }}
      >
        <option value="">Seçiniz</option>
        {subjects.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <br />

      <button onClick={handleRequest}>Ders Talep Et</button>

  
    </div>
  );
};

export default LiveLesson;
