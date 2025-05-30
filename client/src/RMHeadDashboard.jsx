import React from 'react';
import Navbar from  './Navbar';
import AlertsWidget from "./components/RMHead/AlertWidget";
import HeaderRMHead from "./components/RMHead/HeaderRMHead";
import LeadDistributionWidget from "./components/RMHead/LeadDistributionWidget";
import RMPerformanceWidget from "./components/RMHead/RMPerformanceWidget";
import ServiceRequestsWidget from "./components/RMHead/ServiceRequestsWidget";
import TeamOverviewWidget from "./components/RMHead/TeamOverviewWidget";




const RMHeadDashboard = () => {
    return ( 
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-500 p-4 md:p-6">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden ">
        <Navbar />
        <HeaderRMHead />
        <div className="grid grid-cols-12 gap-6 p-6">
         
          <TeamOverviewWidget />
          <LeadDistributionWidget />
          <RMPerformanceWidget />
          <ServiceRequestsWidget/>
          <AlertsWidget />
        </div>
      </div>
    </div>
     );
}
 
export default RMHeadDashboard;