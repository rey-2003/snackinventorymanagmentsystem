import React, { useState } from 'react';
import { ProductList } from "../assist/ProductList";
import ProductItem from '../components/ProductItem';
import "../styles/Product.css";

function Product() { 
   const [selectedFlavor, setSelectedFlavor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleFlavorChange = (flavor) => {
    setSelectedFlavor(selectedFlavor);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(selectedSize);
  };
  
  return (
    <div className="product">
      <h1 className="productTitle">Our Snacks Menu</h1>
      <div className="productList">
        {ProductList.map((productItem, key) => {
          return (
          <ProductItem
          key={key}
          image={productItem.image} 
          name={productItem.name} 
          flavor={productItem.flavor}
          size={productItem.size}
          price={productItem.price}
          flavorOptions={productItem.flavorOptions} // Pass flavorOptions to ProductItem
              sizeOptions={productItem.sizeOptions} // Pass sizeOptions to ProductItem
              onFlavorChange={handleFlavorChange} // Pass flavor change handler to ProductItem
              onSizeChange={handleSizeChange} // Pass size change handler to ProductItem
          />
          );
      })}
      </div>
    </div>
  );
}

export default Product;