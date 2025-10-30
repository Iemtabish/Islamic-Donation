import { Link } from "react-router-dom";
import AliffHeroLogo from "./AliffHeroLogo";

function HeroSection() {
  return (
    <section className="relative min-h-[650px] bg-gradient-to-br from-green-900 via-green-700 to-teal-800 overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content - No Duplicate Stats */}
          <div className="text-white">
            {/* Bismillah Header */}
            <div className="inline-block mb-6 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <p className="text-lg tracking-wide">
                بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                الیف Aliff
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-yellow-200">
                Foundation
              </span>
            </h1>

            {/* Tagline */}
            <h2 className="text-2xl lg:text-3xl font-semibold text-green-100 mb-4">
              Illuminating Young Minds
            </h2>

            {/* Description */}
            <p className="text-xl text-green-100 mb-8 leading-relaxed max-w-2xl">
              Providing authentic Islamic curriculum, resources, and literature
              to nurture the faith and knowledge of children worldwide 🌙
            </p>

            {/* CTA Buttons - Improved Spacing */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products/all"
                className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <span>Browse Products</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                to="/learning-hub"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                <span>Free Resources</span>
                <span className="text-xl">📚</span>
              </Link>
            </div>
          </div>

          {/* Right - ALIFF HERO LOGO COMPONENT */}
          <div className="relative lg:pl-8">
            {/* Glow Effect Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl opacity-20 blur-3xl animate-pulse"></div>

            {/* Aliff Logo Component */}
            <div className="relative">
              <AliffHeroLogo className="w-full max-w-md mx-auto" />

              {/* 100% Free Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-green-700 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-lg animate-bounce">
                ⭐ 100% Free
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Float Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
