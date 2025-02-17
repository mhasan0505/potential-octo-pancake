import { useEffect, useState, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

const featuredProducts = [
  {
    id: products[0].id,
    name: products[0].name,
    image: products[0].image[0],
    description: "Experience pure and healthy water with our advanced RO technology",
    highlight: "Pure Water, Better Life",
  },
  {
    id: products[4].id,
    name: products[4].name,
    image: products[4].image[0],
    description: "Premium water purification for your family's health and safety",
    highlight: "Advanced Filtration",
  },
  {
    id: products[14].id,
    name: products[14].name,
    image: products[14].image[0],
    description: "Smart purification with modern technology and elegant design",
    highlight: "Smart & Elegant",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
    }
  }, [isAnimating]);

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Carousel Container */}
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="relative h-auto carousel w-full">
          {/* Slides */}
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              } carousel-item w-full h-auto`}
              onTransitionEnd={handleAnimationEnd}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="text-center md:text-left space-y-6 md:order-1 order-2">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                    <span className="block text-primary">{product.highlight}</span>
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link
                      to={`/product/${product.id}`}
                      className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                    >
                      Shop Now
                      <FaArrowRight className="ml-2" />
                    </Link>
                    <Link
                      to="/shop"
                      className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transform hover:scale-105 transition-all"
                    >
                      View All Products
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="md:order-2 order-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 rounded-full filter blur-3xl transform scale-95 opacity-70"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="relative w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 text-primary hover:bg-white hover:scale-110 transition-all shadow-lg z-10"
            aria-label="Previous slide"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 text-primary hover:bg-white hover:scale-110 transition-all shadow-lg z-10"
            aria-label="Next slide"
          >
            <FaArrowRight />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
