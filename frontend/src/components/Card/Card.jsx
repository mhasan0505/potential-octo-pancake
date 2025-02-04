import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Card = ({ product }) => {
  const calculateEMI = (price) => {
    return Math.round(price / 6); // Simple 6-month EMI calculation
  };

  const getFeatureStyle = (feature) => {
    // Define individual styles for each feature
    const featureStyles = {
      RO: {
        backgroundColor: "#16a34a ",
        opacity: "0.4",
        color: "white",
        border: "2px solid #45a049",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      },
      UV: {
        backgroundColor: "#2196F3",
        color: "white",
        border: "none"
      },
      UF: {
        backgroundColor: "#9C27B0",
        color: "white",
        border: "none"
      },
      TDS: {
        backgroundColor: "#FF9800",
        color: "white",
        border: "none"
      },
      Pump: {
        backgroundColor: "#F3B664",
        color: "white",
        border: "none"
      },
      Copper: {
        backgroundColor: "#CD7F32",
        color: "white",
        border: "none"
      },
      "Active Copper": {
        backgroundColor: "#B87333",
        color: "white",
        border: "none"
      }
    };

    // For combined features (e.g., "RO+UV+UF")
    if (feature.includes("+")) {
      return {
        backgroundColor: "#1E88E5",
        color: "white",
        border: "none"
      };
    }

    // Return the style for the feature, or a default style
    return featureStyles[feature] || {
      backgroundColor: "#757575",
      color: "white",
      border: "none"
    };
  };

  return (
    <div className="container mx-auto bg-white w-60 rounded-xl overflow-hidden border hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-full flex flex-col">
        {product.bestseller && (
          <div className="absolute top-0 left-0 bg-[#F3B664] text-white px-2 py-1 text-xs font-semibold z-10">
            BESTSELLER
          </div>
        )}
        <div className="mb-4 pt-4 bg-[#f9f9f9] flex-shrink-0">
          <NavLink to={`/product/${product.id}`}>
            <img
              src={Array.isArray(product.image) ? product.image[0] : product.image}
              alt={product.name}
              className="w-full h-48 object-contain hover:scale-105 transition-transform duration-300"
            />
          </NavLink>
        </div>
        <div className="space-y-3 p-4 flex-grow flex flex-col">
          <NavLink to={`/product/${product.id}`} className="hover:text-blue-600 transition-colors">
            <h2 className="text-md font-semibold text-gray-800 line-clamp-2">
              {product.name}
            </h2>
          </NavLink>
          
          <div className="flex gap-2 flex-wrap">
            {product.features?.map((feature, index) => {
              const style = getFeatureStyle(feature);
              return (
                <span
                  key={index}
                  style={style}
                  className="px-3 py-1 rounded-md text-xs font-medium"
                >
                  {feature}
                </span>
              );
            })}
          </div>

          <div className="mt-auto space-y-2">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">
                ৳{(product.price || 0).toLocaleString()}
              </span>
              {product.mrp && (
                <div className="flex items-center gap-1">
                  <span className="text-gray-400 line-through text-sm">
                    MRP ৳{product.mrp.toLocaleString()}
                  </span>
                  <span className="text-green-600 text-sm font-medium">
                    ({Math.round(((product.mrp - (product.price || 0)) / product.mrp) * 100)}% OFF)
                  </span>
                </div>
              )}
            </div>
            
            {product.promotion && (
              <div className="bg-green-500 text-white text-sm px-2 py-1 rounded inline-block">
                {product.promotion}
              </div>
            )}

            <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
              <span className="text-blue-600 text-sm font-medium">EMI</span>
              <span className="text-blue-600 text-sm">
                ৳{calculateEMI(product.price || 0)}/month
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    name: PropTypes.string.isRequired,
    mrp: PropTypes.number,
    price: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
    inStock: PropTypes.bool.isRequired,
    promotion: PropTypes.string,
    bestseller: PropTypes.bool,
    sale: PropTypes.string
  }).isRequired,
};

export default Card;
