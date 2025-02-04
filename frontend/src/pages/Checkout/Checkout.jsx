import PropTypes from "prop-types";
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import axios from 'axios';
import {
  validateEmail,
  validatePhone,
  validateZipCode
} from '../../utils/validation';

const OrderItem = ({ item }) => (
  <div className="flex justify-between items-center py-4 border-b">
    <div className="flex items-center gap-4">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
      <div>
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
      </div>
    </div>
    <p className="font-medium">৳{(item.price * item.quantity).toFixed(2)}</p>
  </div>
);

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, getCartTotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateShippingForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!validateEmail(formData.email)) newErrors.email = 'Valid email is required';
    if (!validatePhone(formData.phone)) newErrors.phone = 'Valid phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!validateZipCode(formData.zipCode)) newErrors.zipCode = 'Valid ZIP code is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateShippingForm()) return;
    
    if (cartItems.length === 0) {
      alert('Your cart is empty');
      navigate('/cart');
      return;
    }

    setLoading(true);
    
    try {
      const totalAmount = getCartTotal().toFixed(2); // Ensure 2 decimal places
      const orderData = new URLSearchParams({
        store_id: 'aquas67055c5b8e252',
        store_passwd: 'aquas67055c5b8e252@ssl',
        total_amount: totalAmount,
        currency: 'BDT',
        tran_id: `${Date.now()}-${Math.random().toString(36).substring(7)}`,
        success_url: `${window.location.origin}/success`,
        fail_url: `${window.location.origin}/fail`,
        cancel_url: `${window.location.origin}/cancel`,
        shipping_method: "NO",
        product_name: cartItems.map(item => item.name).join(", "),
        product_category: "Physical Goods",
        product_profile: "general",
        cus_name: `${formData.firstName} ${formData.lastName}`,
        cus_email: formData.email,
        cus_add1: formData.address,
        cus_city: formData.city,
        cus_state: formData.state,
        cus_postcode: formData.zipCode,
        cus_country: "Bangladesh",
        cus_phone: formData.phone,
        shipping_address: formData.address,
        shipping_city: formData.city,
        shipping_state: formData.state,
        shipping_postcode: formData.zipCode,
        shipping_country: "Bangladesh",
      }).toString();

      const response = await axios.post(
        'https://sandbox.sslcommerz.com/gwprocess/v4/api.php',
        orderData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      console.log('Payment Response:', response.data);

      if (response.data.status === 'SUCCESS') {
        // Clear cart before redirecting
        clearCart();
        window.location.href = response.data.GatewayPageURL;
      } else {
        throw new Error(response.data.failedreason || 'Failed to initialize payment');
      }
    } catch (error) {
      console.error('Payment initialization failed:', error);
      alert(error.message || 'Payment initialization failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderInput = (name, label, type = 'text', placeholder = '') => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${
          errors[name] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        }`}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shipping Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                {renderInput('firstName', 'First Name')}
                {renderInput('lastName', 'Last Name')}
              </div>
              {renderInput('email', 'Email', 'email')}
              {renderInput('phone', 'Phone Number', 'tel')}
              {renderInput('address', 'Address')}
              {renderInput('city', 'City')}
              {renderInput('state', 'State/Division')}
              {renderInput('zipCode', 'ZIP Code')}
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-md shadow-sm flex items-center justify-center gap-2 ${
                  loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <FaLock /> Proceed to Payment
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="divide-y">
                {cartItems.map(item => (
                  <OrderItem key={item.id} item={item} />
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>৳{getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
