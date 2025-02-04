import { useState } from 'react';
import { FaSearch, FaBox, FaTruck, FaHome, FaCheckCircle } from 'react-icons/fa';

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const mockOrderStatuses = {
    '100001': { status: 'processing', step: 1 },
    '100002': { status: 'shipped', step: 2 },
    '100003': { status: 'delivered', step: 3 },
  };

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setOrderStatus(mockOrderStatuses[orderNumber] || null);
    setLoading(false);
  };

  const getStepStyle = (stepNumber, currentStep) => {
    return stepNumber <= currentStep
      ? 'bg-blue-500 text-white'
      : 'bg-gray-300 text-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>

          <form onSubmit={handleTrackOrder} className="mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                placeholder="Enter your order number"
                className="flex-1 px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                {loading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white" />
                ) : (
                  <>
                    <FaSearch />
                    Track
                  </>
                )}
              </button>
            </div>
          </form>

          {orderStatus ? (
            <div className="space-y-8">
              <div className="flex justify-between items-center relative">
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-gray-300 -z-10" />
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-blue-500 -z-10"
                     style={{ width: `${(orderStatus.step / 3) * 100}%` }} />
                
                <div className="flex flex-col items-center z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 
                    ${getStepStyle(1, orderStatus.step)}`}>
                    <FaBox className="w-6 h-6" />
                  </div>
                  <span className="text-sm">Order Placed</span>
                </div>

                <div className="flex flex-col items-center z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2
                    ${getStepStyle(2, orderStatus.step)}`}>
                    <FaTruck className="w-6 h-6" />
                  </div>
                  <span className="text-sm">Shipped</span>
                </div>

                <div className="flex flex-col items-center z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2
                    ${getStepStyle(3, orderStatus.step)}`}>
                    <FaHome className="w-6 h-6" />
                  </div>
                  <span className="text-sm">Delivered</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Shipping Updates</h2>
                <div className="space-y-4">
                  {orderStatus.step >= 1 && (
                    <div className="flex items-start gap-4">
                      <FaCheckCircle className="text-green-500 mt-1" />
                      <div>
                        <p className="font-medium">Order Confirmed</p>
                        <p className="text-sm text-gray-600">Your order has been confirmed and is being processed</p>
                      </div>
                    </div>
                  )}
                  {orderStatus.step >= 2 && (
                    <div className="flex items-start gap-4">
                      <FaCheckCircle className="text-green-500 mt-1" />
                      <div>
                        <p className="font-medium">Order Shipped</p>
                        <p className="text-sm text-gray-600">Your order has been shipped and is on its way</p>
                      </div>
                    </div>
                  )}
                  {orderStatus.step >= 3 && (
                    <div className="flex items-start gap-4">
                      <FaCheckCircle className="text-green-500 mt-1" />
                      <div>
                        <p className="font-medium">Order Delivered</p>
                        <p className="text-sm text-gray-600">Your order has been delivered successfully</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : orderNumber && !loading && (
            <div className="text-center text-gray-600">
              No order found with this number. Please check and try again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
