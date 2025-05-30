import React from 'react'

function TeamAlertsWidget() {
  return (
    <>
        <div className="widget team-alerts-widget col-span-6 bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-black/5 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-lg:col-span-8">
          <div className="widget-header flex justify-between items-center mb-5">
            <div>
              <div className="widget-title text-[18px] font-semibold text-[#1a202c]">
                Team Alerts &amp; Notifications
              </div>
              <div className="widget-subtitle text-[13px] text-[#64748b] font-medium">Recent system alerts</div>
            </div>
          </div>
          <div className="alert-item alert-critical flex items-center py-[12px] px-[16px] mb-[12px] rounded-[12px] text-[14px] bg-[#fef2f2] border-l-4 border-[#ef4444]">
            <div className="alert-icon mr-[12px] text-[16px]">🚨</div>
            <div className="alert-content flex-1">
              <div className="alert-title font-semibold mb-[2px]">SLA Breach Alert</div>
              <div className="alert-desc text-[12px] text-[#64748b]">
                3 service requests pending beyond SLA - Immediate attention
                required
              </div>
            </div>
          </div>
          <div className="alert-item alert-warning flex items-center py-[12px] px-[16px] mb-[12px] rounded-[12px] text-[14px] bg-[#fffbeb] border-l-4 border-[#f59e0b]">
            <div className="alert-icon mr-[12px] text-[16px]">⚠️</div>
            <div className="alert-content flex-1">
              <div className="alert-title font-semibold mb-[2px]">Target Achievement Risk</div>
              <div className="alert-desc text-[12px] text-[#64748b]">
                Client Retention target at 68% - Risk of missing monthly goal
              </div>
            </div>
          </div>
          <div className="alert-item alert-info flex items-center py-[12px] px-[16px] mb-[12px] rounded-[12px] text-[14px] bg-[#eff6ff] border-l-4 border-[#3b82f6]">
            <div className="alert-icon mr-[12px] text-[16px]">📊</div>
            <div className="alert-content flex-1">
              <div className="alert-title font-semibold mb-[2px]">Performance Update</div>
              <div className="alert-desc text-[12px] text-[#64748b]">
                John Davis exceeded AUM target by 15% - Recognition due
              </div>
            </div>
          </div>
          <div className="alert-item alert-warning flex items-center py-[12px] px-[16px] mb-[12px] rounded-[12px] text-[14px] bg-[#fffbeb] border-l-4 border-[#f59e0b]">
            <div className="alert-icon mr-[12px] text-[16px]">📞</div>
            <div className="alert-content flex-1">
              <div className="alert-title font-semibold mb-[2px]">Follow-up Required</div>
              <div className="alert-desc text-[12px] text-[#64748b]">
                24 qualified leads haven't been contacted in 48+ hours
              </div>
            </div>
          </div>
          <div className="alert-item alert-info flex items-center py-[12px] px-[16px] mb-[12px] rounded-[12px] text-[14px] bg-[#eff6ff] border-l-4 border-[#3b82f6]">
            <div className="alert-icon mr-[12px] text-[16px]">💼</div>
            <div className="alert-content flex-1">
              <div className="alert-title font-semibold mb-[2px]">New Client Onboarding</div>
              <div className="alert-desc text-[12px] text-[#64748b]">
                12 new accounts opened this week - Welcome process initiated
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default TeamAlertsWidget