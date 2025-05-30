const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Security"]
  },
  {
    title: "Solutions",
    links: ["Wealth Management", "Investment Advisory", "Mutual Funds", "Equity Trading"]
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Support Center", "Training"]
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact", "Privacy Policy"]
  }
];

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
        {footerLinks.map(section => (
          <div key={section.title}>
            <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map(link => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-slate-400 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-700 pt-6 text-center text-slate-400 text-sm">
        &copy; 2024 FinanceHub CRM. All rights reserved. Built for the future of financial services.
      </div>
    </div>
  </footer>
);

export default Footer;
