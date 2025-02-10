
import heroImage from "../../assets/herosection.png";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-screen bg-no-repeat bg-cover bg-center" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"> {/* Dark overlay for better text visibility */}
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Aqua</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
              Discover the perfect blend of water purification and filtration
              solutions for your home or business.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg 
              transition duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
