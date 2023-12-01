import React from 'react'
import "../styles/ProductItem.css";
import { Link } from "react-router-dom";

function ProductItem({ image, name, flavor, size, price, flavorOptions=[], sizeOptions=[], onFlavorChange, onSizeChange,}) {


  return (
    <div className="productItem">
        <div style={{ backgroundImage: `url(${image})` }} ></div>
        <h1> {name} </h1>
        <h1> {flavor} </h1>
        <h1> {size} </h1>
        <label>
          <strong>Flavor:</strong>
          <select value={flavor} onChange={(e) => onFlavorChange(e.target.value)}>
            {flavorOptions.map((flavorOptions) => (
              <option key={flavorOptions} value={flavorOptions}>
                {flavorOptions}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          <strong>Size:</strong>
        <select value={size} onChange={(e) => onSizeChange(e.target.value)}>
          {sizeOptions.map((sizeOption) => (
            <option key={sizeOption} value={sizeOption}>
              {sizeOption}
            </option>
          ))}
        </select>
        </label>
        <p> {price} </p>
        <Link to="/cart">
        <button>Add to Cart</button>
        </Link>
    </div>
  );
}

export default ProductItem;