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

  let y = window.scrollY;
  let body = document.body;
  let bodyHeight = body.scrollTop
  console.log(body);

  const coba = () => {
    window.scrollTo(400, 400);
  }

  return (
    <PlanProvider>
      <Navbar />
      <Jumbotron />
      <button onClick={coba}>COBA</button>
      <About />
      <PriceList />
      <Contact />
      <Footer />
    </PlanProvider>
  );
}

export default App;
