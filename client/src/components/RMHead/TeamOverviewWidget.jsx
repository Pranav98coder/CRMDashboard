import React from 'react';

const metrics = [
  { label: 'Total AUM', value: '₹12.8Cr' },
  { label: 'New Clients', value: '47' },
  { label: 'SIPs Booked', value: '₹1.85Cr' },
  { label: 'Revenue Generated', value: '₹8.4L' },
];

const TeamOverviewWidget = () => {
  return(
    <div className="col-span-12 lg:col-span-6 bg-gradient-to-r from-indigo-400 to-purple-600 text-white rounded-xl p-6 shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Team Performance</h2>
        <p className="text-sm text-white/90">This Month</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {metrics.map((item, idx) => (
          <div key={idx} className="bg-white/10 p-4 rounded-lg text-center">
            <p className="uppercase text-xs tracking-wider text-white/70">{item.label}</p>
            <p className="text-xl font-bold">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/10 p-4 rounded-lg text-center text-sm text-white/80">
        📊 Team Performance Trends
      </div>
    </div>
  )
};

export default TeamOverviewWidget;
