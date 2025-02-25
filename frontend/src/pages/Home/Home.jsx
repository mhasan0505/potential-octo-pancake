import BrandPartner from "../../components/Brand_Partner/BrandPartner";
import Carousel from "../../components/Carousel/Carousel";
import OurClients from "../../components/OurClients/OurClients";
import Testimonials from "../../components/Testimonials/Testimonials";
import Shop from "../Shop/Shop";
import Hero from "../../components/Hero/Hero";
import Benefits from "../../components/Benefits/Benefits";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Carousel />
      <Shop />
      <BrandPartner />
      <Benefits />
      <OurClients />
      <Testimonials />
    </div>
  );
};

export default Home;

