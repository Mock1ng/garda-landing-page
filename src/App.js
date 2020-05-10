import React from 'react';
import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import PriceList from './components/priceList/PriceList';
import { PlanProvider } from './components/PlanContext';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <PlanProvider>
      <div>
        <Navbar />
        <Jumbotron />
        <About />
        <PriceList />
        <Contact />
        <Footer />
      </div>
    </PlanProvider>
  );
}

export default App;
