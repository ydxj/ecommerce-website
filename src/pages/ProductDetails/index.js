import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import products from "../../context/Data";



const ProductDetails = () => {
  const {id} = useParams()
  const product = products.find((u)=> u.id === parseInt(id))

 
  const [currentImage, setCurrentImage] = useState(0);
  if (!product) {
      return <p>Product not found</p>;
    }
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="product-details-container">
      <div className="image-carousel">
        <button className="carousel-btn" onClick={prevImage}>❮</button>
        <img src={`/${product.images[currentImage]}`} alt={product.name} className="carousel-image" />
        <button className="carousel-btn" onClick={nextImage}>❯</button>
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-short-description">{product.short_description}</p>
        <p className="product-big-description">{product.big_description}</p>
        <ul className="product-details">
          <li><strong>Dimensions:</strong> {product.dimensions}</li>
          <li><strong>Material:</strong> {product.material}</li>
          <li><strong>Color:</strong> {product.color}</li>
          <li><strong>Weight:</strong> {product.weight}</li>
          <li><strong>Stock:</strong> {product.stock} available</li>
        </ul>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;

/* ProductDetails.css */
