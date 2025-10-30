import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot"; // ADD THIS IMPORT
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import FreeResourcesPage from "./pages/FreeResourcesPage";
import OutreachPage from "./pages/OutreachPage";
import AllProductsPage from "./pages/AllProductsPage";
import CentersPage from "./pages/CentersPage";
import DonationsPage from "./pages/DonationsPage";
import {
  allProducts,
  getPictureBooks,
  getIslamicCurriculum,
  getQuranCurriculum,
  getKisaPublications,
  getKisaKidsPublications,
} from "./data/products";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Product Detail Page */}
          <Route path="/product/:id" element={<ProductDetailPage />} />

          {/* Category Pages */}
          <Route
            path="/category/picture-books"
            element={
              <CategoryPage
                products={getPictureBooks()}
                categoryName="Picture Books"
              />
            }
          />
          <Route
            path="/category/islamic-curriculum"
            element={
              <CategoryPage
                products={getIslamicCurriculum()}
                categoryName="Islamic Curriculum"
              />
            }
          />
          <Route
            path="/category/quran-curriculum"
            element={
              <CategoryPage
                products={getQuranCurriculum()}
                categoryName="Qur'ān Curriculum"
              />
            }
          />

          {/* Publisher Pages */}
          <Route
            path="/publisher/kisa-publications"
            element={
              <CategoryPage
                products={getKisaPublications()}
                categoryName="Kisa Publications"
              />
            }
          />
          <Route
            path="/publisher/kisa-kids"
            element={
              <CategoryPage
                products={getKisaKidsPublications()}
                categoryName="Kisa Kids Publications"
              />
            }
          />

          {/* All Products Page */}
          <Route path="/products/all" element={<AllProductsPage />} />

          {/* Other Pages */}
          <Route path="/centers" element={<CentersPage />} />
          <Route path="/resources" element={<FreeResourcesPage />} />
          <Route path="/outreach" element={<OutreachPage />} />
          <Route path="/donations" element={<DonationsPage />} />
        </Routes>

        <Footer />
        <AIChatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;
