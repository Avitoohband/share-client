import { Home } from "@mui/icons-material";
import { BrouwerRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "theme";
import state from "state";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => {
    createTheme(themeSettings(mode), [mode]);
  });

  return (
    <div className="app">
      <BrouwerRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrouwerRouter>
    </div>
  );
}
export default App;
