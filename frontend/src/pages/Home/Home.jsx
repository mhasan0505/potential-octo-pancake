import BrandPartner from "../../components/Brand_Partner/BrandPartner";
import Carousel from "../../components/Carousel/Carousel";
import MyTeam from "../../components/MyTeam/MyTeam";
import OurClients from "../../components/OurClients/OurClients";
import Testimonials from "../../components/Testimonials/Testimonials";
import Shop from "../Shop/Shop";
// import RelativeProduct from "../../components/RelativeProduct/RelativeProduct";

const Home = () => {
  return (
    <div>
      <Carousel />
      <BrandPartner />
      <OurClients />
      <Shop />
        {/* <RelativeProduct /> */}
      <MyTeam />
      <Testimonials />
    </div>
  );
};

export default Home;
