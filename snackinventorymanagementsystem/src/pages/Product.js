import React, { useState } from 'react';
import { ProductList } from "../assist/ProductList";
import ProductItem from '../components/ProductItem';
import { useCart } from '../pages/CartContext';
import "../styles/Product.css";

function Product() { 
  const { addToCart } = useCart();

  const [selectedOptions, setSelectedOptions] = useState({
     flavor: '',
    size: '',
  });

  const handleOptionChange = (optionType, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionType]: value,
    });
  };

  const handleAddToCart = (product) => {

    const updatedProduct = { ...product, stock: product.stock -1 };
    addToCart({
       name: updatedProduct.name,
       flavor: selectedOptions.flavor,
       size: selectedOptions.size,
       price: updatedProduct.price,
    });
  };
  
  return (
    <div className="product">
      <h1 className="productTitle">Our Snacks Menu</h1>
      <div className="productList">
        {ProductList.map((productItem, key) => (
          <ProductItem
          key={key}
          image={productItem.image} 
          name={productItem.name} 
          flavor={productItem.flavor}
          size={productItem.size}
          price={productItem.price}
          stock={productItem.stock}
          flavorOptions={productItem.flavorOptions} // Pass flavorOptions to ProductItem
              sizeOptions={productItem.sizeOptions} // Pass sizeOptions to ProductItem
              onOptionChange={(type, value) => handleOptionChange(type, value)} // Pass flavor change handler to ProductItem
               onAddToCart={() => handleAddToCart(productItem)}
          />
      ))}
      </div>
    </div>
  );
}

export default Product;