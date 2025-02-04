import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../../data/products";
import "./Shop.css";
import Card from "../../components/Card/Card";

const brands = [...new Set(products.map(product => product.brand))].sort();

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('default');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const itemsPerPage = 8;

  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  useEffect(() => {
    // Reset to first page when search query changes
    setCurrentPage(1);
  }, [searchQuery]);

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = useMemo(() => {
    let filteredProducts = products.filter(product => {
      const matchesBrand = selectedBrand === 'all' ? true : product.brand === selectedBrand;
      const matchesSearch = searchQuery ? 
        product.name.toLowerCase().includes(searchQuery) ||
        product.brand.toLowerCase().includes(searchQuery) ||
        product.model.toLowerCase().includes(searchQuery)
        : true;
      return matchesBrand && matchesSearch;
    });

    switch (sortBy) {
      case 'price-high-low':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'price-low-high':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'a-z':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'z-a':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }

    return filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  }, [indexOfFirstItem, indexOfLastItem, selectedBrand, sortBy, searchQuery]);
  const totalPages = useMemo(() => {
    let filteredProducts = products.filter(product => {
      const matchesBrand = selectedBrand === 'all' ? true : product.brand === selectedBrand;
      const matchesSearch = searchQuery ? 
        product.name.toLowerCase().includes(searchQuery) ||
        product.brand.toLowerCase().includes(searchQuery) ||
        product.model.toLowerCase().includes(searchQuery)
        : true;
      return matchesBrand && matchesSearch;
    });
    return Math.ceil(filteredProducts.length / itemsPerPage);
  }, [itemsPerPage, selectedBrand, searchQuery]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-2xl lg:text-[45px] font-bold text-t_color mb-8">
          Our Products
        </h1>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
            <button 
              onClick={() => {
                setSortBy('default');
                setSelectedBrand('all');
              }}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="min-w-[200px] px-4 py-2.5 border border-gray-300 rounded-lg bg-white 
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition-all duration-200"
                >
                  <option value="default">Default</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="a-z">Name: A to Z</option>
                  <option value="z-a">Name: Z to A</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Brand</label>
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="min-w-[200px] px-4 py-2.5 border border-gray-300 rounded-lg bg-white 
                    shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition-all duration-200"
                >
                  <option key="all" value="all">All Brands</option>
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="px-4 py-2 bg-gray-100 rounded-lg">
              <span className="text-sm font-medium text-gray-700">
                {currentItems.length} Products
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentItems.map((product) => (
          <div key={product.id}>
            <Card product={product} />
          </div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Previous
        </button>
        
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
        
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded ${
            currentPage === totalPages
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Shop;