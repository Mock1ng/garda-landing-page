import React, { useEffect, useState } from 'react'
import NavbarNav from './NavbarNav';

const Navbar = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className="navbar navbar-expand-lg navbar-custom bg-custom fixed-top" style={{ background: scrollPosition < 175 ? 'transparent' : '#fff' }}>
      <div className="container-fluid">
        <div className='logo-container'><a className="navbar-brand logo" href="!#">GARDA</a></div>
        <a className="navbar-brand home-desktop" href="!#">HOME</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <div className="toggle-line-1"></div>
          <div className="toggle-line-2"></div>
          <div className="toggle-line-3"></div>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarNav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
