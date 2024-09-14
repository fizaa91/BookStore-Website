import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import the AOS styles
import Navbar from './components/Navbar/Navbar';
import Genre from './components/Genre/Genre';
import Hero from './components/Hero/Hero';
import Cart from './components/Cart/Cart';
import ReviewSection from './components/ReviewSection/ReviewSection';
import TopBooks from './components/TopBooks/TopBooks';
import Footer from './components/Footer/Footer';

AOS.init({
  duration: 1000, // Animation duration
  once: true, // Animation only happens once
});
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to add items to the cart
  const addToCart = (book) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.title === book.title);
      if (existingItem) {
        return prevItems.map(item =>
          item.title === book.title ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevItems, { ...book, quantity: 1 }];
    });
  };

  // Function to toggle the cart's visibility
  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  // Function to close the cart
  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Function to handle quantity changes in the cart
  const handleQuantityChange = (item, change) => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: Math.max(cartItem.quantity + change, 1) }
          : cartItem
      )
    );
  };

  return (
    <div className="app">
      {/* Navbar with cart item count and quantity change handler */}
      <Navbar 
        cartItemsCount={cartItems.length} 
        cartItems={cartItems} 
        onQuantityChange={handleQuantityChange} 
      />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Genre Section */}
      <Genre addToCart={addToCart} />
      
      {/* Conditionally render the Cart */}
      {isCartOpen && (
        <Cart 
          cartItems={cartItems} 
          onClose={closeCart} 
          onQuantityChange={handleQuantityChange} 
        />
      )}
      <TopBooks/>
      <ReviewSection/>
      <Footer/>
    </div>
  );
}

export default App;
