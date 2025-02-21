import React, { useState } from "react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import products from "../../context/Data";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to='/'>
        <div className="logo">
          <img
            src="/logoboite.png"
            alt="OrgaSpace Logo"
            className="logo-image"
          />
          <span className="logo-text">OrgaSpace</span>
        </div>
        </Link>
      </div>

      <div className={`navbar-center ${menuOpen ? "active" : ""}`}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
          <select className="category-select">
            <option value="all">All Categories</option>
            {products.map(u=> <option value={u.category}>{u.category}</option>)}
          </select>
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <div className="icon-group">
        <Link to={`/login`}>
          <div className="icon">
            <i className="fas fa-user"></i>
            <span>Login</span>
          </div>
          </Link>
          <div className="icon">
            <i className="fas fa-heart"></i>
            <span>Wishlist</span>
            <span className="badge">0</span>
          </div>
          <div className="icon">
            <i className="fas fa-star"></i>
            <span>Compare</span>
            <span className="badge">0</span>
          </div>
        </div>
        <Link to={`/cart`}>
          <div className="cart">
            <i className="fas fa-shopping-cart"></i>
            <span>0.00 Dh</span>
            <span className="badge">0</span>
          </div>
        </Link>
        
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
