import React from 'react';

const services = [
  { id: '#SR2501', client: 'Kavita Patel', type: 'Address Change', status: 'In Progress' },
  { id: '#SR2498', client: 'Nikhil Rao', type: 'Fund Transfer', status: 'Pending' },
  { id: '#SR2492', client: 'Leela Nair', type: 'SIP Modification', status: 'New' },
];

const ServiceWidget = () => {
  return(
    <div className="col-span-12 md:col-span-4 bg-white rounded-xl p-6 shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Service Requests</h2>
        <p className="text-sm text-gray-500">3 open</p>
      </div>
      <div className="divide-y divide-gray-100">
        {services.map((item, idx) => (
          <div key={idx} className="py-4 flex justify-between">
            <div>
              <p className="text-xs text-gray-500">{item.id}</p>
              <p className="font-medium text-gray-800">{item.client}</p>
              <p className="text-sm text-gray-500">{item.type}</p>
            </div>
            <div className="self-start px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-lg">
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceWidget;
