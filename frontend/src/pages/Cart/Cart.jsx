import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (productId, action) => {
    const item = cartItems.find(item => item.id === productId);
    if (!item) return;

    let newQuantity;
    if (action === 'increase') {
      newQuantity = item.quantity + 1;
    } else if (action === 'decrease') {
      newQuantity = Math.max(1, item.quantity - 1);
    }

    updateQuantity(productId, newQuantity);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some products to your cart and they will show up here</p>
        <Link
          to="/products"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center gap-4 p-4 border-b last:border-b-0"
                >
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Model: {item.model}</p>
                    <p className="text-gray-600">Brand: {item.brand}</p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(item.id, 'decrease')}
                        className="p-2 hover:text-blue-500"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="px-4 py-2 border-x">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 'increase')}
                        className="p-2 hover:text-blue-500"
                        aria-label="Increase quantity"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-2"
                      aria-label="Remove item"
                    >
                      <FaTrash size={14} />
                      <span>Remove</span>
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-4">
                  <span>Subtotal</span>
                  <span className="font-semibold">${calculateSubtotal().toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between border-b pb-4">
                  <span>Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${calculateSubtotal().toFixed(2)}</span>
                </div>
              </div>
              
              <Link
                to="/checkout"
                className="mt-6 w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                Proceed to Checkout
              </Link>
              
              <Link
                to="/shop"
                className="mt-4 w-full border border-blue-500 text-blue-500 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
