import React from 'react'

function BusinessMetricsWidget() {
  return (
    <>
         <div className="widget business-metrics-widget col-span-8 bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-black/5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]  bg-[linear-gradient(135deg,#667eea_0%,#764ba2_100%)] text-white max-lg:col-span-8">
          <div className="widget-header flex justify-between items-center mb-5">
            <div>
              <div className="widget-title text-[18px] font-semibold text-white">Business Unit Performance</div>
              <div className="widget-subtitle text-[13px] text-white font-medium">Current Month vs Target</div>
            </div>
          </div>
          <div className="metrics-grid grid grid-cols-[repeat(4,_1fr)] gap-[16px] mb-5 max-lg:grid-cols-2">
            <div className="metric-card bg-white/10 rounded-[12px] p-[16px] text-center">
              <div className="metric-label text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px]">Total AUM</div>
              <div className="metric-value ext-[20px] font-bold mb-[4px]">₹45.2Cr</div>
              <div className="metric-trendtext-[12px] opacity-90">↗ +12.5% vs last month</div>
            </div>
            <div className="metric-card bg-white/10 rounded-[12px] p-[16px] text-center">
              <div className="metric-label text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px]">New SIPs</div>
              <div className="metric-value text-[20px] font-bold mb-[4px]">₹2.8Cr</div>
              <div className="metric-trend text-[12px] opacity-90">↗ +8.3% vs target</div>
            </div>
            <div className="metric-card bg-white/10 rounded-[12px] p-[16px] text-center">
              <div className="metric-label text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px]">Demat Accounts</div>
              <div className="metric-value  text-[20px] font-bold mb-[4px]">156</div>
              <div className="metric-trend text-[12px] opacity-90">↗ +15.2% vs target</div>
            </div>
            <div className="metric-card bg-white/10 rounded-[12px] p-[16px] text-center">
              <div className="metric-label text-[12px] opacity-80 mb-2 uppercase tracking-[0.5px]">Revenue</div>
              <div className="metric-value text-[20px] font-bold mb-[4px]">₹18.5L</div>
              <div className="metric-trend text-[12px] opacity-90">↗ +22.1% vs last month</div>
            </div>
          </div>
          <div className="chart-placeholder bg-white/10 rounded-[12px] h-[100px] flex items-center text-[14px] opacity-80">
            📊 Business Performance Trend Chart
          </div>
        </div>
    </>
  )
}

export default BusinessMetricsWidget