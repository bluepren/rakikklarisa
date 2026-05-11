import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Testimonials from "./components/Testimonials";
import VideoSection from "./components/VideoSection";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import ContactSection from "./components/ContactSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-premium-light">
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <Products />
          <VideoSection />
          <Gallery />
          <Testimonials />
          <Blog />
          <ContactSection />
          <FAQ />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}
