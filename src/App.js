// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MedicalCenterHome from './pages/medicalCenterHome';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/medicalCenterHome" element={<MedicalCenterHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
