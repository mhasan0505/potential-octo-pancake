import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdMail, MdPayment } from "react-icons/md";
import "./BottomNavbar.css";
const navItems = [
  { icon: FaHome, label: "Home", href: "/" },
  { icon: FaShoppingCart, label: "Shop", href: "/shop" },
  { icon: MdPayment, label: "Checkout", href: "/checkout" },
  { icon: MdMail, label: "Contact", href: "/contact" },
];

const BottomNavbar = () => (
  <nav className="fixed bottom-0 left-0 w-full h-16 bg-blue-600 shadow-lg">
    <ul className="flex h-full items-center justify-around px-4">
      {navItems.map(({ icon: Icon, label, href }) => (
        <li key={label}>
          <a
            href={href}
            className="flex flex-col items-center gap-1 text-white hover:text-blue-200"
          >
            <Icon className="h-6 w-6" />
            <span className="text-sm">{label}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default BottomNavbar;
