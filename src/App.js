import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MainContext } from "./contexts/MainContext";
import Config from "./pages/Config";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = { <Home /> } />
          <Route path="/config" element = { <Config /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;