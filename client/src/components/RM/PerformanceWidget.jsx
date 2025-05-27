import React from 'react';

const PerformanceWidget = () => {
  return (
    <div className="col-span-12 md:col-span-4 bg-gradient-to-r from-indigo-400 to-purple-600 text-white rounded-xl p-6 shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">My Performance</h2>
        <p className="text-sm text-white/90">This Month</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="bg-white/20 p-4 rounded-lg text-center">
          <p className="uppercase text-xs tracking-wide text-white/70">SIPs Booked</p>
          <p className="text-xl font-bold">₹24.5L</p>
        </div>
        <div className="bg-white/20 p-4 rounded-lg text-center">
          <p className="uppercase text-xs tracking-wide text-white/70">Demat Accounts</p>
          <p className="text-xl font-bold">12</p>
        </div>
        <div className="bg-white/20 p-4 rounded-lg text-center">
          <p className="uppercase text-xs tracking-wide text-white/70">New AUM</p>
          <p className="text-xl font-bold">₹1.8Cr</p>
        </div>
      </div>
      <div className="bg-white/10 p-4 rounded-lg text-center text-sm text-white/80">
        📈 Performance Trend Chart
      </div>
    </div>
  );
};

export default PerformanceWidget;
