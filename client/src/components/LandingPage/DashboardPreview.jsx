const DashboardPreview = () => (
  <section className="bg-slate-50 py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience the Power of Data-Driven Insights</h2>
      <p className="text-lg text-slate-500 mb-10">
        Get real-time visibility into your AUM, SIPs, client relationships, and team performance
      </p>
      <div className="bg-white rounded-3xl shadow-xl p-6 mt-6">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-16 rounded-xl text-white font-semibold flex items-center px-6 mb-6">
          📊 Executive Dashboard - Organization-wide Performance
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white font-semibold">
          {[
            ["₹458.2Cr", "Total AUM"],
            ["₹8.5Cr", "Monthly SIPs"],
            ["247", "New Clients"],
            ["45", "Active RMs"]
          ].map(([value, label]) => (
            <div key={label} className="bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl h-20 flex flex-col justify-center items-center">
              <div>{value}</div>
              <div className="text-xs opacity-80">{label}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 h-52 bg-slate-100 rounded-xl flex items-center justify-center text-slate-500">
          📈 AUM Growth Trend - ₹285Cr → ₹458Cr (+60.7% YoY)
        </div>
      </div>
    </div>
  </section>
);

export default DashboardPreview;
