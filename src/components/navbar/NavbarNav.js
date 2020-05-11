import React from 'react';
import LoginButton from './LoginButton';

const NavbarNav = () => {

    const aboutPosition = () => {
        window.scrollTo(0, 604);
    }

    const pricePosition = () => {
        window.scrollTo(0, 1099);
    }

    const contactPosition = () => {
        window.scrollTo(0, 1850);
    }

    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#!" onClick={aboutPosition}>ABOUT</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#!" onClick={pricePosition}>PRICE</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#!" onClick={contactPosition}>CONTACT</a>
            </li>
            <li className="nav-item login-button-wrapper">
                <LoginButton />
            </li>
        </ul>
    )
}

export default NavbarNav
