import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onClose, onQuantityChange }) => {
  const handleQuantityChange = (item, change) => {
    onQuantityChange(item, change);
  };

  return (
    <div className="cart-menu">
      <button className="cart-close" onClick={onClose}>X</button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="cart-item-info">
                <span className="cart-item-name">{item.title}</span>
                <div className="cart-item-controls">
                  <button 
                    onClick={() => handleQuantityChange(item, -1)} 
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity">Qty: {item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item, 1)}
                  >
                    +
                  </button>
                </div>
                <span className="cart-item-price">${item.price.toFixed(2)}</span>
              </div>
              <button className="buy-now">Buy Now</button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <span>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Cart;
