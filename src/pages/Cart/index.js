import React, { useState } from "react";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import products from "../../context/Data";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: products[0].id, name: products[0].name, price: products[0].price, quantity: 2, image: products[0].images[0] },
    { id: products[5].id, name: products[5].name, price: products[5].price, quantity: 2, image: products[5].images[0] },
    { id: products[9].id, name: products[9].name, price: products[9].price, quantity: 2, image: products[9].images[0] },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div className="cart-details">
              <h5>{item.name}</h5>
              <p>${item.price}</p>
            </div>
            <div className="cart-actions">
              <button onClick={() => updateQuantity(item.id, -1)} className="quantity-btn">
                <FaMinus />
              </button>
              <span className="quantity">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="quantity-btn">
                <FaPlus />
              </button>
              <button className="remove-btn" onClick={() => removeItem(item.id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
      <div className="cart-total">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;

