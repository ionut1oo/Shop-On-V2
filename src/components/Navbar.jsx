import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { CiUser } from 'react-icons/ci';
import '../styles/navbar.css';

const Navbar = () => {
    const { items } = useSelector(state => state.cart);
    const cartItems = items?.length || 0;

    return (
        <div className='navbar'>
            <div className='home'>
                <Link to='/' className='home__link'>
                    <img src='imgs/logo.jpg' alt='logo' 
                    className='home__logo' />
                </Link>
            </div>
            <div className='right-links'>
                <Link to='/auth' className='right-links__link1'>
                    <CiUser className='right-links__icon' />
                    <p className='link-text'>Account</p>
                </Link>
                <Link to='/cart' className='right-links__link2'>
                    <PiShoppingCartSimple className='right-links__icon' />
                    <p className='link-text'>Cart</p>
                    {cartItems > 0 && (
                        <span className="navbar__badge">
                            {cartItems}
                        </span>
                    )}
                </Link>
            </div>
        </div>
    );
};

export default Navbar;