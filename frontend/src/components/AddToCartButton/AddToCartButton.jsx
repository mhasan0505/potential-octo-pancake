import { useCart } from '../../context/CartContext';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

const AddToCartButton = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    notify();
  };
const notify = () => {
    toast("Product added to cart!");
  };
  return (
    <div>
      <button
      onClick={handleAddToCart} 
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
    >
      Add to Cart
    </button>
    <ToastContainer  />
    </div>
  );
};

AddToCartButton.propTypes = {
  product: PropTypes.object.isRequired,
};

export default AddToCartButton;
