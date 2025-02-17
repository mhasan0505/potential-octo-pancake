import { useState } from 'react';

const ServicePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    filterModel: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center justify-center h-screen py-12 px-4 bg-gray-100">
      <div className="w-full md:w-1/2 h-auto bg-white shadow-lg rounded-lg p-10 transition-transform duration-300 hover:scale-105">
        <h2 className="text-2xl font-bold mb-4">Service Information</h2>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quo distinctio hic rerum, soluta, explicabo placeat similique optio qui vitae unde accusamus.</p>
      </div>
      <div className="w-full md:w-1/2 h-auto bg-white shadow-lg rounded-lg p-10 transition-transform duration-300 hover:scale-105">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form action="" className="flex flex-col gap-4 justify-center">
          <div className="flex w-full gap-4">
            <input type="text" name="firstName" placeholder="First Name" required value={formData.firstName} onChange={handleChange} className="w-full h-12 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input type="text" name="lastName" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} className="w-full h-12 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <input type="number" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} className="w-full h-12 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <input type="text" name="filterModel" placeholder="Filter Model" value={formData.filterModel} onChange={handleChange} className="w-full h-12 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <select id="services" name="service" required value={formData.service} onChange={handleChange} className="w-full h-12 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
            <option value="Buy Water Filter">Buy Water Filter</option>
            <option value="Install Water Filter">Install Water Filter</option>
            <option value="Filter Replacement">Filter Replacement</option>
            <option value="Re-Install Water Filter">Re-Install Water Filter</option>
          </select>
          <textarea name="message" placeholder="Message" required value={formData.message} onChange={handleChange} className="w-full rounded-lg border border-gray-300 h-24 p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          <button type="submit" className="h-12 rounded-lg bg-cyan-500 text-white font-bold hover:bg-cyan-600 transition duration-300">Book A Service</button>
        </form>
      </div>
    </div>
  );
};

export default ServicePage;
