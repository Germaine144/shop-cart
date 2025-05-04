import './App.css';
import Navbar from './components/Navbar';
import HeroPage from './components/hero';
import CategoryCards from './components/categoryCard';
import FeatureSection from './components/feautureSection';
import NewsLetter from './components/newsLetter';
import Footer from './components/footer';
import { CartProvider } from './context/CartContext'; 
import { useState } from 'react';
import Cart from './components/cart';

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="App">
      <CartProvider> 
      <Navbar setShowCart={setShowCart} />
        <HeroPage />
        <CategoryCards />
        <FeatureSection />
        <NewsLetter />
        <Footer />
        {showCart && <Cart setShowCart={setShowCart} />}
      </CartProvider>
    </div>
  );
}

export default App;
