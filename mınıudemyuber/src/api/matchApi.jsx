import axios from "axios";

const API_URL = "https://localhost:7230/api/LiveLessons";

export const requestLiveLesson = async (userId, topic) => {
  const res = await axios.post(`${API_URL}/request?userId=${userId}&topic=${topic}`);
  return res.data;
};