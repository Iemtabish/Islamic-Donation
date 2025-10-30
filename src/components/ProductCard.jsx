import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-green-300">
      
      {/* Islamic corner decorations */}
      <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-full h-full border-t-4 border-l-4 border-yellow-500/30 rounded-tl-2xl"></div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-10">
        <div className="absolute top-0 right-0 w-full h-full border-t-4 border-r-4 border-yellow-500/30 rounded-tr-2xl"></div>
      </div>

      {/* Image section */}
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg z-20">
            ⭐ {product.badge}
          </div>
        )}

        {/* Quick view on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <span className="px-6 py-3 bg-white text-green-700 font-bold rounded-xl shadow-xl">
            Quick View
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        
        {/* Category tag */}
        {product.category && (
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-3">
            📚 {product.category}
          </span>
        )}

        {/* Title */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors line-clamp-2 min-h-[3.5rem]">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        {product.description && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-500 text-sm">
            {"⭐".repeat(5)}
          </div>
          <span className="text-xs text-gray-500">(124)</span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-2xl font-bold text-green-700">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">${product.originalPrice}</span>
            )}
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
