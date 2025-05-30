import React from 'react';

const summaryStats = [
  { label: 'Open', value: 18 },
  { label: 'Urgent', value: 5 },
  { label: 'Resolved Today', value: 32 },
];

const serviceItems = [
  { rm: 'John Davis', type: 'Portfolio Review Request', status: 'urgent' },
  { rm: 'Priya Sharma', type: 'KYC Update', status: 'in-progress' },
  { rm: 'Amit Patel', type: 'Fund Transfer', status: 'pending' },
  { rm: 'Sneha Iyer', type: 'SIP Modification', status: 'urgent' },
];

const statusStyles = {
  pending: 'bg-yellow-100 text-yellow-700',
  'in-progress': 'bg-blue-100 text-blue-800',
  urgent: 'bg-red-100 text-red-600',
};

const ServiceRequestsWidget = () => {
  return(
    <div className="col-span-12 lg:col-span-6 bg-white rounded-xl p-6 shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Service Requests</h2>
        <p className="text-sm text-gray-500">Team workload</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {summaryStats.map((stat, idx) => (
          <div key={idx} className="text-center p-4 bg-slate-50 rounded-lg">
            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-xs text-gray-500 uppercase mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="divide-y divide-gray-100">
        {serviceItems.map((item, idx) => (
          <div key={idx} className="flex justify-between items-start py-3">
            <div>
              <p className="font-medium text-gray-800">{item.rm}</p>
              <p className="text-sm text-gray-500">{item.type}</p>
            </div>
            <span className={`px-3 py-1 rounded text-xs font-semibold ${statusStyles[item.status]}`}>
              {item.status.replace('-', ' ')}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
};

export default ServiceRequestsWidget;
