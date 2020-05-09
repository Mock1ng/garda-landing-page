import React from 'react';
import LoginButton from './LoginButton';

const NavbarNav = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="!#">ABOUT</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="!#">PRICE</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="!#">CONTACT</a>
            </li>
            <li className="nav-item login-button-wrapper">
                <LoginButton />
            </li>
        </ul>
    )
}

export default NavbarNav
