function MissionSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-teal-50 overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-green-100 rounded-full">
            <p className="text-green-800 font-semibold text-sm">Our Mission</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Spreading Islamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Knowledge & Light</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated to nurturing young hearts with authentic Islamic education and values
          </p>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Education</h3>
            <p className="text-gray-600 leading-relaxed">
              Providing authentic Islamic curriculum and resources that align with Quran and Sunnah, designed for modern learning.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🌍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Reach</h3>
            <p className="text-gray-600 leading-relaxed">
              Serving Muslim communities worldwide with accessible, free resources in multiple languages for every child.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">💚</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Building a strong foundation of faith and knowledge that empowers the next generation of Muslim leaders.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 via-teal-600 to-green-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Help us spread Islamic knowledge to children around the world. Every contribution makes a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-green-700 font-bold rounded-2xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              Support Our Work
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-green-700 transition-all duration-300 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default MissionSection;
