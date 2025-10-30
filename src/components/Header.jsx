import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import CartDrawer from "./CartDrawer";
import AuthModal from "./AuthModal";
import { menuConfig } from "../config/menuConfig";

function Header() {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const { getCartCount } = useCart();
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (id) => setOpenDropdownId(openDropdownId === id ? null : id);
  const closeAllDropdowns = () => setOpenDropdownId(null);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) setSearchQuery("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) setIsSearchOpen(false);
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) setShowUserMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderMenuItem = (item) => {
    if (item.type === "link") {
      return (
        <Link
          key={item.id}
          to={item.path}
          className="relative text-gray-700 hover:text-green-700 font-semibold transition-all duration-300 group"
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
      );
    }

    if (item.type === "dropdown") {
      const isOpen = openDropdownId === item.id;
      const gridCols = item.categories.length === 2 ? "grid-cols-3" : "grid-cols-5";

      return (
        <div key={item.id} className="relative">
          <button
            onClick={() => toggleDropdown(item.id)}
            className="text-gray-700 hover:text-green-700 font-semibold transition-all duration-300 flex items-center gap-1 cursor-pointer"
          >
            {item.label}
            <svg className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <>
              <div className="fixed inset-0 z-10 bg-black/10 backdrop-blur-sm" onClick={closeAllDropdowns}></div>
              <div className={`absolute left-1/2 transform -translate-x-1/2 mt-4 w-screen max-w-${item.categories.length > 2 ? '6xl' : '4xl'} bg-white shadow-2xl rounded-2xl border-2 border-green-100 py-8 px-8 z-20 max-h-[80vh] overflow-y-auto`}>
                
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-green-600 to-yellow-500 rounded-t-2xl"></div>

                <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-green-100">
                  <h3 className="text-xl font-bold text-green-800 flex items-center gap-2">
                    <span className="text-2xl">☪</span>
                    Explore {item.label}
                  </h3>
                  <span className="text-sm text-gray-500 italic">Knowledge is Light</span>
                </div>

                <div className={`grid ${gridCols} gap-8`}>
                  {item.categories.map((category) => (
                    <div key={category.id}>
                      <h4 className="font-bold text-green-700 mb-4 text-sm uppercase tracking-wide flex items-center gap-2 hover:text-yellow-600 transition-colors">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                        {category.title}
                      </h4>
                      <ul className="space-y-2.5">
                        {category.items.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              to={subItem.path}
                              onClick={closeAllDropdowns}
                              className="text-gray-600 hover:text-green-700 hover:translate-x-1 text-sm block transition-all duration-200 py-1 flex items-center gap-2 group"
                            >
                              <span className="w-0 h-0.5 bg-yellow-500 group-hover:w-3 transition-all duration-200"></span>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      );
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-gradient-to-r from-white via-green-50 to-white shadow-md'}`}>
        
        <div className="relative max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            
            {/* ALIFF LOGO WITH URDU TEXT */}
            <Link to="/" className="flex items-center gap-3 group">
              {/* Urdu Logo */}
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl font-bold italic" style={{ fontFamily: 'Segoe UI, Arial' }}>
                  الیف
                </span>
              </div>
              <div className="hidden lg:block">
                <p className="text-green-800 text-xs font-bold tracking-wide">Promoting Islamic Education</p>
                <p className="text-yellow-600 text-[10px] font-semibold italic">For Children Worldwide</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {menuConfig.mainNav.map((item) => renderMenuItem(item))}
            </nav>

            <div className="flex items-center gap-4">
              
              <div className="relative" ref={searchRef}>
                <button onClick={toggleSearch} className="text-gray-700 hover:text-green-700 transition-all duration-300 hover:scale-110 cursor-pointer" aria-label="Search">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {isSearchOpen && (
                  <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border-2 border-green-200 z-50 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 p-3">
                      <p className="text-white text-sm font-semibold">🔍 Search Islamic Resources</p>
                    </div>

                    <form onSubmit={handleSearch} className="p-4">
                      <div className="relative">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search products..."
                          className="w-full pl-10 pr-4 py-3 border-2 border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                          autoFocus
                        />
                        <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>

                      <div className="mt-4">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-semibold">Popular Searches</p>
                        <div className="space-y-2">
                          {[
                            { icon: "🕌", text: "Quranic Words" },
                            { icon: "📚", text: "Islamic Curriculum" },
                            { icon: "📖", text: "Picture Books" }
                          ].map((item) => (
                            <button
                              key={item.text}
                              type="button"
                              onClick={() => {
                                setSearchQuery(item.text);
                                navigate(`/search?q=${item.text}`);
                                setIsSearchOpen(false);
                              }}
                              className="block w-full text-left px-3 py-2.5 text-sm text-gray-700 hover:bg-green-50 rounded-lg transition-all cursor-pointer flex items-center gap-2"
                            >
                              <span>{item.icon}</span>
                              {item.text}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button type="submit" className="w-full mt-4 bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                        Search Now
                      </button>
                    </form>
                  </div>
                )}
              </div>

              <div className="relative" ref={userMenuRef}>
                {isLoggedIn ? (
                  <>
                    <button onClick={() => setShowUserMenu(!showUserMenu)} className="w-10 h-10 bg-gradient-to-br from-green-600 to-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 cursor-pointer ring-2 ring-yellow-400/50">
                      {user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase() || "U"}
                    </button>

                    {showUserMenu && (
                      <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border-2 border-green-100 py-2 z-50">
                        <div className="px-4 py-3 border-b border-green-100 bg-green-50">
                          <p className="text-sm font-bold text-green-900">{user?.name || user?.email}</p>
                          <p className="text-xs text-green-600">{user?.email}</p>
                        </div>
                        <button onClick={handleLogout} className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2 cursor-pointer mt-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Logout
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <button onClick={() => setIsAuthModalOpen(true)} className="text-gray-700 hover:text-green-700 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </button>
                )}
              </div>

              <button onClick={() => setIsCartOpen(true)} className="relative text-gray-700 hover:text-green-700 transition-all duration-300 hover:scale-110 cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-green-700 via-teal-600 to-green-700 text-white text-center py-2.5 overflow-hidden">
          <Link to="/products/all" className="relative text-sm font-semibold hover:text-yellow-300 transition-colors duration-300 flex items-center justify-center gap-2 group">
            <span className="animate-pulse">✨</span>
            New Releases - Explore Latest Islamic Resources
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  );
}

export default Header;
