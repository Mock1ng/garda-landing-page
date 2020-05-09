import React from 'react';
import Navbar from './components/navbar/Navbar';
import './App.scss';
import navbar1 from './assets/svgs/navbar1.svg';

function App() {
  return (
    <div className='panjang'>
      <img src={navbar1} alt="ilus1" />
      <Navbar />
    </div>
  );
}

export default App;
