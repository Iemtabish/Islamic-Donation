import { useState } from 'react';
import { allProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

function FreeResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Get all FREE products (price = 0)
  const freeProducts = allProducts.filter(product => product.price === 0);

  // Filter by category
  const filteredProducts = activeCategory === 'all' 
    ? freeProducts
    : freeProducts.filter(product => product.category === activeCategory);

  // Get unique categories from free products
  const categories = ['all', ...new Set(freeProducts.map(p => p.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Resources
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl">
            Download free Islamic educational materials, including the Days of Sayyidah Fatima (ʿa) series, 
            calendars, and more to support your learning journey.
          </p>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-green-700">{freeProducts.length}</div>
              <div className="text-gray-600 mt-1">Free Resources</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700">100%</div>
              <div className="text-gray-600 mt-1">Accessible</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700">PDF</div>
              <div className="text-gray-600 mt-1">Download Format</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 overflow-x-auto">
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Filter by:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Resources' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredProducts.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeCategory === 'all' 
                  ? 'All Free Resources' 
                  : `${activeCategory} Resources`}
              </h2>
              <p className="text-gray-600">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'resource' : 'resources'} available
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <svg className="mx-auto h-24 w-24 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No resources found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>

      {/* Featured Section - Days of Fatimah */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Days of Sayyidah Fāṭimah (ʿa) Series
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive collection of project booklets exploring the life, virtues, 
              and legacy of Sayyidah Fāṭimah (ʿa) through engaging activities and lessons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts
              .filter(p => p.category === 'Days of Fatimah')
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>

      {/* Download Instructions */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How to Download
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Browse Resources</h3>
              <p className="text-gray-600 text-sm">
                Explore our collection of free Islamic educational materials
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Click to View</h3>
              <p className="text-gray-600 text-sm">
                Select any resource to see details and preview
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Download Free</h3>
              <p className="text-gray-600 text-sm">
                Add to cart and download instantly - no payment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeResourcesPage;
