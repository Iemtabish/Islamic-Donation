import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import ProductGrid from '../components/ProductGrid';
import { getNewReleases, getDaysOfFatimah, allProducts } from '../data/products';

function HomePage() {
  return (
    <>
      {/* Hero Banner */}
      <HeroSection />
      
      {/* Days of Sayyidah Fatimah Section */}
      <ProductGrid 
        products={getDaysOfFatimah()} 
        title="Days of Sayyidah Fatima (as)" 
        showViewAll={true}
      />
      
      {/* New Releases Section */}
      <ProductGrid 
        products={getNewReleases()} 
        title="New Releases" 
      />
      
      {/* Featured Products Section */}
      <ProductGrid 
        products={allProducts.slice(0, 8)} 
        title="Featured Products" 
      />
      
      {/* Mission Statement Section - MOVED TO BOTTOM */}
      <MissionSection />
    </>
  );
}

export default HomePage;
