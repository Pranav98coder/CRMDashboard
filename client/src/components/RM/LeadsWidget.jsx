import React from 'react';

const leads = [
  { name: 'Ananya Mehta', status: 'new' },
  { name: 'Vikram Patel', status: 'contacted' },
  { name: 'Sanjay Gupta', status: 'qualified' },
  { name: 'Nandini Shah', status: 'new' },
  { name: 'Rohit Verma', status: 'converted' },
];

const statusClasses = {
  new: 'bg-blue-100 text-blue-800',
  contacted: 'bg-yellow-100 text-yellow-700',
  qualified: 'bg-green-100 text-green-700',
  converted: 'bg-purple-100 text-purple-700',
};

const LeadsWidget = () => {
  return (
  <div className="col-span-12 md:col-span-4 bg-white rounded-xl p-6 shadow-md">
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Recent Leads</h2>
      <p className="text-sm text-gray-500">7 new this week</p>
    </div>
    <div className="divide-y divide-gray-100">
      {leads.map((lead, idx) => (
        <div key={idx} className="flex justify-between items-center py-3">
          <p className="font-medium text-gray-800">{lead.name}</p>
          <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${statusClasses[lead.status]}`}>
            {lead.status}
          </span>
        </div>
      ))}
    </div>
  </div>
  );
};

export default LeadsWidget;
