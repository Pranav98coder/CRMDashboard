import React from 'react'

function TargetProgressWidget() {
  return (
    <>
    <div className="widget target-progress-widget col-span-4 bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.05)] transition duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-lg:col-span-8 max-md:col-span-1">
          <div className="widget-header flex justify-between items-center mb-[20px]">
            <div>
              <div className="widget-title text-[18px] font-semibold text-[#1a202c]">Annual Targets</div>
              <div className="widget-subtitle text-[13px] text-[#6748b] font-medium">Progress YTD</div>
            </div>
          </div>
          <div className="target-item mb-[20px]">
            <div className="target-header flex justify-between item-center mb-[8px]">
              <div className="target-label font-medium text-[14px]">AUM Growth</div>
              <div className="target-percentage text-[12px] font-semibold text-[#059669]">78%</div>
            </div>
            <div className="progress-bar w-full h-[8px] bg-[#e2e8f0] rounded-[4px] overflow-hidden">
              <div className="progress-fill w-[78%] h-full bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-[4px] transition-width duration-300 ease-in-out"/>
            </div>
            <div className="target-values flex justify-between mt-1 text-[12px] text-[#64748b]">
              <span>₹458Cr</span>
              <span>₹600Cr Target</span>
            </div>
          </div>
          <div className="target-item mb-[20px]">
            <div className="target-header flex justify-between item-center mb-[8px]">
              <div className="target-label font-medium text-[14px]">SIP Book</div>
              <div className="target-percentage text-[12px] font-semibold text-[#059669]">65%</div>
            </div>
            <div className="progress-bar w-full h-[8px] bg-[#e2e8f0] rounded-[4px] overflow-hidden">
              <div className="progress-fill w-[65%] h-full bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-[4px] transition-width duration-300 ease-in-out"  />
            </div>
            <div className="target-values flex justify-between mt-1 text-[12px] text-[#64748b]">
              <span>₹6.5Cr</span>
              <span>₹10Cr Target</span>
            </div>
          </div>
          <div className="target-item mb-[20px]">
            <div className="target-header flex justify-between item-center mb-[8px]">
              <div className="target-label font-medium text-[14px]">New Clients</div>
              <div className="target-percentage text-[12px] font-semibold text-[#059669]">82%</div>
            </div>
            <div className="progress-bar w-full h-[8px] bg-[#e2e8f0] rounded-[4px] overflow-hidden">
              <div className="progress-fill h-full bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-[4px] transition-width duration-300 ease-in-out w-[82%]"/>
            </div>
            <div className="target-values flex justify-between mt-1 text-[12px] text-[#64748b]">
              <span>2,050</span>
              <span>2,500 Target</span>
            </div>
          </div>
          <div className="target-item mb-[20px]">
            <div className="target-header flex justify-between item-center mb-[8px]">
              <div className="target-label font-medium text-[14px]">Revenue</div>
              <div className="target-percentage text-[12px] font-semibold text-[#059669]">71%</div>
            </div>
            <div className="progress-bar w-full h-[8px] bg-[#e2e8f0] rounded-[4px] overflow-hidden">
              <div className="progress-fill h-full bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-[4px] transition-width duration-300 ease-in-out w-[71%]"/>
            </div>
            <div className="target-values flex justify-between mt-1 text-[12px] text-[#64748b]">
              <span>₹17.8Cr</span>
              <span>₹25Cr Target</span>
            </div>
          </div>
        </div>
    </>
  )
}

export default TargetProgressWidget