import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import NormalPage from "./components/NormalPage";
import LivePage from "./components/LivePage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Navbar with Hamburger */}
          <Navbar onHamburgerClick={() => setIsSidebarOpen(!isSidebarOpen)} />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/normal" element={<NormalPage />} />
            <Route path="/live" element={<LivePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
