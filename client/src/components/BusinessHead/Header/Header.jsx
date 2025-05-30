import React from 'react'

function Header() {
  return (
    <>
      <div className="top-header bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_100%)] py-6 px-8 text-white flex justify-between items-center max-md:p-5 max-md:flex max-md:flex-col max-md:gap-4 max-md:text-center">
        <div className="header-left">
          <h1 className='text-[28px] font-bold mb-1'>Business Overview</h1>
          <p className='opacity-90 text-[14px]'>Monitor team performance and business metrics</p>
        </div>
        <div className="header-right flex items-center gap-6">
          <div className="search-container relative">
            <input
              type="text"
              className="search-input bg-white/20 rounded-[12px] text-white border border-white/30 p-[12px_16px_12px_44px] placeholder-white/70 w-[280px] text-[14px] max-md:w-full max-md:max-w-[280px]"
              placeholder="Search RMs, teams, or metrics..."
            />
            <div className="search-icon absolute left-[16px] top-[50%] -translate-y-[50%] opacity-70">🔍</div>
          </div>
          <button className="notification-btn relative bg-white/20 border-none rounded-[10px] p-[10px] text-white cursor-pointer transition-all duration-200 hover:bg-white/30">
            🔔
            <div className="notification-badge absolute -top-[4px] -right-[4px] bg-[#ef4444] text-white rounded-full w-[18px] h-[18px] text-[11px] flex items-center justify-center font-semibold">5</div>
          </button>
          <div className="user-profile flex items-center gap-3">
            <div className="avatar w-10 h-10 rounded-[12px] bg-[linear-gradient(135deg,#fbbf24_0%,#f59e0b_100%)] flex items-center justify-center font-semibold text-[16px]">AK</div>
            <span className="user-name font-medium">Anil Kumar</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header