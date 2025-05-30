import React from 'react'

function ServiceFulfillmentWidget() {
  return (
    <>
        <div className="widget service-fulfillment-widget col-span-6 bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-black/5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-lg:col-span-8">
          <div className="widget-header flex justify-between items-center mb-5">
            <div>
              <div className="widget-title text-[18px] font-semibold text-[#1a202c]">Service Request Fulfillment</div>
              <div className="widget-subtitle text-[13px] text-[#64748b] font-medium">Team performance metrics</div>
            </div>
          </div>
          <div className="fulfillment-grid grid grid-cols-3 gap-[16px] mb-[20px]">
            <div className="fulfillment-card bg-[#f8fafc] rounded-[12px] p-4 text-center" >
              <div className="fulfillment-number fulfillment-pending text-[20px] font-bold mb-1 text-[#f59e0b]">18</div>
              <div className="fulfillment-label text-[12px] text-[#64748b] uppercase tracking-[0.5px]">Pending Requests</div>
            </div>
            <div className="fulfillment-card bg-[#f8fafc] rounded-[12px] p-4 text-center">
              <div className="fulfillment-number fulfillment-completed text-[20px] font-bold mb-1 text-[#10b981]">
                142
              </div>
              <div className="fulfillment-label text-[12px] text-[#64748b] uppercase tracking-[0.5px]">Completed This Month</div>
            </div>
            <div className="fulfillment-card bg-[#f8fafc] rounded-[12px] p-4 text-center">
              <div className="fulfillment-number fulfillment-sla text-[20px] font-bold mb-1 text-[#7c3aed]">94.2%</div>
              <div className="fulfillment-label text-[12px] text-[#64748b] uppercase tracking-[0.5px]">SLA Compliance</div>
            </div>
          </div>
          <table className="service-table w-full border-collapse">
            <thead>
              <tr>
                <th className='text-left py-[12px] px-[8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>Service Type</th>
                <th className='text-left py-[12px] px-[8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>Pending</th>
                <th className='text-left py-[12px] px-[8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>Completed</th>
                <th className='text-left py-[12px] px-[8px] text-[12px] font-semibold text-[#64748b] uppercase tracking-[0.5px] border-b border-[#e2e8f0]'>Avg. Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>Address Change</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>5</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>28</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>2.3 days</td>
              </tr>
              <tr>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>Fund Transfer</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>8</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>45</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>1.1 days</td>
              </tr>
              <tr>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>SIP Modification</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>3</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>38</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>1.8 days</td>
              </tr>
              <tr>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>Account Opening</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>2</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]'>31</td>
                <td className='py-[12px] px-[8px] border-b border-[#f1f5f9] text-[13px]' >3.2 days</td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  )
}

export default ServiceFulfillmentWidget