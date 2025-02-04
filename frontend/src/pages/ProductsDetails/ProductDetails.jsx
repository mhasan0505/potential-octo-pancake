/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';
import { FaStar, FaShoppingCart, FaHeart, FaShippingFast, FaExchangeAlt } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const foundProduct = products.find((item) => item.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(0);
    }
  }, [id]);

  const handleAddToCart = () => {
    setLoading(true);
    try {
      addToCart(product, quantity);
      toast.success(`${quantity} ${product.name} added to cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
      navigate('/cart');
    } catch (error) {
      toast.error('Failed to add item to cart. Please try again.', {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="p-8 rounded-lg bg-white shadow-lg">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-center">Loading product details...</p>
        </div>
      </div>
    );
  }

  const images = Array.isArray(product.image) ? product.image : [product.image];

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-neutral-100">
              <img
                src={selectedImage || images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === image ? 'border-primary' : 'border-transparent hover:border-primary-light'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-neutral-800">{product.name}</h1>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < product.rating ? 'text-warning' : 'text-neutral-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-neutral-600">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline space-x-4">
              <span className="text-2xl font-bold text-primary">${product.price}</span>
              {product.oldPrice && (
                <span className="text-lg text-neutral-400 line-through">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            <div className="prose text-neutral-600 max-w-none">
              <p>{product.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-neutral-700 font-medium">Quantity:</label>
                <div className="flex items-center border border-neutral-200 rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-3 py-2 text-neutral-600 hover:text-primary transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-16 text-center border-x border-neutral-200 py-2 text-neutral-800"
                  />
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-3 py-2 text-neutral-600 hover:text-primary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={loading}
                  className="flex-1 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300 flex items-center justify-center"
                >
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-6 w-6 border-3 border-white border-t-transparent"></div>
                      <span className="animate-pulse">Adding to Cart...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <FaShoppingCart className="mr-2" />
                      Add to Cart
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t border-neutral-200 pt-6 space-y-4">
              <div className="flex items-center space-x-2 text-neutral-600">
                <FaShippingFast className="h-5 w-5 text-primary" />
                <span>Free shipping on orders over $100</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-600">
                <FaExchangeAlt className="h-5 w-5 text-primary" />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
