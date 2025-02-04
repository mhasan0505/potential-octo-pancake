import { Mail, MapPin, Phone } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

const ContactInfo = ({ icon: Icon, title, content, link }) => (
  <div className="flex items-center space-x-4 mb-6 p-4 hover:bg-slate-50 rounded-lg transition-colors">
    <div className="bg-blue-50 p-3 rounded-lg">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      {link ? (
        <a href={link} className="text-sm text-gray-600 hover:text-blue-600">
          {content}
        </a>
      ) : (
        <p className="text-sm text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

ContactInfo.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <textarea
        rows="4"
        placeholder="Your Message"
        className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content:
        "House #19, Road #02, Block #Ka, Mirpur-06, Dhaka, Bangladesh, 1216",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@aquasupportbd.com",
      link: "mailto:info@aquasupportbd.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+880 1819065076",
      link: "tel:+8801819065076",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-t_color mb-8">
              Contact Information
            </h2>
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <ContactInfo key={index} {...info} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-t_color mb-2">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;re here to help and answer any questions you might have.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
