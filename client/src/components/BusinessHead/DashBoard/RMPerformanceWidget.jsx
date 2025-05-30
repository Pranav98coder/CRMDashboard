import React from 'react'

function RMPerformanceWidget() {
  return (
    <>
         <div className="widget rm-performance-widget bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-black/5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] col-span-8">
          <div className="widget-header flex justify-between items-center mb-5">
            <div>
              <div className="widget-title text-[18px] font-semibold text-[#1a202c]">RM Performance Comparison</div>
              <div className="widget-subtitle text-[13px] text-[#64748b] font-medium">
                Top performing relationship managers
              </div>
            </div>
          </div>
          <table className="rm-table w-full border-collapse">
            <thead>
              <tr>
                <th className='text-left py-[12px] px-[8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>RM Name</th>
                <th className='text-left py-[12px] px-[8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>Clients</th>
                <th className='text-left py-[12px] px-[8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>AUM</th>
                <th className='text-left py-[12px] px-[8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>SIP Bookings</th>
                <th className='text-left py-[12px] px-[8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>Performance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="rm-name py-[16px] px-[8px] border-b border-[#f1f5f9] font-medium">John Davis</td>
                <td className="rm-clients py-[16px] px-[8px] border-b border-[#f1f5f9] text-[14px] text-[#64748b]">42</td>
                <td className="rm-aum py-[16px] px-[8px] border-b border-[#f1f5f9] font-semibold text-[#059669]">₹8.5Cr</td>
                <td className="rm-sip py-[16px] px-[8px] border-b border-[#f1f5f9] font-semibold text-[#7c3aed]">₹24.5L</td>
                <td className='py-[16px] px-[8px] border-b border-[#f1f5f9]'>
                  <div className="performance-badge perf-excellent py-[4px] px-[12px] rounded-[20px] text-[11px] font-semibold uppercase tracking-[0.5px] bg-[#d1fae5] text-[#059669]">
                    Excellent
                  </div>
                </td>
              </tr>
              <tr>
                <td className="rm-name py-[16px] px-[8px] border-b border-[#f1f5f9] font-medium">Priya Sharma</td>
                <td className="rm-clients py-[16px] px-[8px] border-b border-[#f1f5f9] text-[14px] text-[#64748b]">38</td>
                <td className="rm-aum py-[16px] px-[8px] border-b border-[#f1f5f9] font-semibold text-[#059669]">₹7.2Cr</td>
                <td className="rm-sip py-[16px] px-[8px] border-b border-[#f1f5f9] font-semibold text-[#7c3aed]">₹18.2L</td>
                <td className='py-[16px] px-[8px] border-b border-[#f1f5f9]'>
                  <div className="performance-badge perf-excellent py-[4px] px-[12px] rounded-[20px] text-[11px] font-semibold uppercase tracking-[0.5px] bg-[#d1fae5] text-[#059669]">
                    Excellent
                  </div>
                </td>
              </tr>
              <tr>
                <td className="rm-name py-[16px] px-[8px] border-b border-[#f1f5f9] font-medium">Rajesh Kumar</td>
                <td className="rm-clients py-[16px] px-[8px] border-b border-[#f1f5f9] text-[14px] text-[#64748b]">35</td>
                <td className="rm-aum py-[16px] px-[8px] border-b border-[#f1f5f9] font-semibold text-[#059669]">₹6.8Cr</td>
                <td className="rm-sip py-[16px] px-[8px] border-b border-[#f1f5f9] font-semibold text-[#7c3aed]">₹15.6L</td>
                <td className='py-[16px] px-[8px] border-b border-[#f1f5f9]'>
                  <div className="performance-badge perf-good py-[4px] px-[12px] rounded-[20px] text-[11px] font-semibold uppercase tracking-[0.5px] bg-[#fef3c7] text-[#d97706]">Good</div>
                </td>
              </tr>
              <tr>
                <td className="rm-name py-[16px] px-[8px] border-b border-[#f1f5f9] font-medium">Sneha Patel</td>
                <td className="rm-clients py-[16px] px-[8px] border-b border-[#f1f5f9] text-[14px] text-[#64748b]">29</td>
                <td className="rm-aum py-[16px] px-[8px] border-b border-[#f1f5f9] font-semibold text-[#059669]">₹5.1Cr</td>
                <td className="rm-sip py-[16px] px-[8px] border-b border-[#f1f5f9] font-semibold text-[#7c3aed]">₹12.8L</td> 
                <td className='py-[16px] px-[8px] border-b border-[#f1f5f9]'>
                  <div className="performance-badge perf-good py-[4px] px-[12px] rounded-[20px] text-[11px] font-semibold uppercase tracking-[0.5px] bg-[#fef3c7] text-[#d97706]">Good</div>
                </td>
              </tr>
              <tr>
                <td className="rm-name py-[16px] px-[8px] border-b border-[#f1f5f9] font-medium">Amit Gupta</td>
                <td className="rm-clients py-[16px] px-[8px] border-b border-[#f1f5f9] text-[14px] text-[#64748b]">24</td>
                <td className="rm-aum py-[16px] px-[8px] border-b border-[#f1f5f9] font-semibold text-[#059669]">₹3.9Cr</td>
                <td className="rm-sip py-[16px] px-[8px] border-b border-[#f1f5f9] font-semibold text-[#7c3aed]">₹8.5L</td>
                <td className='py-[16px] px-[8px] border-b border-[#f1f5f9]'>
                  <div className="performance-badge perf-average py-[4px] px-[12px] rounded-[20px] text-[11px] font-semibold uppercase tracking-[0.5px] bg-[#fee2e2] text-[#dc2626]">Average</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  )
}

export default RMPerformanceWidget