import React from 'react'
import { useCart } from '../pages/CartContext';
import "../styles/ProductItem.css";


function ProductItem({ image, name, flavor, size, price, stock, flavorOptions=[], sizeOptions=[], onOptionChange, onAddToCart}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({name: name, flavor: flavor, size: size, price: price,});
    onAddToCart();
    console.log('Product added to cart:', {
    name: name,
    flavor: flavor,
    size: size,
    price: price,
  });
  };

  return (
    <div className="productItem">
        <div style={{ backgroundImage: `url(${image})` }} ></div>
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
        <select value={size} onChange={(e) => onOptionChange('size', e.target.value)}>
          {sizeOptions.map((sizeOption, index) => (
            <option key={index} value={sizeOption}>
              {sizeOption}
            </option>
          ))}
        </select>
        </label>
        <p> P{price} </p>
         <label className={stock === 0 ? 'outOfStock' : 'inStock'}>Stocks: {stock}</label>
        <button onClick={handleAddToCart} disabled= {stock ===0}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;