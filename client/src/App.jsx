import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import RMDashboard from './RMDashboard';
import BusinessHead from './BusinessHeadDashboard';
import RMHeadDashboard from './RMHeadDashboard';
import LandingPage from './LandingPage';
import TopManage from './TopManageDashboard';



const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/rm" element={<RMDashboard />} />
        <Route path="/rmh" element={<RMHeadDashboard/>} />
        <Route path="/top-management" element={<TopManage />} />
        <Route path="/business-head" element={<BusinessHead />} />
      </Routes>
      
    </Router>
  );
};

export default App;
