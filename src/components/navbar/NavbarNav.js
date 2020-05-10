import React from 'react';
import LoginButton from './LoginButton';

const NavbarNav = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#about">ABOUT</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#price-list">PRICE</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">CONTACT</a>
            </li>
            <li className="nav-item login-button-wrapper">
                <LoginButton />
            </li>
        </ul>
    )
}

export default NavbarNav
