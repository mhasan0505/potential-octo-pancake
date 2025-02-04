import { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaGooglePlusG,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import sslWeb from "../../assets/ssl-web.png";
import BottomNavbar from "../BottomNavbar/BottomNavbar";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", text: "Home" },
    { to: "/shop", text: "Shop" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];

  const contactInfo = [
    { label: "Customer Service", number: "01819065076" },
    { label: "Sales & Marketing", number: "01958493387" },
    { label: "IT Service", number: "01619008089" },
    { label: "Industrial Support", number: "01958493388" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    setEmail("");
  };

  return (
    <>
      <footer className="relative bg-black mb-16 md:mb-0">
        {/* Wave Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/5 transform -skew-y-3"></div>
          <div className="absolute bottom-10 left-0 right-0 h-20 bg-white/5 transform skew-y-3"></div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 relative">
          {/* Top CTA Section */}
          <div className="py-12 text-center">
            <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Experience <span className="text-secondary animate-pulse">Extraordinary</span> Service
              </h2>
              <a
                href="tel:+880 1958-493387"
                className="inline-flex items-center gap-3 bg-white hover:bg-secondary px-8 py-4 rounded-full transition-all duration-300 text-primary hover:text-white font-bold group"
              >
                <FaPhoneAlt className="text-xl group-hover:rotate-12 transition-transform" />
                <span>+880 1958-493387</span>
              </a>
            </div>
          </div>

          {/* Main Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <img
                  src={logo}
                  alt="Aqua Support BD"
                  className="w-40 mx-auto"
                />
                <p className="text-white/90 text-center mt-4 font-medium">
                  Open The Door For Healthy Living
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg space-y-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                  Open Hours:
                </h3>
                <p className="text-white/90 pl-4">Saturday - Thursday: 9:00am - 8:00pm</p>
                <p className="text-white/90 pl-4">Friday: Closed</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.text}>
                    <Link
                      to={link.to}
                      className="text-white/90 hover:text-secondary flex items-center gap-2 group transition-all duration-300"
                    >
                      <span className="w-0 group-hover:w-4 transition-all duration-300 h-[2px] bg-secondary"></span>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <FaLocationDot className="text-secondary text-xl mt-1 flex-shrink-0" />
                  <p className="text-white/90 group-hover:text-white transition-colors">
                    House #19, Road #02, Block #Ka, Mirpur-06, Dhaka, Bangladesh, 1216
                  </p>
                </div>
                <div className="space-y-3">
                  {contactInfo.map(({ label, number }) => (
                    <div key={number} className="group">
                      <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                        <FaPhoneAlt className="text-secondary group-hover:rotate-12 transition-transform" />
                        <div>
                          <span className="text-white/70 text-sm">{label}</span>
                          <a href={`tel:${number}`} className="block text-white group-hover:text-secondary transition-colors">
                            {number}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary border border-white/10 transition-all duration-300"
                  />
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-secondary transition-all duration-300"></div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-light text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Subscribe to Newsletter
                </button>
              </form>
              <div className="flex justify-center gap-4 pt-4">
                <a href="#" className="text-white/80 hover:text-secondary text-2xl transition-all duration-300 hover:scale-110">
                  <FaFacebookSquare />
                </a>
                <a href="#" className="text-white/80 hover:text-secondary text-2xl transition-all duration-300 hover:scale-110">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white/80 hover:text-secondary text-2xl transition-all duration-300 hover:scale-110">
                  <FaYoutube />
                </a>
                <a href="#" className="text-white/80 hover:text-secondary text-2xl transition-all duration-300 hover:scale-110">
                  <FaGooglePlusG />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-6 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/90 text-center md:text-left">
                &copy; {new Date().getFullYear()} Aqua Support BD. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={sslWeb} 
                  alt="SSL Commerz" 
                  className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <div className={`fixed bottom-0 left-0 right-0 md:hidden ${isVisible ? "" : "hidden"} z-50`}>
        <BottomNavbar />
      </div>
    </>
  );
};

export default Footer;
