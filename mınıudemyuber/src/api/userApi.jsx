import axios from "axios";

const API_URL = "https://localhost:7230/api/Courses";

export const getPurchasedCourses = async (userId) => {
  const res = await axios.get(`${API_URL}/purchasedCourses/${userId}`);
  return res.data;
};