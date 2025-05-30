const features = [
  {
    icon: "👥",
    title: "Lead & Client Management",
    desc: "Centralized client database with lead tracking, conversion analytics, and automated follow-up reminders to maximize conversion rates."
  },
  {
    icon: "📋",
    title: "Task & Reminder System",
    desc: "Intelligent task management with priority setting, deadline tracking, and automated notifications to keep your team on track."
  },
  {
    icon: "🎫",
    title: "Service Request Tracking",
    desc: "Streamlined ticket management system for client service requests with SLA monitoring and resolution tracking."
  },
  {
    icon: "📊",
    title: "Business Performance Tracker",
    desc: "Real-time monitoring of SIP flows, AUM growth, Demat accounts, and investment plan reviews with trend analysis."
  },
  {
    icon: "🔐",
    title: "Role-Based Access Control",
    desc: "Secure, hierarchical access with customized dashboards for Top Management, Business Heads, RM Heads, and RMs."
  },
  {
    icon: "📈",
    title: "Advanced Analytics",
    desc: "Comprehensive reporting and analytics with KPI tracking, performance comparisons, and predictive insights."
  },
];

const Features = () => (
  <section id="features" className="bg-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Financial Services Management</h2>
      <p className="text-lg text-slate-500 mb-10">
        Everything you need to manage clients, leads, and performance in one integrated platform
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map(({ icon, title, desc }) => (
          <div key={title} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-transform hover:-translate-y-2">
            <div className="w-14 h-14 flex items-center justify-center text-2xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl mb-6">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-slate-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
