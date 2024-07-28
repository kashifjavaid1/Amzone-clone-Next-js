import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const sections = [
    {
      title: "Shop & Learn",
      links: ["Music", "eBooks", "Electronics", "Apparel"],
    },
    {
      title: "Services",
      links: ["Web Services", "Print on Demand", "Streaming", "Advertising"],
    },
    {
      title: "Connect",
      links: ["Contact Us", "Twitter", "Facebook", "Instagram"],
    },
    { title: "Company", links: ["About Us", "Careers", "Press", "Affiliates"] },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {sections.map((section, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white p-2 rounded-l mb-2 sm:mb-0"
              />
              <button className="bg-blue-600 text-white p-2 rounded-r hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            © 2024 Your Company. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
