import { motion, useScroll,  useSpring } from "framer-motion";
import conversation from "../../assets/icons/conversation.png";
import diagram from "../../assets/icons/diagram.png";
import map from "../../assets/icons/map.png";
import paymentMethod from "../../assets/icons/payment-method.png";
import support from "../../assets/icons/support.png";
import warranty from "../../assets/icons/warranty.png";
import MyTeam from "../../components/MyTeam/MyTeam";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const services = [
    {
      icon: diagram,
      title: "Quality Assurance",
      description: "Proven track record with Bangladesh's top corporations",
    },
    {
      icon: warranty,
      title: "Warranty",
      description: "Comprehensive warranty on all products",
    },
    {
      icon: map,
      title: "Service Network",
      description: "Nationwide service network",
    },
    {
      icon: support,
      title: "Customer Support",
      description: "24/7 customer support",
    },
    {
      icon: conversation,
      title: "Consultation",
      description: "Expert consultation and water quality assessment",
    },
    {
      icon: paymentMethod,
      title: "Payment",
      description: "Competitive pricing with flexible payment options",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="text-center mb-20 relative"
        >
          <motion.h1 
            className="text-2xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.2
            }}
          >
            About{" "}
            <span className="text-primary text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Aqua Support Engineering
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Since 2015, we have been Bangladesh&apos;s leading provider of
            comprehensive water purification solutions, serving both residential
            and commercial sectors across the nation.
          </motion.p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            whileTap="tap"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 backdrop-blur-sm bg-opacity-90"
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Our Vision
            </motion.h2>
            <motion.p 
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              To ensure every Bangladeshi has access to safe, pure drinking
              water, creating a healthier nation where waterborne diseases are a
              concern of the past. We envision a future where advanced water
              purification technology is accessible to all segments of society.
            </motion.p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            whileTap="tap"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 backdrop-blur-sm bg-opacity-90"
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              In a country where approximately 25% of the population still
              struggles with access to safe drinking water, our mission is
              multifaceted:
            </motion.p>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                "To revolutionize water purification technology through innovative solutions",
                "To protect public health by eliminating waterborne diseases",
                "To educate communities about safe drinking water",
                "To support industries with sustainable water treatment",
                "To make premium technology accessible to all economic segments",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start group"
                >
                  <motion.span 
                    className="inline-block w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mt-2 mr-3"
                    whileHover={{ scale: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                  <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              custom={index}
              className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 backdrop-blur-sm bg-opacity-90"
            >
              <motion.div 
                className="flex items-center mb-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-6 h-6 object-contain"
                  />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </motion.div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <MyTeam />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
