import React from 'react'

function AUMTrendWidget() {
  return (
    <>
    <div className="widget aum-trend-widget bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.05)] transition duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] col-span-8 max-lg:col-span-8 max-md:col-span-1">
          <div className="widget-header flex justify-center items-center mb-[20px]">
            <div>
              <div className="widget-title text-[18px] font-between text-[#1a202c]">AUM Growth Trend</div>
              <div className="widget-subtitle text-[13px] text-[#6748b] font-medium">Last 12 months</div>
            </div>
          </div>
          <div className="chart-container bg-[#f8fafc] rounded-[12px] h-[200px] flex items-center justify-center text-[14px] text-[#64748b] mb-4">
            📈 AUM Growth Chart - ₹285Cr → ₹458Cr (+60.7% YoY)
          </div>
          <div className="trend-metrics grid grid-cols-3 gap-[16px] max-md:grid-cols-1">
            <div className="trend-metric text-center p-[12px] bg-[#f8fafc] rounded-[8px]">
              <div className="trend-metric-label text-[11px] text-[#64748b] uppercase tracking-[0.5px] mb-1">Avg Monthly Growth</div>
              <div className="trend-metric-value text-[16px] font-semibold text-[#1a202c]">+4.2%</div>
            </div>
            <div className="trend-metric text-center p-[12px] bg-[#f8fafc] rounded-[8px]">
              <div className="trend-metric-label text-[11px] text-[#64748b] uppercase tracking-[0.5px] mb-1">Best Month</div>
              <div className="trend-metric-value text-[16px] font-semibold text-[#1a202c]">+18.5%</div>
            </div>
            <div className="trend-metric text-center p-[12px] bg-[#f8fafc] rounded-[8px]">
              <div className="trend-metric-label text-[11px] text-[#64748b] uppercase tracking-[0.5px] mb-1">Volatility</div>
              <div className="trend-metric-value text-[16px] font-semibold text-[#1a202c]">Low</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AUMTrendWidget