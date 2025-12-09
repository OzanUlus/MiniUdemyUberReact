import { useState, useContext } from "react";
import { login } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const user = await login(username, password);
      loginUser(user);
      navigate("/courses");
    } catch (e) {
      alert("Giriş hatalı!", e);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Giriş</h2>
      <input
        placeholder="Kullanıcı adı"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        placeholder="Şifre"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={handleSubmit}>Giriş Yap</button>
    </div>
  );
};

export default Login;