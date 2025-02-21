import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "card",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Secure Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label className="checkout-label">Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="checkout-input" />
        </div>

        <div className="form-group">
          <label className="checkout-label">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="checkout-input" />
        </div>

        <div className="form-group">
          <label className="checkout-label">Shipping Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required className="checkout-input" />
        </div>

        <div className="form-group">
          <label className="checkout-label">City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required className="checkout-input" />
        </div>

        <div className="form-group">
          <label className="checkout-label">Zip Code</label>
          <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required className="checkout-input" />
        </div>

        <div className="form-group">
          <label className="checkout-label">Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="checkout-select">
            <option value="card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        {formData.paymentMethod === "card" && (
          <div className="card-details">
            <div className="form-group">
              <label className="checkout-label">Card Number</label>
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required className="checkout-input" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="checkout-label">Expiration Date</label>
                <input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required className="checkout-input" />
              </div>
              <div className="form-group">
                <label className="checkout-label">CVV</label>
                <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required className="checkout-input" />
              </div>
            </div>
          </div>
        )}

        <button type="submit" className="checkout-button">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;

