import axios from 'axios';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Payment = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    total_amount: 1000,
    currency: 'BDT',
    tran_id: uuidv4(), // Generate unique transaction ID
    success_url: `${window.location.origin}/success`,
    fail_url: `${window.location.origin}/fail`,
    cancel_url: `${window.location.origin}/cancel`,
    emi_option: 0,
    cus_name: '',
    cus_email: '',
    cus_phone: '',
    cus_add1: '',
    cus_city: '',
    cus_country: 'Bangladesh',
    shipping_method: 'NO',
    product_name: 'Demo Product',
    product_category: 'Demo Category',
    product_profile: 'general',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Direct API call to SSL COMMERZ
      const response = await axios.post(
        'https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php',
        {
          store_id: 'aquas67055c5b8e252',
          store_passwd: 'aquas67055c5b8e252@ssl',
          total_amount: paymentInfo.total_amount,
          currency: paymentInfo.currency,
          tran_id: paymentInfo.tran_id,
          success_url: `${window.location.origin}/success`,
          fail_url: `${window.location.origin}/fail`,
          cancel_url: `${window.location.origin}/cancel`,
          cus_name: paymentInfo.cus_name,
          cus_email: paymentInfo.cus_email,
          cus_phone: paymentInfo.cus_phone,
          cus_add1: paymentInfo.cus_add1,
          cus_city: paymentInfo.cus_city,
          cus_country: paymentInfo.cus_country,
          shipping_method: 'NO',
          product_name: 'Water Purifier',
          product_category: 'Electronics',
          product_profile: 'physical-goods',
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      if (response.data.status === 'SUCCESS') {
        // Redirect to SSL COMMERZ payment gateway
        window.location.href = response.data.GatewayPageURL;
      } else {
        console.error('Payment initiation failed:', response.data);
        alert('Failed to initiate payment. Please try again.');
      }
    } catch (error) {
      console.error('Payment initiation failed:', error);
      alert('Payment initiation failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="cus_name"
            value={paymentInfo.cus_name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="cus_email"
            value={paymentInfo.cus_email}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="cus_phone"
            value={paymentInfo.cus_phone}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="cus_add1"
            value={paymentInfo.cus_add1}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="cus_city"
            value={paymentInfo.cus_city}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            name="total_amount"
            value={paymentInfo.total_amount}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            min="1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;