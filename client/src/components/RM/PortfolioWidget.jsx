import React from 'react';

const clients = [
  { name: 'Arjun Reddy', aum: '₹85.2L', products: 'MF, Equity', lastContact: 'Yesterday' },
  { name: 'Deepa Iyer', aum: '₹1.2Cr', products: 'MF, Bonds, PMS', lastContact: '3 days ago' },
  { name: 'Rajesh Khanna', aum: '₹42.5L', products: 'SIP, Demat', lastContact: '1 week ago' },
  { name: 'Meera Sharma', aum: '₹76.8L', products: 'MF, Insurance', lastContact: '2 days ago' },
];

const PortfolioWidget = () => {
  return(
    <div className="col-span-12 md:col-span-8 bg-white rounded-xl p-6 shadow-md overflow-x-auto">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Client Portfolio</h2>
        <p className="text-sm text-gray-500">42 active clients</p>
      </div>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-200 uppercase text-xs tracking-wider">
            <th className="py-2 pr-4">Client Name</th>
            <th className="py-2 pr-4">AUM</th>
            <th className="py-2 pr-4">Products</th>
            <th className="py-2 pr-4">Last Contact</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="py-3 pr-4 font-medium text-gray-800">{client.name}</td>
              <td className="py-3 pr-4 text-green-600 font-semibold">{client.aum}</td>
              <td className="py-3 pr-4 text-gray-600">{client.products}</td>
              <td className="py-3 pr-4 text-gray-500">{client.lastContact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioWidget;
