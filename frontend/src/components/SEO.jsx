import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
const SEO = ({ 
  title = 'Aqua Support BD | Water Purifier & Treatment Solutions in Bangladesh',
  description = 'Bangladesh\'s largest e-commerce platform for water purifiers, filters, and industrial water treatment solutions. Based in Dhaka, offering premium accessories and professional after-sales service.',
  image = 'https://www.aquasupportbd.com/og-image.jpg',
  url = 'https://www.aquasupportbd.com'
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};
export default SEO;

