import React from 'react';
import Navbar from './Navbar';
import Header from './components/RM/Header';
import PerformanceWidget from './components/RM/PerformanceWidget';
import TasksWidget from './components/RM/TasksWidget';
import LeadsWidget from './components/RM/LeadsWidget';
import PortfolioWidget from './components/RM/PortfolioWidget';
import ServiceWidget from './components/RM/ServiceWidget';

const RMDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500 p-4 md:p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <Navbar />
        <Header />
        <div className="grid grid-cols-12 gap-6 p-6">
          <PerformanceWidget />
          <TasksWidget />
          <LeadsWidget />
          <PortfolioWidget />
          <ServiceWidget />
        </div>
      </div>
    </div>
  );
};

export default RMDashboard;
