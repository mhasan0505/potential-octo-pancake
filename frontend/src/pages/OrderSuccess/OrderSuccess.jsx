import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaBox, FaTruck, FaHome } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();
  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  useEffect(() => {
    // Clear the cart after successful order
    clearCart();
    
    // If someone tries to access this page directly, redirect them to home
    if (!sessionStorage.getItem('orderComplete')) {
      navigate('/');
    }
    return () => sessionStorage.removeItem('orderComplete');
  }, [clearCart, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You For Your Order!
          </h1>
          <p className="text-gray-600 mb-8">
            Order #{orderNumber} has been successfully placed
          </p>

          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <FaBox />
                </div>
                <p className="text-sm mt-2">Order Placed</p>
              </div>
              <div className="w-16 h-1 bg-blue-500 mx-2" />
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  <FaTruck />
                </div>
                <p className="text-sm mt-2">Processing</p>
              </div>
              <div className="w-16 h-1 bg-gray-300 mx-2" />
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white">
                  <FaHome />
                </div>
                <p className="text-sm mt-2">Delivered</p>
              </div>
            </div>
          </div>

          <div className="text-left bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Order Details</h2>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Order Number:</span> #{orderNumber}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Estimated Delivery:</span>{' '}
                {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Shipping Method:</span> Standard Shipping
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/order-tracking"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Track Order
            </Link>
            <Link
              to="/"
              className="border border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
