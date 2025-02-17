import heroImage from "../../assets/herosection.png";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[300px] md:min-h-[70vh] lg:min-h-screen bg-no-repeat bg-cover bg-center p-4" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
    </div>
  );
};

export default Hero;
