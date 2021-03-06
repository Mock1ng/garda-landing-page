import React from 'react';
import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import PriceList from './components/priceList/PriceList';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import { PlanProvider } from './components/contexts/PlanContext';
import './App.scss';

function App() {

  return (
    <PlanProvider>
      <Navbar />
      <Jumbotron />
      <About />
      <PriceList />
      <Contact />
      <Footer />
    </PlanProvider>
  );
}

export default App;
