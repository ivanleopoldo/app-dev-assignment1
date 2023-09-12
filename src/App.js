import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardPage, UserPage, ErrorPage } from "./pages";
import { ThemeProvider } from "./utils/providers";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
