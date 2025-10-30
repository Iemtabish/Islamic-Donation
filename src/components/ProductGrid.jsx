import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function ProductGrid({ products, title, showViewAll }) {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <span className="w-2 h-12 bg-gradient-to-b from-green-600 to-yellow-500 rounded-full"></span>
              {title}
            </h2>
            <p className="text-gray-600 ml-5">Explore our collection of authentic Islamic resources</p>
          </div>
          
          {showViewAll && (
            <Link
              to="/products/all"
              className="group px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <span>View All</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductGrid;
