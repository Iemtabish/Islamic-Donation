import React from 'react';

const AliffHeroLogo = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-md mx-auto ${className}`}>
      {/* Card Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        
        {/* Decorative Top Bar */}
        <div className="h-2 bg-gradient-to-r from-green-600 via-yellow-500 to-green-600"></div>
        
        {/* Main Content */}
        <div className="p-8 md:p-12 flex flex-col items-center text-center">
          
          {/* Top Badge - Islamic Education Foundation */}
          <div className="inline-block bg-green-100 rounded-full px-4 py-1 mb-8">
            <p className="text-green-700 text-xs font-bold uppercase tracking-wider">
              ✨ Islamic Education Foundation ✨
            </p>
          </div>

          {/* Text Section */}
          <div className="mb-6">
            {/* Aliff in Urdu */}
            <p className="text-green-700 text-4xl font-black tracking-wider mb-2">
              الیـــــــف
            </p>
            {/* Aliff in English */}
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-500 text-3xl font-bold mb-2">
              Aliff
            </p>
            
            {/* Foundation */}
            <h3 className="text-green-700 text-2xl font-bold mb-3">Foundation</h3>
            
            {/* Tagline */}
            <p className="text-green-600 text-sm font-semibold italic mb-4">
              Illuminating Young Minds
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              Promoting authentic Islamic education, resources, and literature to nurture faith and knowledge worldwide
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            <div className="bg-green-50 rounded-lg px-4 py-2">
              <p className="text-yellow-600 font-bold text-lg">500+</p>
              <p className="text-green-700 text-xs font-semibold">Resources</p>
            </div>
            <div className="bg-green-50 rounded-lg px-4 py-2">
              <p className="text-yellow-600 font-bold text-lg">50K+</p>
              <p className="text-green-700 text-xs font-semibold">Downloads</p>
            </div>
            <div className="bg-green-50 rounded-lg px-4 py-2">
              <p className="text-yellow-600 font-bold text-lg">30+</p>
              <p className="text-green-700 text-xs font-semibold">Countries</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 justify-center w-full flex-wrap">
            <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              Explore Now
            </button>
            <button className="border-2 border-green-600 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Decorative Bottom Bar */}
        <div className="h-2 bg-gradient-to-r from-green-600 via-yellow-500 to-green-600"></div>

        {/* Corner Decorations */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-green-300 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-green-300 rounded-bl-lg"></div>
      </div>
    </div>
  );
};

export default AliffHeroLogo;
