import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import RMDashboard from './RMDashboard';

import RMHeadDashboard from './RMHeadDashboard';
import LandingPage from './LandingPage';



const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rm" element={<RMDashboard />} />
        <Route path="/rmh" element={<RMHeadDashboard/>} />
        
        
      </Routes>
      
    </Router>
  );
};

export default App;
