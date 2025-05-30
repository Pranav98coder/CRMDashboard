import React from 'react'

function LeadConversionWidget() {
  return (
    <>
       <div className="widget lead-conversion-widget col-span-4 bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-black/5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-lg:col-span-8">
          <div className="widget-header flex justify-between items-center mb-5">
            <div>
              <div className="widget-title text-[18px] font-semibold text-[#1a202c]">Lead Conversion</div>
              <div className="widget-subtitle text-[13px] text-[#64748b] font-medium">This month</div>
            </div>
          </div>
          <div className="conversion-stats grid grid-cols-2 gap-[16px] mb-[20px]">
            <div className="stat-card bg-[#f8fafc] rounded-[12px] p-4 text-center">
              <div className="stat-number text-[24px] font-bold text-[#1a202c] mb-[4px]">23.4%</div>
              <div className="stat-label text-[12px] text-[#64748b] uppercase tracking-[0.5px]">Conversion Rate</div>
            </div>
            <div className="stat-card bg-[#f8fafc] rounded-[12px] p-4 text-center">
              <div className="stat-number text-[24px] font-bold text-[#1a202c] mb-[4px]">₹2.1Cr</div>
              <div className="stat-label text-[12px] text-[#64748b] uppercase tracking-[0.5px]">Converted Value</div>
            </div>
          </div>
          <ul className="conversion-funnel list-item">
            <li className="funnel-item flex justify-between items-center py-[8px] text-[14px]">
              <span className="funnel-label text-[#64748b]">New Leads</span>
              <span className="funnel-value font-semibold">284</span>
            </li>
            <li className="funnel-item flex justify-between items-center py-[8px] text-[14px]">
              <span className="funnel-label text-[#64748b]">Contacted</span>
              <span className="funnel-value font-semibold">198</span>
            </li>
            <li className="funnel-item flex justify-between items-center py-[8px] text-[14px]">
              <span className="funnel-label text-[#64748b]">Qualified</span>
              <span className="funnel-value font-semibold">142</span>
            </li>
            <li className="funnel-item flex justify-between items-center py-[8px] text-[14px]">
              <span className="funnel-label text-[#64748b]">Proposals</span>
              <span className="funnel-value font-semibold">89</span>
            </li>
            <li className="funnel-item flex justify-between items-center py-[8px] text-[14px]">
              <span className="funnel-label text-[#64748b]">Converted</span>
              <span className="funnel-value font-semibold">67</span>
            </li>
          </ul>
        </div>
    </>
  )
}

export default LeadConversionWidget