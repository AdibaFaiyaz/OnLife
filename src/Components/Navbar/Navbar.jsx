import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <div className='nav-logo'>
                    <img src={logo} alt='OnLife Logo' />
                    <p>OnLife</p>
                </div>
                
                <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
                    <li onClick={() => { setMenu("shop"); setIsMobileMenuOpen(false) }}>
                        <Link to='/' className="nav-link">
                            Shop
                            {menu === "shop" && <div className="nav-indicator" />}
                        </Link>
                    </li>
                    <li onClick={() => { setMenu("men"); setIsMobileMenuOpen(false) }}>
                        <Link to='/men' className="nav-link">
                            Men
                            {menu === "men" && <div className="nav-indicator" />}
                        </Link>
                    </li>
                    <li onClick={() => { setMenu("women"); setIsMobileMenuOpen(false) }}>
                        <Link to='/women' className="nav-link">
                            Women
                            {menu === "women" && <div className="nav-indicator" />}
                        </Link>
                    </li>
                    <li onClick={() => { setMenu("kids"); setIsMobileMenuOpen(false) }}>
                        <Link to='/kids' className="nav-link">
                            Kids
                            {menu === "kids" && <div className="nav-indicator" />}
                        </Link>
                    </li>
                </ul>

                <div className='nav-login-cart'>
                    <Link to='/login' className="nav-login-btn">
                        <button className="login-btn">Login</button>
                    </Link>
                    <Link to='/cart' className="nav-cart-link">
                        <div className="cart-icon-container">
                            <img src={cart_icon} alt='Cart' />
                            <div className="nav-cart-count">0</div>
                        </div>
                    </Link>
                </div>

                <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

