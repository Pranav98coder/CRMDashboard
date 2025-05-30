const CTA = () => (
  <section className="bg-gradient-to-br from-indigo-400 to-purple-600 text-white py-20 text-center">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Financial Services?</h2>
      <p className="text-lg opacity-90 mb-10">
        Join hundreds of financial firms already using FinanceHub CRM to scale their operations and improve client relationships.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <a
          href="#demo"
          className="bg-white/20 border border-white/30 px-8 py-4 rounded-lg font-semibold backdrop-blur-md hover:bg-white/30 transition"
        >
          🚀 Start Your Free Trial
        </a>
        <a
          href="#contact"
          className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold shadow hover:-translate-y-1 transition"
        >
          📞 Schedule Demo
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
