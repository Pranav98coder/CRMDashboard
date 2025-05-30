import React from 'react'
import Header from './components/TopManage/Header/Header';
import RevenueBreakdownWidget from './components/TopManage/Dashboard/RevenueBreakdownWidget';
import AUMTrendWidget from './components/TopManage/Dashboard/AUMTrendWidget';
import RegionalPerformanceWidget from './components/TopManage/Dashboard/RegionalPerformanceWidget';
import KpiOverview from './components/TopManage/Dashboard/KpiOverview';
import TargetProgressWidget  from './components/TopManage/Dashboard/TargetProgressWidget';
import TeamComparisonWidget from './components/TopManage/Dashboard/TeamComparisonWidget';
import TopPerformersWidget from './components/TopManage/Dashboard/TopPerformersWidget';

function TopManageDashboard() {
  return (
    <>
    <div className="m-0 p-0 box-border">
         <div className="font-sans min-h-screen bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-[#1a202c]">
            <div className="dashboard-container bg-white/95 backdrop-blur-[20px] rounded-[24px] m-[20px] min-h-[calc(100vh-40px)] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden max-md:m-[10px]">
            {/*Header */}
            <Header />
            {/* Dashboard Content */}
             <div className="dashboard-content p-8 grid grid-cols-12 gap-[24px] max-lg:grid-cols-8 max-md:p-[20px] max-md:grid-cols-1">
              {/* KPI Overview */}
              <KpiOverview />
             
              {/* AUM Trend Widget */}
                <AUMTrendWidget />
              {/* Top Performers Widget */}
                <TopPerformersWidget />
              {/* Team Comparison Widget */}
                <TeamComparisonWidget />
              {/* Target Progress Widget */}
                <TargetProgressWidget />
              {/* Revenue Breakdown Widget */}
                <RevenueBreakdownWidget />
              {/* Regional Performance Widget */}
                <RegionalPerformanceWidget />
              
              
             
              
            </div>
           </div>
         </div>
    </div>
    </>
  )
}

export default TopManageDashboard