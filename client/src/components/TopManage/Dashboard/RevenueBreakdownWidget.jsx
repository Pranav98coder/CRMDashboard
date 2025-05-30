import React from 'react'

function RevenueBreakdownWidget() {
  return (
    <>
    <div className="widget revenue-breakdown-widget col-span-6 bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.05)] transition duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-lg:col-span-8 max-md:col-span-1">
          <div className="widget-header flex justify-between items-center mb-[20px]">
            <div>
              <div className="widget-title text-[18px] font-semibold text-[#1a202c]">Revenue Breakdown</div>
              <div className="widget-subtitle">By product category</div>
            </div>
          </div>
          <div className="revenue-chart bg-[#f8fafc] rounded-[12px] h-[150px] flex items-center justify-center text-[14px] text-[#64748b] mb-4">
            🥧 Revenue Distribution Chart - Total: ₹2.1Cr
          </div>
          <div className="revenue-legend grid grid-cols-2 gap-[12px]">
            <div className="legend-item flex items-center gap-[8px]">
              <div className="legend-color w-[12px] h-[12px] rounded-[3px]" style={{ background: "#4f46e5" }} />
              <div className="legend-label text-[13px] font-medium">Mutual Funds</div>
              <div className="legend-value text-[12px] text-[#647489] ml-auto">₹95.2L (45%)</div>
            </div>
            <div className="legend-item flex items-center gap-[8px]">
              <div className="legend-color w-[12px] h-[12px] rounded-[3px]" style={{ background: "#f59e0b" }} />
              <div className="legend-label text-[13px] font-medium">Insurance</div>
              <div className="legend-value text-[12px] text-[#647489] ml-auto">₹31.5L (15%)</div>
            </div>
            <div className="legend-item flex items-center gap-[8px]">
              <div className="legend-color w-[12px] h-[12px] rounded-[3px]" style={{ background: "#10b981" }} />
              <div className="legend-label text-[13px] font-medium">Other Products</div>
              <div className="legend-value text-[12px] text-[#647489] ml-auto">₹10.8L (5%)</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default RevenueBreakdownWidget