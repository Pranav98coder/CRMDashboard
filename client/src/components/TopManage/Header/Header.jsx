import React from 'react'

function Header() {
  return (
    <>
    <div className="top-header bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_100%)] py-[24px] px-[32px] text-white flex justify-between items-center max-md:p-[20px] max-md:flex max-md:flex-col max-md:gap-[16px] max-md:text-center">
        <div className="header-left">
          <h1 className='text-[28px] font-bold mb-[4px]'>Executive Dashboard</h1>
          <p className='opacity-90 text-[14px]'>Organization-wide performance insights and trends</p>
        </div>
        <div className="header-right flex items-center gap-[24px]">
          <select className="period-selector bg-white/20 border border-[rgba(255,255,255,0.3)] rounded-[12px] py-[16px] px-[8px] text-white text-[14px] cursor-pointer">
            <option>This Month</option>
            <option>Last Quarter</option>
            <option>This Year</option>
            <option>Last Year</option>
          </select>
          <button className="export-btn bg-white/20 border border-white/30 rounded-[12px] py-[8px] px-[16px] text-white text-[14px] cursor-pointer transition duration-200 hover:white/30">📊 Export Report</button>
          <div className="user-profile flex items-center gap-[12px]">
            <div className="avatar w-10 h-10 rounded-[12px] bg-[linear-gradient(135deg,#fbbf24_0%,#f59e0b_100%)] flex items-center justify-center font-semibold text-[16px]">AB</div>
            <span className="user-name font-medium">Amit Bansal</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header