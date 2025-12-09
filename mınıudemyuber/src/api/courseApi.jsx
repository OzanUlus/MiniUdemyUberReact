import axios from "axios";

const API_URL = "https://localhost:7230/api/Courses";

export const getCourses = async () => {
  const res = await axios.get(`${API_URL}/allCourses`);
  return res.data;
};