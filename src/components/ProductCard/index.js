import React, { useState } from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const products = props.items;
  const [liked, setLiked] = useState(false); 

  const handleHeartClick = () => {
    setLiked(!liked); 
  };

  return (
    <div className="card-container">
      <div className="card">
        <Link style={{textDecoration:'none'}} to={`/products/${products.id}`}>
          <img src={products.images[0]} alt="Product" />
          <h3>{products.name}</h3>
          <p>{products.short_description}</p>
          <h6>{products.price} Dh</h6>
          <button>Ajouter Au Panier</button>
        </Link>
        <span 
          className={`heart ${liked ? 'liked' : ''}`} 
          onClick={handleHeartClick}
        >
          ♥
        </span>
      </div>
    </div>
  );
};

export default Card;
