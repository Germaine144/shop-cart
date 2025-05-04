import './App.css';
import Navbar from './components/navbar';
import HeroPage from './components/hero';
import CategoryCards from './components/categoryCard';
import FeatureSection from './components/feautureSection';
import NewsLetter from './components/newsLetter';
import Footer from './components/footer';
import { CartProvider } from './context/CartContext'; 

function App() {
  return (
    <div className="App">
      <CartProvider> 
        <Navbar />
        <HeroPage />
        <CategoryCards />
        <FeatureSection />
        <NewsLetter />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
