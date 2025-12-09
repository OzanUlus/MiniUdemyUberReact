import axios from "axios";

const API_URL = "https://localhost:7230/api/Auths";

export const login = async (username, password) => {
  const res = await axios.post(`${API_URL}/login`, {
    username,
    password,
  });

  return res.data;
};