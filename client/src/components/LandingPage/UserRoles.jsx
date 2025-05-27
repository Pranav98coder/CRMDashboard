const roles = [
  {
    icon: "👑",
    title: "Top Management",
    features: [
      "Organization-wide KPI dashboard",
      "AUM and SIP performance metrics",
      "Team comparison analytics",
      "Revenue breakdown analysis",
      "Strategic planning insights"
    ],
    url:"/top-management",
    
  },
  {
    icon: "🎯",
    title: "Business Heads",
    features: [
      "RM Head performance monitoring",
      "Lead pipeline management",
      "Service quality tracking",
      "Regional performance analysis",
      "Target achievement monitoring"
    ],
    url: "/business-head",
  },
  {
    icon: "⚡",
    title: "RM Heads",
    features: [
      "Team lead distribution",
      "RM performance tracking",
      "Task assignment and monitoring",
      "Service request oversight",
      "Team productivity analytics"
    ],
    url:"/rmh",
  },
  {
    icon: "🤝",
    title: "Relationship Managers",
    features: [
      "Client relationship management",
      "Lead qualification and conversion",
      "Personal task and reminder system",
      "Service ticket creation",
      "Client portfolio tracking"
    ],
    url: "/rm"
  }
];

const UserRoles = () => (
  <section id="roles" className="bg-gradient-to-br from-slate-100 to-slate-200 py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Tailored Solutions for Every Role</h2>
      <p className="text-lg text-slate-500 mb-10">Four-tier organizational structure with role-specific features and access levels</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {roles.map(({ icon, title, features,url }) => (
          <a href={url}>
            <div key={title}  className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 text-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center text-white text-xl bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg mr-4">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900"><a href={url}>{title}</a></h3>
              </div>
              <ul className="list-none text-slate-500 space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default UserRoles;
