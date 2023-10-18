import { Home } from "@mui/icons-material";
import { BrouwerRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";

function App() {  
  return <div className="app">
    <BrouwerRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
    </Routes>

    </BrouwerRouter>
  </div>;
}
export default App;