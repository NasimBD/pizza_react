import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './GlobalStyle'; 
import { Hero } from './components/Hero/Index';
import { Products } from './components/products/Products';
import { PizzaData, DessertData, FeatureData} from './components/products/data';
import { Feature } from './components/Feature';
import { Footer } from './components/Footer';
import {SocialMediaData} from './components/Footer/socialMediaData';


// import { useState } from 'react';

function App() {
  // const [isOpen, setOpen] = useState(false);

  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products 
      heading="Choose your favorite pizza"
      products={PizzaData}
      />
      <Feature
      heading="Feature of the day"
      product={FeatureData}
      />
      <Products 
      heading="Sweet treat for you"
      products={DessertData}
      />
      <Footer socialMediaData={SocialMediaData}/>
    </Router>

  );
}

export default App;
