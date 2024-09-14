import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../Cart/Cart';

const Navbar = ({ cartItemsCount, cartItems, onQuantityChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Toggle Hamburger Menu
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
    if (isCartOpen) {
      setIsCartOpen(false); // Close the cart if it's open
    }
  };

  // Toggle Cart Dropdown
  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
    if (isOpen) {
      setIsOpen(false); // Close the hamburger menu if it's open
    }
  };

  // Close Cart (Used for closing cart from within the Cart component)
  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Handle smooth scroll on link click
  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>BookStore</h2>
      </div>
      
      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={handleScroll}>Home</a></li>
          <li><a href="#genre" onClick={handleScroll}>Genre</a></li>
          <li><a href="#top-books" onClick={handleScroll}>Weekly Books</a></li>
          <li><a href="#review" onClick={handleScroll}>Reviews</a></li>
          <li className="cart" onClick={toggleCart}>
            <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cartItemsCount})
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Cart Dropdown */}
      {isCartOpen && (
        <Cart 
          cartItems={cartItems} 
          onClose={closeCart} 
          onQuantityChange={onQuantityChange}  /* Pass the onQuantityChange prop */
        />
      )}
    </nav>
  );
};

export default Navbar;
