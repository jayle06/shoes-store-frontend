/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from 'react'
import Menu from '../svg/bars-solid.svg';
import Close from '../svg/times-solid.svg';
import CartIcon from '../svg/shopping-cart-solid.svg';
import {Link} from 'react-router-dom';
import '../css/Header.css';

function Header() {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="header">
            <div className="header-nav-menu" onClick={() => setToggle(true)}>
                <img src={Menu} all="" width="20px" />
            </div>
            <div className="header-logo">
                <h1><Link to="/">Shoes</Link></h1>
            </div>
            <div className="header-nav">
                <ul className={toggle ? "toggle" : ""} onClick={() => setToggle(false)}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login / Register</Link></li>
                    <li className="header-nav-close">
                        <img src={Close} all="" width="20px" />
                    </li>
                </ul>
                <div className="header-nav-cart">
                    <span>0</span>
                    <Link to="/cart">
                        <img src={CartIcon} all="" width="20px" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
