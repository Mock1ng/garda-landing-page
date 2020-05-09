import React from 'react';
import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import './App.scss';

function App() {
  return (
    <div className='panjang'>
      <Navbar />
      <Jumbotron />
      <About />
      <div className="panjang">hehe</div>
    </div>
  );
}

export default App;
