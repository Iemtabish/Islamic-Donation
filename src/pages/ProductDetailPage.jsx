import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { allProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800"
          >
            Go to Homepage
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    // Show success message
    
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-green-700">Home</button>
            <span>/</span>
            <button onClick={() => navigate(-1)} className="hover:text-green-700">Products</button>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
            <img 
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain p-8"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="text-sm text-gray-600 uppercase tracking-wider">
              {product.category}
            </div>

            <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>

            <div className="text-3xl font-bold text-gray-900">
              {product.price === 0 ? (
                <span className="text-green-700">FREE</span>
              ) : (
                `Rs. ${product.price.toFixed(2)}`
              )}
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={decreaseQuantity}
                  className="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center justify-center text-xl font-bold"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                />
                <button
                  onClick={increaseQuantity}
                  className="w-10 h-10 border border-gray-300 rounded-md hover:bg-gray-100 flex items-center justify-center text-xl font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-white border-2 border-green-700 text-green-700 py-4 rounded-md font-semibold hover:bg-green-50 transition-colors"
              >
                Add to cart
              </button>

              <button 
                onClick={handleBuyNow}
                className="w-full bg-black text-white py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                Buy it now
              </button>
            </div>

            {/* Description */}
            <div className="pt-6 border-t">
              <h3 className="font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                With fun pictures and common words from the Quran, this product will inshaAllah help your little one start their lifelong journey of connecting with Islamic knowledge.
              </p>
            </div>

            {/* Share */}
            <button className="flex items-center gap-2 text-gray-700 hover:text-green-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailPage;
