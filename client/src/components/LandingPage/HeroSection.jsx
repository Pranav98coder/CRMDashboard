const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-400 to-purple-600 text-white py-32 text-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fadeInUp">
          Transform Your Financial Services with Intelligent CRM
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-10 animate-fadeInUp delay-200">
          Streamline lead management, client tracking, and business performance across your entire organization with role-based dashboards and real-time analytics.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fadeInUp delay-400">
          <a href="#demo" className="bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-md hover:bg-white/30 transition">
            🚀 Start Free Trial
          </a>
          <a href="#features" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold shadow hover:-translate-y-1 transition">
            📊 View Features
          </a>
        </div>
      </div>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url('data:image/svg+xml,...')` }}></div>
    </section>
  );
};

export default HeroSection;
