import pran from "../../assets/ClinetLogos/Pran.png";
import rfl from "../../assets/ClinetLogos/RFL.png";
import arong from "../../assets/ClinetLogos/aarong-dairy.png";
import bdArmy from "../../assets/ClinetLogos/bdArmy.png";
import bengal from "../../assets/ClinetLogos/bengal.jpeg";
import brac from "../../assets/ClinetLogos/brac-logo.jpg";
import honda from "../../assets/ClinetLogos/honda.png";
import runner from "../../assets/ClinetLogos/runner.png";
import square from "../../assets/ClinetLogos/square.png";

const clientLogos = [
  {
    logo: pran,
    alt: "",
  },
  {
    logo: rfl,
    alt: "",
  },
  {
    logo: honda,
    alt: "",
  },
  {
    logo: square,
    alt: "",
  },
  {
    logo: bengal,
    alt: "",
  },
  {
    logo: runner,
    alt: "",
  },
  {
    logo: arong,
    alt: "",
  },
  {
    logo: brac,
    alt: "",
  },
  {
    logo: bdArmy,
    alt: "",
  },
];

const OurClients = () => {
  return (
    <section className="ezy__clients9 light py-14 md:py-24 bg-white text-zinc-900 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 md:items-end text-center gap-6">
          <div className="col-span-12 md:col-span-9 mb-6 sm:mb-12 text-start">
            <div className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-9">
                <h2 className="font-bold text-t_color text-[25px] lg:text-[45px] leading-none mb-6">
                  Our Trusted Clients
                </h2>
                <p className="text-lg leading-9 opacity-70">
                  It&apos;s easier to reach your savings goals when you have the
                  right savings account. Take a look and find the right one for
                  you! It&apos;s easier to reach your savings goals when you
                  have the right savings account.
                </p>
              </div>
            </div>
          </div>

          {clientLogos.map((client, i) => (
            <div
              className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
              key={i}
            >
              <div className="bg-slate-100 rounded-lg h-[160px] grid place-items-center p-4 lg:p-8 hover:scale-105 transition-all">
                <img
                  src={client.logo}
                  alt={client.alt || "Client logo"}
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

export default OurClients;
