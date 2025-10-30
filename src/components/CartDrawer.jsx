import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  // Handle ESC key and body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent background scroll
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop Overlay - Click to close */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-[60] ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Cart Drawer - Slides from right */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-green-700 text-white">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h2 className="text-lg font-bold">My Cart ({getCartCount()})</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-white hover:bg-green-600 rounded-full p-2 transition-colors"
              aria-label="Close cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Content */}
          {cartItems.length === 0 ? (
            // Empty State
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add items to get started!</p>
              <button 
                onClick={onClose}
                className="bg-green-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {cartItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="flex gap-3 bg-gray-50 p-3 rounded-lg border hover:shadow-md transition-shadow"
                  >
                    {/* Product Image */}
                    <div className="w-20 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden border">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-sm text-gray-800 line-clamp-2 pr-2">
                          {item.title}
                        </h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>

                      <p className="text-xs text-gray-500 mb-2">{item.category}</p>

                      {/* Quantity & Price */}
                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1 bg-white border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 hover:bg-gray-100 text-gray-600 font-bold text-sm"
                          >
                            −
                          </button>
                          <span className="px-2 py-1 font-medium text-sm min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100 text-gray-600 font-bold text-sm"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          {item.price === 0 ? (
                            <p className="text-sm font-bold text-green-700">FREE</p>
                          ) : (
                            <p className="text-sm font-bold text-gray-900">
                              Rs. {(item.price * item.quantity).toFixed(2)}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer - Checkout Section */}
              <div className="border-t bg-white p-4 space-y-3">
                {/* Price Summary */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({getCartCount()} items)</span>
                    <span>Rs. {getCartTotal().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span className="text-green-700 font-medium">FREE</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-green-700">Rs. {getCartTotal().toFixed(2)}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button className="w-full bg-green-700 text-white py-3 rounded-md font-bold hover:bg-green-800 transition-colors">
                    PLACE ORDER
                  </button>
                  <Link 
                    to="/cart"
                    onClick={onClose}
                    className="block w-full text-center border-2 border-green-700 text-green-700 py-2.5 rounded-md font-semibold hover:bg-green-50 transition-colors"
                  >
                    View Full Cart
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartDrawer;
