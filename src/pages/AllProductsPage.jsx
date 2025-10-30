import { useState } from 'react';
import { allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

function AllProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceFilter, setPriceFilter] = useState('all');

  // Get unique categories
  const categories = ['all', ...new Set(allProducts.map(p => p.category))];

  // Filter products
  let filteredProducts = allProducts;

  // Category filter
  if (selectedCategory !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }

  // Price filter
  if (priceFilter === 'free') {
    filteredProducts = filteredProducts.filter(p => p.price === 0);
  } else if (priceFilter === 'paid') {
    filteredProducts = filteredProducts.filter(p => p.price > 0);
  }

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'name-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.title.localeCompare(a.title));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Browse All Products
          </h1>
          <p className="text-lg md:text-xl text-green-100">
            Explore our complete collection of Islamic educational materials, books, and resources
          </p>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-green-700">{allProducts.length}</div>
              <div className="text-sm text-gray-600">Total Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-700">{allProducts.filter(p => p.price === 0).length}</div>
              <div className="text-sm text-gray-600">Free Resources</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-700">{categories.length - 1}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-700">New</div>
              <div className="text-sm text-gray-600">Releases</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-green-700 text-white font-semibold'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category === 'all' ? 'All Products' : category}
                      {category !== 'all' && (
                        <span className="float-right text-xs opacity-75">
                          ({allProducts.filter(p => p.category === category).length})
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6 pb-6 border-b">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setPriceFilter('all')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      priceFilter === 'all'
                        ? 'bg-green-700 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    All Prices
                  </button>
                  <button
                    onClick={() => setPriceFilter('free')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      priceFilter === 'free'
                        ? 'bg-green-700 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Free Only
                  </button>
                  <button
                    onClick={() => setPriceFilter('paid')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      priceFilter === 'paid'
                        ? 'bg-green-700 text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Paid Products
                  </button>
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setPriceFilter('all');
                  setSortBy('featured');
                }}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-md text-sm font-medium transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'all' ? 'All Products' : selectedCategory}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 whitespace-nowrap">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg">
                <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters or search criteria</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setPriceFilter('all');
                  }}
                  className="bg-green-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProductsPage;
