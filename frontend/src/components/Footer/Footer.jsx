import { useEffect, useState } from "react";
import {
  FaFacebookSquare,
  FaGooglePlusG,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowRoundForward, IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import sslCommerz_mobile from "../../assets/ssl-mobile.png";
import ssltablet from "../../assets/ssl-tablet.png";
import sslWeb from "../../assets/ssl-web.png";
import BottomNavbar from "../BottomNavbar/BottomNavbar";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(window.scrollY > 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
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

  return (
    <>
      <section className="bg-secondary relative">
        <div className="container mx-auto">
          <div className="lg:flex md:flex flex flex-col items-center justify-center px-4 py-10">
            <h1 className="text-xl md:text-2xl font-bold text-white py-4 px-4">
              Please <span className="text-primary">Call Us</span> to Take an
              Extraordinary Service
            </h1>
            <button className="flex items-center gap-2 bg-primary px-4 rounded-full py-2 text-[15px] font-semibold text-white">
              <FaPhoneAlt className="text-white text-[20px]" />

              <a href="tel:+880 1958-493387">+880 1958-493387</a>
            </button>
          </div>

          <hr className="my-8 text-white border-dashed" />

          <div className="bg-secondary text-white px-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-8">
            {/* Logo and Hours */}
            <div className="flex flex-col">
              <div className="bg-white w-[200px] h-[100px] rounded">
                <img
                  src={logo}
                  alt="Aqua Support BD"
                  width="160"
                  height="100"
                  className="mx-auto pt-4"
                />
              </div>
              <p className="text-white">Open The Door For Heathy Living</p>
              <div className="text-[15px] py-4 leading-6">
                <h1 className="text-md font-bold pb-2 text-white">
                  Open Hours:
                </h1>
                <p className="text-white">
                  Saturday -Thursday: 9:00am - 8:00pm
                </p>
                <p className="text-white">Friday: Closed</p>
              </div>
            </div>

            {/* Address */}
            <div>
              <h1 className="text-md font-bold text-white pb-2">Address:</h1>
              <div className="flex items-center gap-4 text-[15px]">
                <FaLocationDot className="text-primary text-lg" />
                <p className="text-white">
                  House #19, Road #02, Block #Ka, Mirpur-06, Dhaka, Bangladesh,
                  1216
                </p>
              </div>
              <div className="text-[15px] flex items-baseline gap-4 py-4">
                <FaPhoneAlt className="text-lg text-primary" />
                <div className="leading-6 flex flex-col gap-1">
                  {contactInfo.map(({ label, number }) => (
                    <p key={number} className="text-white">
                      {label} : {number}
                    </p>
                  ))}
                </div>
              </div>
              <div className="text-[15px] flex items-center gap-4">
                <IoIosMail className="text-lg text-primary" />
                <p className="text-white">info@aquasupportbd.com</p>
              </div>
            </div>

            {/* Links */}
            <div className="text-[15px]">
              <h1 className="text-md font-bold text-white pb-2">
                Usefull Links
              </h1>
              <div className="flex flex-col leading-6">
                {links.map(({ to, text }) => (
                  <Link
                    key={to}
                    to={to}
                    className="text-white hover:text-primary"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>

            {/* Subscribe */}
            <div>
              <h1 className="text-md font-bold text-white">Subscribe</h1>
              <p className="text-white">
                For latest news and offers subscribe to our newsletter
              </p>
              <div className="flex items-center py-4">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full h-10 px-6 rounded-l-full text-black outline-none placeholder:text-[15px] focus:border-primary"
                />
                <button type="button" aria-label="Subscribe">
                  <IoIosArrowRoundForward className="text-[20px] bg-primary h-10 w-10 rounded-r-full" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-2">
            <img
              className="block sm:hidden"
              src={sslCommerz_mobile}
              alt="Mobile Payment Options"
            />
            <img
              className="hidden sm:block lg:hidden"
              src={ssltablet}
              alt="Tablet Payment Options"
            />
            <img
              className="hidden lg:block"
              src={sslWeb}
              alt="Web Payment Options"
            />
          </div>
        </div>
      </section>

      <div className="bg-secondary/90 w-full items-center flex flex-col justify-center text-[15px] text-white mb-16 md:mb-0">
        <p className="text-white">
          {" "}
          Aqua Support BD © 2024 All Right Reserved{" "}
        </p>
        <div className="flex items-center gap-4 py-4">
          {[FaFacebookSquare, FaInstagram, FaGooglePlusG, FaYoutube].map(
            (Icon, index) => (
              <Icon
                key={index}
                className="icon text-white hover:text-primary"
              />
            )
          )}
        </div>
      </div>

      <div className={`absolute md:hidden ${isVisible ? "" : "hidden"}`}>
        <BottomNavbar />
      </div>
    </>
  );
};

export default Footer;
