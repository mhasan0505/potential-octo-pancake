import { products } from '../../data/products';
import PropTypes from 'prop-types';
const RelatedProduct = ({ currentProductId, currentBrand }) => {
  const relatedProducts = products
    .filter(product => product.brand === currentBrand && product.id !== currentProductId)
    .slice(0, 4);

  return (
    <div className="relative-products py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Related Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="product-card bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">Model: {product.model}</p>
              <p className="text-gray-600 mb-4">Brand: {product.brand}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">৳{product.price}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
RelatedProduct.propTypes = {
  currentProductId: PropTypes.number.isRequired,
  currentBrand: PropTypes.string.isRequired
};

export default RelatedProduct;
