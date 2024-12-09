import { useState } from 'react';
import './App.css';
import AddProduct from './AddProduct';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import ProductSection from './ProductSection';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  return (
    <>
      <Navbar />
      <div className="main-content">
        <Searchbar />{/* Only show AddProduct if logged in */}
        <ProductSection></ProductSection>
      </div>
    </>
  );
}

export default App;
