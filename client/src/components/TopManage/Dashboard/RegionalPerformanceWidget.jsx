import React from 'react'

function RegionalPerformanceWidget() {
  return (
    <>
      <div className="widget regional-performance-widget col-span-6 bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.05)] transition duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-lg:col-span-8 max-md:col-span-1">
          <div className="widget-header flex justify-between items-center mb-[20px]">
            <div>
              <div className="widget-title text-[18px] font-semibold text-[#1a202c]">Regional Performance</div>
              <div className="widget-subtitle text-[13px] text-[#6748b] font-medium">Top 5 regions by AUM</div>
            </div>
          </div>
          <div className="region-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="region-info flex-1">
              <div className="region-name font-medium mb-1">Mumbai</div>
              <div className="region-stats text-[12px] text-[#64748b]">₹125.6Cr AUM</div>
            </div>
            <div className="region-progress w-[100px] ml-4">
              <div className="progress-bar w-full h-[8px] bg-[#e2e8f0] rounded-[4px] overflow-hidden">
                <div className="progress-fill h-full bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-[4px] transition-width duration-300 ease-in-out w-[90%]" />
              </div>
            </div>
          </div>
          <div className="region-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="region-info flex-1">
              <div className="region-name font-medium mb-1">Delhi NCR</div>
              <div className="region-stats text-[12px] text-[#64748b]">₹98.4Cr AUM</div>
            </div>
            <div className="region-progress w-[100px] ml-4">
              <div className="progress-bar w-full h-[8px] bg-[#e2e8f0] rounded-[4px] overflow-hidden">
                <div className="progress-fill h-full bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-[4px] transition-width duration-300 ease-in-out w-[78%]"/>
              </div>
            </div>
          </div>
          <div className="region-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="region-info flex-1">
              <div className="region-name font-medium mb-1">Bangalore</div>
              <div className="region-stats text-[12px] text-[#64748b]">₹87.2Cr AUM</div>
            </div>
            <div className="region-progress  w-[100px] ml-4">
              <div className="progress-bar w-full h-[8px] bg-[#e2e8f0] rounded-[4px] overflow-hidden">
                <div className="progress-fill h-full bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-[4px] transition-width duration-300 ease-in-out w-[72%]"/>
              </div>
            </div>
          </div>
          <div className="region-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="region-info flex-1">
              <div className="region-name font-medium mb-1">Hyderabad</div>
              <div className="region-stats text-[12px] text-[#64748b]">₹76.3Cr AUM</div>
            </div>
            <div className="region-progress w-[100px] ml-4">
              <div className="progress-bar w-full h-[8px] bg-[#e2e8f0] rounded-[4px] overflow-hidden">
                <div className="progress-fill h-full bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-[4px] transition-width duration-300 ease-in-out w-[68%]"/>
              </div>
            </div>
          </div>
          <div className="region-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="region-info flex-1">
              <div className="region-name font-medium mb-1">Chennai</div>
              <div className="region-stats text-[12px] text-[#64748b]">₹69.5Cr AUM</div>
            </div>
            <div className="region-progress w-[100px] ml-4">
              <div className="progress-bar w-full h-[8px] bg-[#e2e8f0] rounded-[4px] overflow-hidden">
                <div className="progress-fill h-full bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-[4px] transition-width duration-300 ease-in-out w-[60%]"/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default RegionalPerformanceWidget