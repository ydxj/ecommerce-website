import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RoutesConfig from './routes';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Checkout />
      <Home />
      <Footer />
     
    </BrowserRouter>
  );
}

export default App;
