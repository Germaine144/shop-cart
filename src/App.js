import './App.css';
import Navbar from './components/navbar';
import HeroPage from './components/hero';
import Categories from './components/Category';
import CategoryCards from './components/categoryCard';
import FeatureSection from './components/feautureSection';
function App() {
  return (
    <div className="App  ">
      <Navbar />
      <HeroPage />
      <Categories />
     <CategoryCards />
     <FeatureSection />
    </div>
  );
}

export default App;
