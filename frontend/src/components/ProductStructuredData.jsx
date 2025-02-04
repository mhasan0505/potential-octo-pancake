import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
const ProductStructuredData = ({ product }) => {
  const structuredData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: product.image,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Aqua Support BD'
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.aquasupportbd.com/product/${product.id}`,
      priceCurrency: 'BDT',
      price: product.price,
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'Aqua Support BD'
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

ProductStructuredData.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inStock: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};

export default ProductStructuredData;
