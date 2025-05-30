import React from 'react'

function MonthlyTargetWidget() {
  return (
    <>
      <div className="widget targets-widget col-span-4 bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-black/5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-lg:col-span-8">
          <div className="widget-header flex justify-between items-center mb-5">
            <div>
              <div className="widget-title text-[18px] font-semibold text-[#1a202c]">Monthly Targets</div>
              <div className="widget-subtitle text-[13px] text-[#64748b] font-medium">Progress Overview</div>
            </div>
          </div>
          <div className="target-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="target-name font-medium text-[14px]">AUM Growth</div>
            <div className="target-progress flex items-center gap-[8px]">
              <div className="progress-bar w-[60px] h-[6px] bg-[#f1f5f9] rounded-[3px] overflow-hidden">
                <div className="progress-fill progress-85 h-full rounded-[3px] transition-[width] duration-300 ease-in-out  w-[85%] bg-[#10b981]" />
              </div>
              <div className="progress-text text-[12px] font-semibold min-w-[32px] text-right">85%</div>
            </div>
          </div>
          <div className="target-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="target-name font-medium text-[14px]">SIP Bookings</div>
            <div className="target-progress flex items-center gap-[8px]">
              <div className="progress-bar w-[60px] h-[6px] bg-[#f1f5f9] rounded-[3px] overflow-hidden">
                <div className="progress-fill progress-72 h-full rounded-[3px] transition-[width] duration-300 ease-in-out  w-[72%] bg-[#f59e0b]" />
              </div>
              <div className="progress-text text-[12px] font-semibold min-w-[32px] text-right">72%</div>
            </div>
          </div>
          <div className="target-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="target-name font-medium text-[14px]">New Accounts</div>
            <div className="target-progress flex items-center gap-[8px]">
              <div className="progress-bar w-[60px] h-[6px] bg-[#f1f5f9] rounded-[3px] overflow-hidden">
                <div className="progress-fill progress-94 h-full rounded-[3px] transition-[width] duration-300 ease-in-out w-[94%] bg-[#10b981]" />
              </div>
              <div className="progress-text text-[12px] font-semibold min-w-[32px] text-right">94%</div>
            </div>
          </div>
          <div className="target-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="target-name font-medium text-[14px]">Client Retention</div>
            <div className="target-progress flex items-center gap-[8px]">
              <div className="progress-bar w-[60px] h-[6px] bg-[#f1f5f9] rounded-[3px] overflow-hidden">
                <div className="progress-fill progress-68 h-full rounded-[3px] transition-[width] duration-300 ease-in-out  w-[68%] bg-[#ef4444]" />
              </div>
              <div className="progress-text text-[12px] font-semibold min-w-[32px] text-right">68%</div>
            </div>
          </div>
          <div className="target-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="target-name font-medium text-[14px]">Revenue Target</div>
            <div className="target-progress flex items-center gap-[8px]">
              <div className="progress-bar w-[60px] h-[6px] bg-[#f1f5f9] rounded-[3px] overflow-hidden">
                <div className="progress-fill progress-91 h-full rounded-[3px] transition-[width] duration-300 ease-in-out w-[91%] bg-[#10b981]" />
              </div>
              <div className="progress-text text-[12px] font-semibold min-w-[32px] text-right">91%</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default MonthlyTargetWidget