import BrandPartner from "../../components/Brand_Partner/BrandPartner";
import Carousel from "../../components/Carousel/Carousel";
import OurClients from "../../components/OurClients/OurClients";
import Testimonials from "../../components/Testimonials/Testimonials";
import Shop from "../Shop/Shop";
import BEnefits from "../../components/Benefits/BEnefits";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Shop />
      <BrandPartner />
      <OurClients />
        {/* <RelativeProduct /> */}
        <BEnefits />
      <Testimonials />
    </div>
  );
};

export default Home;
