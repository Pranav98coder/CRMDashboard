import React from 'react'

function KpiOverview() {
  return (
    <>
    <div className="widget kpi-overview col-span-12 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.05)] transition duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-lg:col-span-8 max-md:col-span-1">
          <div className="widget-header flex justify-between items-center mb-[20px]">
            <div>
              <div className="widget-title text-[18px] font-semibold text-white">Organization KPIs</div>
              <div className="widget-subtitle text-[13px] text-white font-medium">Current Month Performance</div>
            </div>
          </div>
          <div className="kpi-grid grid grid-cols-5 gap-[20px] max-lg:grid-cols-3 max-md:grid-cols-2">
            <div className="kpi-card bg-white/10 rounded-[12px] p-[20px] text-center">
              <div className="kpi-label text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px]">Total AUM</div>
              <div className="kpi-value text-[24px] font-bold mb-[4px]">₹458.2Cr</div>
              <div className="kpi-change positive text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px] text-[#10b981]">↗ +12.5%</div>
            </div>
            <div className="kpi-card bg-white/10 rounded-[12px] p-[20px] text-center">
              <div className="kpi-label text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px]">Monthly SIPs</div>
              <div className="kpi-value text-[24px] font-bold mb-[4px]">₹8.5Cr</div>
              <div className="kpi-change positive text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px] text-[#10b981]">↗ +8.2%</div>
            </div>
            <div className="kpi-card bg-white/10 rounded-[12px] p-[20px] text-center">
              <div className="kpi-label text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px]">New Clients</div>
              <div className="kpi-value text-[24px] font-bold mb-[4px]">247</div>
              <div className="kpi-change positive text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px] text-[#10b981]">↗ +15.1%</div>
            </div>
            <div className="kpi-card bg-white/10 rounded-[12px] p-[20px] text-center">
              <div className="kpi-label text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px]">Revenue</div>
              <div className="kpi-value text-[24px] font-bold mb-[4px]">₹2.1Cr</div>
              <div className="kpi-change positive text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px] text-[#10b981]">↗ +9.8%</div>
            </div>
            <div className="kpi-card bg-white/10 rounded-[12px] p-[20px] text-center">
              <div className="kpi-label text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px]">Active RMs</div>
              <div className="kpi-value text-[24px] font-bold mb-[4px]">45</div>
              <div className="kpi-change positive text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px] text-[#10b981]">↗ +2</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default KpiOverview