import { useState } from 'react';
import { donationCampaigns, quickDonationOptions, donationCategories } from '../data/donationsData';
// Footer import REMOVED

function DonationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');

  const filteredCampaigns = selectedCategory === 'all' 
    ? donationCampaigns 
    : donationCampaigns.filter(campaign => 
        campaign.category.toLowerCase().includes(selectedCategory)
      );

  const handleDonate = (campaign) => {
    setSelectedCampaign(campaign);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const calculateProgress = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <>
      {/* Enhanced Hero Section with Islamic Pattern */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-green-800 via-green-700 to-teal-700 overflow-hidden">
        
        {/* Animated Islamic Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L0 30L30 60L60 30z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Glowing Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-300/40 rounded-full blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          
          {/* Bismillah Badge with Glow */}
          <div className="text-center mb-8">
            <div className="inline-block px-8 py-4 bg-white/20 backdrop-blur-xl rounded-full border-2 border-amber-300/50 shadow-2xl shadow-amber-500/20 hover:scale-105 transition-transform duration-300">
              <p className="text-2xl tracking-wider text-white font-semibold">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
            </div>
          </div>

          {/* Main Heading with Gradient */}
          <div className="text-center mb-6">
            <h1 className="text-5xl lg:text-7xl font-black mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 drop-shadow-2xl animate-pulse">
                Support Islamic Relief
              </span>
            </h1>
            <div className="flex justify-center gap-3 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
              <div className="text-4xl">🤲</div>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Compelling Description */}
          <p className="text-center text-2xl lg:text-3xl text-white font-semibold mb-10 max-w-4xl mx-auto leading-relaxed">
            Your <span className="text-amber-300 font-bold">Sadaqah</span> saves lives, provides <span className="text-amber-300 font-bold">education</span>, and brings <span className="text-amber-300 font-bold">hope</span> to Muslims worldwide 💚
          </p>

          {/* CTA Buttons - Bigger & Better */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="group px-10 py-5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white text-xl font-black rounded-2xl shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 flex items-center gap-3 border-4 border-white/20">
              <span className="text-3xl animate-bounce">💝</span>
              <span>DONATE NOW</span>
              <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button className="px-10 py-5 bg-white/20 backdrop-blur-xl text-white text-xl font-bold rounded-2xl border-3 border-white/40 hover:bg-white/30 transition-all duration-300 flex items-center gap-3">
              <span className="text-2xl">📖</span>
              <span>Learn More</span>
            </button>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { value: "₹12.5M+", label: "Total Raised", icon: "💰", color: "from-amber-400 to-yellow-500" },
              { value: "8,500+", label: "Supporters", icon: "👥", color: "from-green-400 to-emerald-500" },
              { value: "15+", label: "Active Campaigns", icon: "🎯", color: "from-blue-400 to-cyan-500" }
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border-2 border-white/30 hover:border-amber-300 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/30"
              >
                <div className="text-5xl mb-3 transform group-hover:scale-125 transition-transform">{stat.icon}</div>
                <p className={`text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
                <p className="text-white text-lg font-semibold">{stat.label}</p>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-300/40 rounded-tr-3xl"></div>
              </div>
            ))}
          </div>

          {/* Hadith Quote */}
          <div className="mt-12 max-w-3xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl p-6 border-2 border-amber-300/30">
            <p className="text-center text-white text-lg italic">
              <span className="text-amber-300 text-2xl font-bold">"</span>
              The believer's shade on the Day of Resurrection will be their charity.
              <span className="text-amber-300 text-2xl font-bold">"</span>
            </p>
            <p className="text-center text-amber-200 text-sm mt-2 font-semibold">— Prophet Muhammad ﷺ (Ahmad)</p>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-30px) rotate(180deg); }
          }
        `}</style>
      </section>

      {/* Sticky Category Filter - Enhanced */}
      <section className="py-6 bg-white shadow-lg sticky top-0 z-40 border-b-4 border-amber-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {donationCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-xl shadow-green-500/40 scale-110'
                    : 'bg-green-50 text-green-800 hover:bg-green-100 border-2 border-green-200'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Campaigns Grid - Enhanced Cards */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black text-gray-900 mb-4 flex items-center justify-center gap-4">
              <span className="text-4xl">🌟</span>
              Current Campaigns
              <span className="text-4xl">🌟</span>
            </h2>
            <p className="text-xl text-gray-600 font-semibold">
              Every donation brings us closer to helping those in need
            </p>
          </div>

          {/* Campaign Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-4 border-transparent hover:border-green-400 transform hover:-translate-y-3"
              >
                {/* Islamic Corner Decorations */}
                <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none z-10">
                  <div className="absolute top-0 left-0 w-full h-full border-t-8 border-l-8 border-amber-400/50 rounded-tl-3xl"></div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none z-10">
                  <div className="absolute top-0 right-0 w-full h-full border-t-8 border-r-8 border-amber-400/50 rounded-tr-3xl"></div>
                </div>

                {/* Image Section */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Urgent Badge */}
                  {campaign.urgent && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-pink-600 text-white px-5 py-2 rounded-full text-xs font-black animate-pulse shadow-2xl border-2 border-white">
                      🚨 URGENT
                    </div>
                  )}

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-full text-3xl shadow-lg border-2 border-green-200">
                    {campaign.icon}
                  </div>

                  {/* Category Tag on Image */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-green-800 text-xs font-black rounded-full border-2 border-green-400">
                      {campaign.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2 min-h-[4rem]">
                    {campaign.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {campaign.description}
                  </p>

                  {/* Enhanced Progress Bar */}
                  <div className="mb-5">
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-green-700 flex items-center gap-1">
                        <span className="text-lg">💚</span>
                        ₹{(campaign.raised / 1000).toFixed(0)}K raised
                      </span>
                      <span className="text-gray-500">
                        Goal: ₹{(campaign.goal / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full transition-all duration-700 shadow-lg"
                        style={{ width: `${calculateProgress(campaign.raised, campaign.goal)}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-5 pb-5 border-b-2 border-gray-100">
                    <span className="flex items-center gap-2 font-semibold">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                      </svg>
                      {campaign.supporters} donors
                    </span>
                    <span className="font-black text-xl text-green-700">
                      {calculateProgress(campaign.raised, campaign.goal).toFixed(0)}%
                    </span>
                  </div>

                  {/* Enhanced Donate Button */}
                  <button
                    onClick={() => handleDonate(campaign)}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-black text-lg rounded-2xl hover:shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 border-2 border-orange-400 group"
                  >
                    <span className="text-2xl group-hover:scale-125 transition-transform">💝</span>
                    <span>DONATE NOW</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>

                {/* Bottom Islamic Decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 via-amber-400 to-green-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Donate Section - More Prominent */}
      <section className="py-20 bg-gradient-to-br from-green-700 via-green-600 to-teal-600 relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L0 30L30 60L60 30z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 border-8 border-amber-400">
            
            {/* Header */}
            <div className="text-center mb-10">
              <div className="text-6xl mb-4">🤲</div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">
                Make a Quick Donation
              </h2>
              <p className="text-xl text-gray-600 font-semibold">
                Every contribution brings hope to someone in need
              </p>
            </div>

            {/* Amount Selection - Bigger */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {quickDonationOptions.map((option) => (
                <button
                  key={option.amount}
                  onClick={() => setDonationAmount(option.amount)}
                  className={`py-6 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-105 ${
                    donationAmount === option.amount
                      ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-2xl shadow-green-500/50 scale-110 border-4 border-amber-400'
                      : 'bg-green-50 text-green-800 hover:bg-green-100 border-4 border-green-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            {donationAmount === 0 && (
              <div className="mb-8">
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter your amount (₹)"
                  className="w-full px-8 py-5 border-4 border-green-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-green-500 focus:border-transparent text-2xl font-bold text-center"
                />
              </div>
            )}

            {/* Big Donate Button */}
            <button className="w-full py-7 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white text-3xl font-black rounded-3xl shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 border-4 border-white flex items-center justify-center gap-4 group">
              <span className="text-4xl group-hover:scale-125 transition-transform">💝</span>
              <span>DONATE ₹{donationAmount > 0 ? donationAmount.toLocaleString() : (customAmount || 0)}</span>
            </button>

            <div className="flex items-center justify-center gap-4 mt-8 text-sm text-gray-600">
              <span className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span className="font-semibold">100% Secure</span>
              </span>
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              <span className="flex items-center gap-2">
                <span className="text-2xl">📜</span>
                <span className="font-semibold">Tax Deductible</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate - More Attractive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Why Your Donation Matters
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-green-500 via-amber-400 to-green-500 mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-gray-600 font-semibold max-w-3xl mx-auto">
              Your support creates lasting change and transforms lives across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "✅", title: "100% Transparent", desc: "Every rupee is tracked and accounted for", color: "from-green-400 to-emerald-500" },
              { icon: "🕌", title: "Shariah Compliant", desc: "Verified by Islamic scholars", color: "from-blue-400 to-cyan-500" },
              { icon: "🌍", title: "Global Impact", desc: "Helping 50+ countries worldwide", color: "from-purple-400 to-pink-500" },
              { icon: "💝", title: "Tax Benefits", desc: "80G certified donations", color: "from-amber-400 to-yellow-500" }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-300 border-4 border-transparent hover:border-green-400 transform hover:-translate-y-2"
              >
                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-400/40 rounded-tr-3xl"></div>
                
                <div className={`text-6xl mb-5 transform group-hover:scale-125 transition-transform bg-gradient-to-r ${item.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer REMOVED - Will render from App.jsx */}
    </>
  );
}

export default DonationsPage;
