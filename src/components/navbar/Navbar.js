import React from 'react'
import NavbarNav from './NavbarNav';

const Navbar = () => {
  let elem = (document.compatMode === "CSS1Compat") ?
    document.documentElement :
    document.body;

  let height = elem.clientHeight;
  let width = elem.clientWidth;
  console.log(height, width);


  return (
    <nav className="navbar navbar-expand-lg navbar-custom bg-custom fixed-top">
      <div className="container-fluid">
        <div className='logo-container'><a className="navbar-brand logo" href="!#">GARDA</a></div>
        <a className="navbar-brand home-desktop" href="!#">HOME</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
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
