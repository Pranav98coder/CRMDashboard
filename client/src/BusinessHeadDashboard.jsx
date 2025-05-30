import React from 'react'
import Header from './components/BusinessHead/Header/Header'
import BusinessMetricsWidget from './components/BusinessHead/DashBoard/BusinessMetricsWidget'
import LeadConversionWidget from './components/BusinessHead/DashBoard/LeadConversionWidget'
import MonthlyTargetWidget from './components/BusinessHead/DashBoard/MonthlyTargetWidget'
import RMPerformanceWidget from './components/BusinessHead/DashBoard/RMPerformanceWidget'
import ServiceFulfillmentWidget from './components/BusinessHead/DashBoard/ServiceFulfillmentWidget'
import TeamAlertsWidget from './components/BusinessHead/DashBoard/TeamAlertsWidget'


function BusinessHeadDashboard() {
  return (
    <>
        <div classname="m-0 p-0 box-border">
            <div className='font-sans bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] min-h-screen text-[#1a202c]'>
                <div className="dashboard-container bg-white/95 backdrop-blur-2xl rounded-[24px] m-5 min-h-[calc(100vh-40px)] shadow-2xl overflow-hidden max-md:m-[10px]">
                {/*Header*/}
                <Header />
                 {/* Dashboard Content */}
                 <div className="dashboard-content p-[32px] grid grid-cols-12 max-lg:grid-cols-8  gap-[24px] max-md:p-[20px]">
                   {/* Business Metrics Widget */}
                   <BusinessMetricsWidget/>
                   {/* Monthly Targets Widget */}
                   <MonthlyTargetWidget />
                   {/* RM Performance Widget */}
                   <RMPerformanceWidget />
                   {/* Lead Conversion Widget */}
                   <LeadConversionWidget />
                   {/* Service Fulfillment Widget */}
                   <ServiceFulfillmentWidget />
                   {/* Team Alerts Widget */}
                   <TeamAlertsWidget/>
                 </div>
                </div>
            </div>
          </div>
    </>
  )
}

export default BusinessHeadDashboard