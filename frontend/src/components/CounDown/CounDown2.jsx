const countdown = [
  {
    time: "35",
    format: "Days",
  },
  {
    time: "17",
    format: "Hours",
  },
  {
    time: "11",
    format: "Minutes",
  },
  {
    time: "55",
    format: "Seconds",
  },
];

const Countdown = () => (
  <div className="bg-white text-black text-opacity-90 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl flex items-center">
    {countdown.map((item, i) => {
      const { time, format } = item;
      return (
        <div
          className={`flex flex-col text-center p-4 md:p-6 ${
            i < countdown.length - 1 && "border-r"
          }`}
          key={i}
        >
          <span className="ext-3xl md:text-[40px] leading-none font-bold">
            {time}
          </span>
          <span className="text-base opacity-50">{format}</span>
        </div>
      );
    })}
  </div>
);

const SubscribeForm = () => (
  <form action="" className="mt-8 w-full flex flex-col lg:flex-row">
    <div className="lg:mx-3 mb-6 lg:mb-0 lg:w-1/3">
      <input
        type="text"
        className="min-h-[48px] px-6 rounded-full focus:border focus:outline-none focus:border-blue-600 w-full"
        id="name"
        placeholder="Name"
      />
    </div>
    <div className="lg:mx-3 mb-6 lg:mb-0 lg:w-1/3">
      <input
        type="text"
        className="min-h-[48px] px-6 rounded-full focus:border focus:outline-none focus:border-blue-600 w-full"
        id="email"
        placeholder="Email"
      />
    </div>
    <div className="lg:mx-3 lg:w-1/3">
      <button
        type="submit"
        className="text-white min-h-[48px] rounded-full font-semibold w-full bg-slate-800 hover:bg-opacity-95"
      >
        Get Updates
      </button>
    </div>
  </form>
);

const CountDown2 = () => {
  return (
    <section
      className="ezy__comingsoon11 light text-white flex items-center py-28 md:py-48 relative"
      style={{
        background:
          "linear-gradient(180deg,#ee6198 0%,#ea6c82 45%,#e77869 100%);",
      }}
    >
      {/* countdown */}
      <Countdown />

      <div className="container px-4 mt-10 lg:mt-0">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 md:col-start-4 lg:col-span-4 lg:col-start-5 text-center">
            <h2 className="font-bold text-[32px] md:text-[50px] leading-none mb-4">
              Coming Soon
            </h2>
            <p className="text-lg leading-6 opacity-80 mb-0 lg:px-12">
              Our website is under construction. Follow us to be updated.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-10 sm:col-start-2 md:col-span-8 md:col-start-3 md:px-16">
            <SubscribeForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CountDown2;
