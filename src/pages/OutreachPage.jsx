function OutreachPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
            Al-Kisa Outreach
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our mission at Al-Kisa Foundation is to spread the message of Islam and make our resources 
            accessible to as many individuals across the globe. Below, learn about some of our outreach 
            initiatives and how you can get involved!
          </p>
        </div>
      </div>

      {/* Full Width Image Banner */}
      <div className="w-full">
        <img 
          src="https://in.alkisafoundation.org/cdn/shop/files/outreach-banner.jpg?v=1635870000&width=1500"
          alt="Al-Kisa Outreach"
          className="w-full h-[400px] object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1500&h=400&fit=crop';
          }}
        />
      </div>

      {/* Library Initiative Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <img 
                src="https://in.alkisafoundation.org/cdn/shop/files/library-initiative-map.png?v=1635870000&width=800"
                alt="Library Initiative Map"
                className="w-full rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop';
                }}
              />
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="bg-gray-800 text-white p-8 md:p-12 rounded-lg shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Library Initiative
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Kisa Kids has been gifting books to local libraries across the United States for the past 
                  several years with the goal of making Islamic children's literature more accessible, as well 
                  as increasing positive Muslim representation in public spaces.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Al-Kisa Network Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div>
              <div className="bg-gray-800 text-white p-8 md:p-12 rounded-lg shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Al-Kisa Network
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  Are you involved in an Islamic center, school, library, or other Islamic organization? 
                  Become a part of the Al-Kisa Network! Be the first to hear about new initiatives and provide 
                  input. In order to join the Al-Kisa Network, please fill out the survey below. All members of 
                  our network will receive a complimentary set of ALL our books!
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors">
                  Join Al-Kisa Network
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div>
              <img 
                src="https://in.alkisafoundation.org/cdn/shop/files/network-hands.jpg?v=1635870000&width=800"
                alt="Al-Kisa Network"
                className="w-full rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scholar Network Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-green-700 rounded-full opacity-20 blur-3xl"></div>
                <img 
                  src="https://in.alkisafoundation.org/cdn/shop/files/scholar-logo.png?v=1635870000&width=600"
                  alt="Scholar Network"
                  className="relative w-full max-w-md mx-auto"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=600&fit=crop';
                  }}
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="bg-gray-800 text-white p-8 md:p-12 rounded-lg shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Scholar Network
                </h2>
                <p className="text-gray-200 text-lg leading-relaxed mb-6">
                  As part of the Al-Kisa Foundation's outreach initiatives we are networking and collaborating 
                  with Scholars globally. If you are a scholar and would like to join our networking database 
                  please fill out the form below. If you know a scholar please fill out the below information 
                  on behalf of the scholar. Each scholar will inshā'Allāh receive a networking package with 
                  samples of all our publications.
                </p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors">
                  Scholar Networking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-green-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-green-600 text-white p-8 md:p-12 rounded-lg shadow-2xl">
              <div className="text-center mb-8">
                <svg className="w-16 h-16 text-green-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg md:text-xl italic leading-relaxed">
                  "I support Kisa Kids because it's an amazing organization which has provided countless tools 
                  and resources for raising our children. Their captivating and beautifully illustrated books 
                  plant the seeds of love and understanding of the Ahl ul-Bayt. From the colorful board books 
                  that my toddler loves to sit and look at, to stories of our Prophets and Imams that my older 
                  son loves to read - they cover it all."
                </p>
              </div>
              <div className="text-center">
                <p className="text-xl font-semibold">Amber Zaidi</p>
                <p className="text-green-200">Michigan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our growing community of educators, scholars, and organizations working together to spread 
            Islamic knowledge and values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-lg transition-colors shadow-lg">
              Join the Network
            </button>
            <button className="bg-white hover:bg-gray-50 text-green-700 border-2 border-green-700 font-bold px-8 py-4 rounded-lg transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">1000+</div>
              <div className="text-gray-600">Libraries Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">15,000+</div>
              <div className="text-gray-600">Books Distributed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">50+</div>
              <div className="text-gray-600">Network Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-700 mb-2">Global</div>
              <div className="text-gray-600">Reach</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutreachPage;
