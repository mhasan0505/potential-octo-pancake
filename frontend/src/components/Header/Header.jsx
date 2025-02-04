import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { format } from "date-fns";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaPhone,
  FaSearch,
  FaShoppingCart,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { HiCalendarDays } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import logo from "../../assets/logo.png";

const navigation = [
  { name: "Home", to: "/" },
  { name: "Shop", to: "/shop" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
  { name: "Our Projects", to: "/our-projects" },
];

const socialLinks = [
  { Icon: FaFacebook, to: "#", label: "Facebook" },
  { Icon: FaWhatsapp, to: "#", label: "WhatsApp" },
  { Icon: FaInstagram, to: "#", label: "Instagram" },
  { Icon: FaYoutube, to: "#", label: "YouTube" },
];

const Header = ({ setShowLogin }) => {
  const { cartItems } = useCart();
  const formattedDate = format(new Date(), "d MMMM, yyyy");
  const [searchInput, setSearchInput] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchClick = () => {
    if (searchInput.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput("");
      setShowMobileSearch(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "shadow-md backdrop-blur-lg bg-white/90" : "bg-white"
    }`}>
      {/* Top Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-primary text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-sm">
              <HiCalendarDays className="mr-2" />
              {formattedDate}
            </span>
            <span className="flex items-center text-sm">
              <FaPhone className="mr-2" />
              +1 234 567 8900
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="hover:text-white/80 transition-colors duration-300 bg-green-500 border border-white rounded-full px-3 py-1">
              Book A Service
            </button>
            {socialLinks.map(({ Icon, to, label }) => (
              <a
                key={label}
                href={to}
                className="hover:text-white/80 transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16 md:h-20">
                {/* Logo */}
                <NavLink 
                  to="/" 
                  className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105"
                >
                  <img className="h-8 md:h-12 w-auto" src={logo} alt="Logo" />
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        `relative text-base font-medium transition-colors duration-300
                        ${isActive 
                          ? "text-primary" 
                          : "text-neutral-600 hover:text-primary"
                        }
                        after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                        after:w-full after:h-0.5 after:bg-primary
                        after:transform after:scale-x-0 after:origin-left
                        after:transition-transform after:duration-300
                        hover:after:scale-x-100
                        ${isActive ? "after:scale-x-100" : ""}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-1 md:space-x-4">
                  {/* Search Button */}
                  <button
                    onClick={() => setShowMobileSearch(!showMobileSearch)}
                    className="p-2 text-neutral-600 hover:text-primary transition-colors duration-300"
                  >
                    <FaSearch className="h-5 w-5" />
                  </button>

                  {/* Login Button - Hidden on Mobile */}
                  <button
                    onClick={() => setShowLogin(true)}
                    className="hidden md:flex items-center px-4 py-2 text-primary border border-primary rounded-md
                    hover:bg-primary hover:text-white transition-all duration-300
                    transform hover:scale-105"
                  >
                    Login
                  </button>

                  {/* Wishlist */}
                  <NavLink
                    to="/wishlist"
                    className="p-2 text-neutral-600 hover:text-primary transition-colors duration-300"
                  >
                    <FaHeart className="h-5 w-5" />
                  </NavLink>

                  {/* Cart */}
                  <NavLink
                    to="/cart"
                    className="p-2 text-neutral-600 hover:text-primary transition-colors duration-300 relative"
                  >
                    <FaShoppingCart className="h-5 w-5" />
                    {cartItems.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center
                        animate-pulse"
                      >
                        {cartItems.length}
                      </span>
                    )}
                  </NavLink>

                  {/* Mobile Menu Button */}
                  <Disclosure.Button className="md:hidden p-2 text-neutral-600 hover:text-primary transition-colors duration-300">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Search Bar */}
            <Transition
              show={showMobileSearch}
              enter="transition-all duration-300"
              enterFrom="opacity-0 -translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-300"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-4"
            >
              <div className="border-t border-neutral-200 p-4">
                <div className="flex items-center bg-neutral-100 rounded-md">
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search products..."
                    className="flex-1 px-4 py-2 bg-transparent focus:outline-none"
                    onKeyPress={(e) => e.key === "Enter" && handleSearchClick()}
                  />
                  <button
                    onClick={handleSearchClick}
                    className="p-2 text-neutral-600 hover:text-primary transition-colors duration-300"
                  >
                    <FaSearch className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </Transition>

            {/* Mobile Navigation Menu */}
            <Transition
              show={open}
              enter="transition-all duration-300"
              enterFrom="opacity-0 -translate-y-4"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all duration-300"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-4"
            >
              <Disclosure.Panel className="md:hidden border-t border-neutral-200">
                <div className="px-4 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={NavLink}
                      to={item.to}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-neutral-600 hover:bg-primary/5 hover:text-primary"
                        }`
                      }
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                  {/* Mobile Login Button */}
                  <button
                    onClick={() => {
                      setShowLogin(true);
                      open(false);
                    }}
                    className="w-full text-left px-3 py-2 text-base font-medium text-neutral-600 hover:bg-primary/5 hover:text-primary transition-colors duration-300 rounded-md"
                  >
                    Login
                  </button>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </header>
  );
};

Header.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
};

export default Header;
