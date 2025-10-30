import { Link } from 'react-router-dom';
import { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing! 🎉');
  };

  return (
    <footer className="relative bg-gradient-to-br from-green-900 via-green-800 to-teal-900 text-white overflow-hidden">
      
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" fill="#14532d"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-start gap-4 mb-6">
              {/* Urdu Logo */}
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg">
                <span className="text-green-700 text-3xl font-bold italic" style={{ fontFamily: 'Segoe UI, Arial' }}>
                  الیف
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-1">Aliff Foundation</h3>
                <p className="text-green-200 text-sm font-semibold">Illuminating Young Minds</p>
              </div>
            </div>
            
            <p className="text-green-100 mb-6 leading-relaxed">
              Dedicated to providing authentic Islamic education and resources for children worldwide. Join our mission to spread knowledge and light.
            </p>

            {/* Social icons */}
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 border border-white/20"
                  aria-label={social}
                >
                  <span className="text-xl font-bold">•</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-4 flex items-center gap-2">
              <span>📚</span> Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Shop', path: '/products/all' },
                { label: 'Learning Hub', path: '/free/islamic-curriculum' },
                { label: 'Outreach', path: '/outreach' },
                { label: 'Centers', path: '/centers' },
                { label: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.path} 
                    className="text-green-100 hover:text-yellow-300 transition-colors flex items-center gap-2"
                  >
                    <span>→</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-yellow-300 mb-4 flex items-center gap-2">
              <span>✉️</span> Stay Connected
            </h4>
            <p className="text-green-100 text-sm mb-4">Get weekly Islamic resources & updates</p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button 
                type="submit"
                className="w-full px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-lg hover:shadow-lg transition-all cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-green-200 text-sm text-center md:text-left">
              © 2025 Aliff Foundation. All rights reserved. | Made with ❤️ for the Ummah
            </p>
            
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-green-200 hover:text-yellow-300 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-green-200 hover:text-yellow-300 transition-colors">Terms</Link>
              <Link to="/contact" className="text-green-200 hover:text-yellow-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
