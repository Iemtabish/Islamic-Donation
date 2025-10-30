import { useState } from 'react';
import ProductCard from '../components/ProductCard';

function CategoryPage({ products, categoryName }) {
  const [sortBy, setSortBy] = useState('featured');

  // Sorting logic
  const sortedProducts = () => {
    let sorted = [...products];
    
    switch(sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return sorted;
    }
  };

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Category Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            {categoryName}
          </h1>
          <p className="text-gray-600">
            {products.length} products found
          </p>
        </div>

        {/* Sort & Filter Bar */}
        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 font-medium">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <div className="text-gray-600">
            Showing {sortedProducts().length} results
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Products Message */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No products found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CategoryPage;
