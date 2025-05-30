import React from 'react'

function TeamComparisonWidget() {
  return (
    <>
    <div className="widget team-comparison-widget col-span-8 bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.05)] transition duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-lg:col-span-8 max-md:col-span-1">
          <div className="widget-header flex justify-between items-center mb-[20px]">
            <div>
              <div className="widget-title text-[18px] font-semibold text-[#1a202c]">Team Performance Comparison</div>
              <div className="widget-subtitle text-[13px] text-[#6748b] font-medium">Monthly metrics by team</div>
            </div>
          </div>
          <table className="team-table w-full border-collapse">
            <thead>
              <tr>
                <th className='text-left p-[12px_8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>Team</th>
                <th className='text-left p-[12px_8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>AUM</th>
                <th className='text-left p-[12px_8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>New SIPs</th>
                <th className='text-left p-[12px_8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>Clients</th>
                <th className='text-left p-[12px_8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>Target Achievement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="team-name p-[16px_8px] border-b border-[#f1f5f9] font-bold">Team Alpha</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">₹125.4Cr</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">₹2.8Cr</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">68</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">
                  <div className='flex items-center gap-8'>
                    <span  className="font-semibold">112%</span>
                    <div className="performance-bar w-[60px] h-[6px] bg-[#e2e8f0] rounded-[3px] overflow-hidden mt-1">
                      <div
                        className="performance-fill h-full w-[90%] rounded-[3px] bg-[linear-gradient(90deg,#10b981,#059669)]"
                        
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="team-name p-[16px_8px] border-b border-[#f1f5f9] font-bold">Team Beta</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">₹98.2Cr</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">₹2.1Cr</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">52</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">
                  <div className='flex items-center gap-8'>
                    <span className="font-semibold">95%</span>
                    <div className="performance-bar w-[60px] h-[6px] bg-[#e2e8f0] rounded-[3px] overflow-hidden mt-1">
                      <div
                        className="performance-fill h-full w-[75%] rounded-[3px] bg-[linear-gradient(90deg,#10b981,#059669)]"
                        
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="team-name p-[16px_8px] border-b border-[#f1f5f9] font-bold">Team Gamma</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">₹87.5Cr</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">₹1.9Cr</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">45</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">
                  <div className='flex items-center gap-8'>
                    <span  className="font-semibold">108%</span>
                    <div className="performance-bar w-[60px] h-[6px] bg-[#e2e8f0] rounded-[3px] overflow-hidden mt-1">
                      <div
                        className="performance-fill h-full w-[85%] rounded-[3px] bg-[linear-gradient(90deg,#10b981,#059669)]"
                        
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="team-name p-[16px_8px] border-b border-[#f1f5f9] font-bold">Team Delta</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">₹92.1Cr</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">₹1.7Cr</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">41</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">
                  <div className='flex items-center gap-8'>
                    <span className="font-semibold">88%</span>
                    <div className="performance-bar w-[60px] h-[6px] bg-[#e2e8f0] rounded-[3px] overflow-hidden mt-1">
                      <div
                        className="performance-fill h-full w-[70%] rounded-[3px] bg-[linear-gradient(90deg,#10b981,#059669)]"
                        
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="team-name p-[16px_8px] border-b border-[#f1f5f9] font-bold">Team Epsilon</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">₹75.8Cr</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">₹1.5Cr</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">38</td>
                <td className="metric-value p-[16px_8px] border-b border-[#f1f5f9] font-semibold">
                  <div className='flex items-center gap-8'>
                    <span  className="font-semibold">92%</span>
                    <div className="performance-bar w-[60px] h-[6px] bg-[#e2e8f0] rounded-[3px] overflow-hidden mt-1">
                      <div
                        className="performance-fill h-full w-[73%] rounded-[3px] bg-[linear-gradient(90deg,#10b981,#059669)]"
                        
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  )
}

export default TeamComparisonWidget