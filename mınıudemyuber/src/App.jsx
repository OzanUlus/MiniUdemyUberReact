import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CourserListPage from "./pages/CourserListPage";
import PurchasedPage from "./pages/PurchasedPage";
import LiveLesson from "./pages/LiveLesson";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/courses" element={<CourserListPage />} />
        <Route path="/purchased" element={<PurchasedPage />} />
        <Route path="/live" element={<LiveLesson />} />
      </Routes>
    
  );
}

export default App;