import React from 'react';

const Header = () => {
  return (
  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-6 flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
      <h1 className="text-2xl font-bold">Welcome back, John</h1>
      <p className="text-sm text-white/90">Here's what's happening with your clients today</p>
    </div>
    <div className="flex items-center gap-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search clients, leads, or tasks..."
          className="pl-10 pr-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 w-72"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 text-sm">🔍</span>
      </div>
      <button className="relative bg-white/20 p-2 rounded-lg hover:bg-white/30 transition">
        🔔
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">3</span>
      </button>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-yellow-400 text-yellow-800 font-bold flex items-center justify-center rounded-md">JD</div>
        <span className="font-medium">John Davis</span>
      </div>
    </div>
  </div>
  );
};

export default Header;
