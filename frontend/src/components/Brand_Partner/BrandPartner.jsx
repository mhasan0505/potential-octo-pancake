import aqua from "../../assets/aqua/aqua.png";
import heron from "../../assets/heron.png";
import hollow_tech from "../../assets/Hollow_tech/hollow-tech.png";
import lan_shan from "../../assets/LanShan/lan-shan.png";
import sanaky from "../../assets/Employee/CEO.png";
import "./BrandPartner.css";

const BrandPartner = () => {
  const partners = [
    { name: "Sanaky", image: sanaky },
    { name: "Lan Shan", image: lan_shan },
    { name: "Aqua", image: aqua },
    { name: "Hollow Tech", image: hollow_tech },
    { name: "Heron", image: heron },
  ];

  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-t_color text-[25px] lg:text-[45px] leading-none mb-12 text-center">
          Our Brand Partners
        </h2>

        <div className="grid grid-cols-12 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
            >
              <div className="bg-slate-100 rounded-lg h-[160px] grid place-items-center p-4 lg:p-8 hover:scale-105 transition-all">
                <img
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  className="w-auto max-h-[80px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartner;
