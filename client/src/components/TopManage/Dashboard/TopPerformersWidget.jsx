import React from 'react'

function TopPerformersWidget() {
  return (
    <>
    <div className="widget top-performers-widget col-span-4 bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.05)] transition duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-lg:col-span-8 max-md:col-span-1">
          <div className="widget-header flex justify-between items-center mb-[20px]">
            <div>
              <div className="widget-title text-[18px] font-semibold text-[#1a202c]">Top Performers</div>
              <div className="widget-subtitle text-[13px] text-[#6748b] font-medium">This month</div>
            </div>
          </div>
          <div className="performer-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="performer-info flex items-center gap-[12px]">
              <div className="performer-rank w-6 h-6 rounded-[6px] bg-[#4f46e5] text-white text-[12px] font-semibold flex items-center justify-center">1</div>
              <div>
                <div className="performer-name font-medium mb-[2px]">Rajesh Kumar</div>
                <div className="performer-role text-[12px] text-[#64748b]">Senior RM</div>
              </div>
            </div>
            <div className="performer-metrics text-right">
              <div className="performer-aum font-semibold text-[#059669]">₹24.5L</div>
              <div className="performer-growth text-[12px] text-[#64748b]">+28% MoM</div>
            </div>
          </div>
          <div className="performer-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="performer-info flex items-center gap-[12px]">
              <div className="performer-rank w-6 h-6 rounded-[6px] bg-[#4f46e5] text-white text-[12px] font-semibold flex items-center justify-center">2</div>
              <div>
                <div className="performer-name font-medium mb-[2px]">Priya Sharma</div>
                <div className="performer-role text-[12px] text-[#64748b]">RM</div>
              </div>
            </div>
            <div className="performer-metrics text-right">
              <div className="performer-aum font-semibold text-[#059669]">₹18.2L</div>
              <div className="performer-growth text-[12px] text-[#64748b]">+22% MoM</div>
            </div>
          </div>
          <div className="performer-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="performer-info flex items-center gap-[12px]">
              <div className="performer-rank w-6 h-6 rounded-[6px] bg-[#4f46e5] text-white text-[12px] font-semibold flex items-center justify-center">3</div>
              <div>
                <div className="performer-name font-medium mb-[2px]">Vikram Singh</div>
                <div className="performer-role text-[12px] text-[#64748b]">RM</div>
              </div>
            </div>
            <div className="performer-metrics text-right">
              <div className="performer-aum font-semibold text-[#059669]">₹16.8L</div>
              <div className="performer-growth text-[12px] text-[#64748b]">+19% MoM</div>
            </div>
          </div>
          <div className="performer-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="performer-info flex items-center gap-[12px]">
              <div className="performer-rank w-6 h-6 rounded-[6px] bg-[#4f46e5] text-white text-[12px] font-semibold flex items-center justify-center">4</div>
              <div>
                <div className="performer-name font-medium mb-[2px]">Anita Patel</div>
                <div className="performer-role text-[12px] text-[#64748b]">RM</div>
              </div>
            </div>
            <div className="performer-metrics text-right">
              <div className="performer-aum font-semibold text-[#059669]">₹14.5L</div>
              <div className="performer-growth text-[12px] text-[#64748b]">+17% MoM</div>
            </div>
          </div>
          <div className="performer-item flex justify-between items-center py-[12px] border-b border-[#f1f5f9] last:border-b-0">
            <div className="performer-info flex items-center gap-[12px]">
              <div className="performer-rank w-6 h-6 rounded-[6px] bg-[#4f46e5] text-white text-[12px] font-semibold flex items-center justify-center">5</div>
              <div>
                <div className="performer-name font-medium mb-[2px]">Suresh Gupta</div>
                <div className="performer-role text-[12px] text-[#64748b]">Senior RM</div>
              </div>
            </div>
            <div className="performer-metrics text-right">
              <div className="performer-aum font-semibold text-[#059669]">₹13.2L</div>
              <div className="performer-growth text-[12px] text-[#64748b]">+15% MoM</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default TopPerformersWidget