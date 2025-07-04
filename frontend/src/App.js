import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DendyLandingPage from "./components/DendyLandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DendyLandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;