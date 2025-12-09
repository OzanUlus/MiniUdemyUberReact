import axios from "axios";

const API_URL = "https://localhost:7230/api/Payments";

export const pay = async (userId, courseId) => {
  const response = await axios.post(`${API_URL}/pay`, {
    userId,
    courseId,
  });

  return response.data;
};