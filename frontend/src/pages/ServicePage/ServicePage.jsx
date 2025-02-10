const ServicePage = () => {
  return (
    <div className="container mx-auto flex gap-4 items-center justify-center h-screen">
      <div className="w-1/2 h-80 bg-slate-500">left site</div>
      <div className="w-1/2 h-80 bg-slate-500 p-10">
        <form action="" className="flex flex-col gap-4 justify-center">
          <div className="flex gap-4">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="number" placeholder="Phone" />
          <select id="services">
            <option value="Buy Water Filter">Buy Water Filter</option>
            <option value="Install Water Filter">Install Water Filter</option>
            <option value="Filter Replacement">Filter Replacement</option>
            <option value="Re-Install Water Filter">
              Re-Install Water Filter
            </option>
          </select>
          <textarea placeholder="Message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ServicePage;
