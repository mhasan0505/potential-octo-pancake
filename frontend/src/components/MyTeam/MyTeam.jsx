import kazi from "../../assets/Employee/CEO.png";
import salim from "../../assets/Employee/salim.png";
import hasan from "../../assets/Employee/hasan.png";
import rubel from "../../assets/Employee/rubel.png";
import sabbir from "../../assets/Employee/sabbir.png";
import tithi from "../../assets/Employee/tithi.png";
import ashik from "../../assets/Employee/ashik.png";
import { FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa";

const people = [
  {
    name: "Mr. Kazi Mohibul Morshed",
    role: "CEO",
    imageUrl: kazi,
    bio: "Leading innovation in water purification technology",
    socialLinks: [
      {
        link: "#",
        icon: FaLinkedin,
      },
      {
        link: "#",
        icon: FaTwitter,
      },
    ],
  },
  {
    name: "Mahmudul Hasan",
    role: "GM, Business Development",
    imageUrl: hasan,
    bio: "Driving strategic growth and partnerships",
    socialLinks: [
      {
        link: "#",
        icon: FaLinkedin,
      },
      {
        link: "#",
        icon: FaTwitter,
      },
    ],
  },
  {
    name: "Salim Ahmmed",
    role: "DGM, Technical Support",
    imageUrl: salim,
    bio: "Ensuring excellence in technical solutions",
    socialLinks: [
      {
        link: "#",
        icon: FaLinkedin,
      },
      {
        link: "#",
        icon: FaTwitter,
      },
    ],
  },
  {
    name: "Mr. Sabbir Ahmed",
    role: "Executive - Business Development",
    imageUrl: sabbir,
    bio: "Expanding market presence and client relationships",
    socialLinks: [
      {
        link: "#",
        icon: FaLinkedin,
      },
      {
        link: "#",
        icon: FaTwitter,
      },
    ],
  },
  {
    name: "Md. Rubel Ahmed",
    role: "Accounts Manager",
    imageUrl: rubel,
    bio: "Managing financial growth and stability",
    socialLinks: [
      {
        link: "#",
        icon: FaLinkedin,
      },
      {
        link: "#",
        icon: FaTwitter,
      },
    ],
  },
  {
    name: "Ashik Mostafa",
    role: "Senior Executive -Business Development",
    imageUrl: ashik,
    bio: "Developing key business opportunities",
    socialLinks: [
      {
        link: "#",
        icon: FaLinkedin,
      },
      {
        link: "#",
        icon: FaTwitter,
      },
    ],
  },
  {
    name: "Easmin Ahsan Tithi",
    role: "Customer Relationship Manager",
    imageUrl: tithi,
    bio: "Building lasting customer connections",
    socialLinks: [
      {
        link: "#",
        icon: FaLinkedin,
      },
      {
        link: "#",
        icon: FaTwitter,
      },
    ],
  },
];

const MyTeam = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">Meet Our Expert Team</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Our dedicated team of professionals is committed to providing you with the best service and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {people.map((person, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={person.imageUrl}
                  alt={person.name}
                  className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-center space-x-4 mb-4">
                      {person.socialLinks.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.link}
                          className="text-white hover:text-primary-light transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-primary transition-colors duration-300">
                  {person.name}
                </h3>
                <p className="text-neutral-600 mt-1">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300">
            Join Our Team
            <FaArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyTeam;
