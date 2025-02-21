import React from 'react';
import products from '../../context/Data'
import Card from '../../components/ProductCard';
import { Link } from 'react-router-dom';
const Products = () => {
  return (
    <div>
      {products.map((pro)=><Card items={pro}/>)}
    </div>
  )
};

export default Products;
