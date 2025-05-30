import React from 'react';

const rmPerformance = [
  { name: 'John Davis', aum: '₹2.4Cr', clients: 8, sips: '₹24.5L', rate: '32%', level: 'excellent' },
  { name: 'Priya Sharma', aum: '₹1.8Cr', clients: 6, sips: '₹18.2L', rate: '28%', level: 'good' },
  { name: 'Amit Patel', aum: '₹2.1Cr', clients: 9, sips: '₹31.8L', rate: '38%', level: 'excellent' },
  { name: 'Sneha Iyer', aum: '₹1.5Cr', clients: 5, sips: '₹15.6L', rate: '22%', level: 'average' },
  { name: 'Rahul Gupta', aum: '₹1.9Cr', clients: 7, sips: '₹22.4L', rate: '30%', level: 'good' },
  { name: 'Kavya Nair', aum: '₹1.2Cr', clients: 4, sips: '₹12.8L', rate: '18%', level: 'needs-improvement' },
];

const badgeStyles = {
  excellent: 'bg-green-100 text-green-700',
  good: 'bg-blue-100 text-blue-800',
  average: 'bg-yellow-100 text-yellow-700',
  'needs-improvement': 'bg-red-100 text-red-600',
};

const RMPerformanceWidget = () => {
  return (
  <div className="col-span-12 bg-white rounded-xl p-6 shadow-md overflow-x-auto">
    <div className="mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Individual RM Performance</h2>
      <p className="text-sm text-gray-500">Monthly metrics breakdown</p>
    </div>
    <table className="min-w-full text-sm">
      <thead>
        <tr className="text-left text-xs uppercase tracking-wider text-gray-500 border-b">
          <th className="py-2 pr-4">RM Name</th>
          <th className="py-2 pr-4">AUM</th>
          <th className="py-2 pr-4">New Clients</th>
          <th className="py-2 pr-4">SIPs Booked</th>
          <th className="py-2 pr-4">Conversion Rate</th>
          <th className="py-2 pr-4">Performance</th>
        </tr>
      </thead>
      <tbody>
        {rmPerformance.map((rm, index) => (
          <tr key={index} className="border-b last:border-none">
            <td className="py-3 pr-4 font-medium text-gray-800">{rm.name}</td>
            <td className="py-3 pr-4 text-green-600 font-semibold">{rm.aum}</td>
            <td className="py-3 pr-4 text-gray-700">{rm.clients}</td>
            <td className="py-3 pr-4 text-gray-700">{rm.sips}</td>
            <td className="py-3 pr-4 text-gray-700">{rm.rate}</td>
            <td className="py-3 pr-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeStyles[rm.level]}`}>
                {rm.level === 'needs-improvement' ? 'Needs Focus' : rm.level.charAt(0).toUpperCase() + rm.level.slice(1)}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default RMPerformanceWidget;
