import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaDownload, FaEye } from 'react-icons/fa';

const mockOrders = [
  {
    id: '100001',
    date: '2024-01-05',
    total: 299.99,
    status: 'Processing',
    items: [
      { id: 1, name: 'Water Purifier Model X', quantity: 1, price: 299.99 }
    ]
  },
  {
    id: '100002',
    date: '2024-01-01',
    total: 599.98,
    status: 'Delivered',
    items: [
      { id: 2, name: 'Premium Filter System', quantity: 2, price: 299.99 }
    ]
  }
];

const OrderHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders] = useState(mockOrders);

  const filteredOrders = orders.filter(order => 
    order.id.includes(searchTerm) ||
    order.items.some(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Order History</h1>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search orders..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {filteredOrders.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No orders found matching your search.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredOrders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                      <p className="text-gray-600">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center border-t pt-4"
                      >
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-600">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">Total Amount:</p>
                      <p className="font-semibold">${order.total.toFixed(2)}</p>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <Link
                      to={`/order-tracking?order=${order.id}`}
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
                    >
                      <FaEye />
                      Track Order
                    </Link>
                    <button
                      onClick={() => {/* Implement invoice download */}}
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
                    >
                      <FaDownload />
                      Download Invoice
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
