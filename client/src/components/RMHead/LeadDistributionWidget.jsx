import React from 'react';

const leads = [
  { rm: 'John Davis', count: 24 },
  { rm: 'Priya Sharma', count: 18 },
  { rm: 'Amit Patel', count: 22 },
  { rm: 'Sneha Iyer', count: 16 },
  { rm: 'Rahul Gupta', count: 20 },
  { rm: 'Kavya Nair', count: 15 },
];

const LeadDistributionWidget = () => {
  return(
  <div className="col-span-12 lg:col-span-6 bg-white rounded-xl p-6 shadow-md">
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Lead Distribution</h2>
      <p className="text-sm text-gray-500">Current assignments</p>
    </div>
    <div className="space-y-3">
      {leads.map((lead, idx) => (
        <div key={idx} className="flex justify-between items-center px-4 py-3 bg-slate-50 border-l-4 border-indigo-500 rounded-md">
          <span className="font-medium text-gray-800">{lead.rm}</span>
          <span className="font-semibold text-indigo-600">{lead.count} leads</span>
        </div>
      ))}
    </div>
  </div>
  );
};

export default LeadDistributionWidget;
