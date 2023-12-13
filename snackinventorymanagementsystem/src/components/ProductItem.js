import React, { useState, useEffect } from 'react';
import { useCart } from '../pages/CartContext';
import "../styles/ProductItem.css";

function ProductItem({ image, name, flavor, size, price, stock, flavorOptions = [], sizeOptions = [], onStockUpdate, onOptionChange, onAddToCart }) {
  const { addToCart } = useCart();
  const [selectedPrice, setSelectedPrice] = useState(price.Small || 0);

  useEffect(() => {
    setSelectedPrice(price[size] || price.Small || 0);
  }, [size, price]);

  const handleAddToCart = () => {
    addToCart({ name, flavor, size, price: selectedPrice });
    onAddToCart();
    onStockUpdate(-1);
    console.log('Product added to cart:', {
      name,
      flavor,
      size,
      price: selectedPrice,
    });
    console.log('onStockUpdate prop:', onStockUpdate);
  };

  const handleOptionChange = (optionType, value) => {
    onOptionChange(optionType, value);

    if (optionType === 'size') {
      setSelectedPrice(price[value] || price.Small || 0);
    }
  };

  return (
    <div className="productItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1> {name} </h1>
      <h1> {flavor} </h1>
      <h1> {size} </h1>
      <label>
        <strong>Flavor:</strong>
        <select value={flavor} onChange={(e) => onOptionChange('flavor', e.target.value)}>
          {flavorOptions.map((flavorOption, index) => (
            <option key={index} value={flavorOption}>
              {flavorOption}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        <strong>Size:</strong>
        <select value={size} onChange={(e) => handleOptionChange('size', e.target.value)}>
          {sizeOptions.map((sizeOption, index) => (
            <option key={index} value={sizeOption}>
              {sizeOption}
            </option>
          ))}
        </select>
      </label>
      <p> P{selectedPrice} </p>
      <p>Stocks: {stock}</p>
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;