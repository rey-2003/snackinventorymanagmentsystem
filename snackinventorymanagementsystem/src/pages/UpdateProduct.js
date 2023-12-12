import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

function UpdateProduct({ product, onUpdate }) {

  const initialPrices = product 
  ? {
    Small: product.price.Small,
    Medium: product.price.Medium,
    Large: product.price.Large,
  }
  : { 

    Small: 0,
    Medium: 0,
    Large: 0,
  };

  const [newPrices, setNewPrices] = useState(initialPrices);

  if (!product) {
    return <div>Select a product to update.</div>;
  }

  const handleUpdate = () => {
    // Call the onUpdate function from the parent component
    onUpdate(product.name, newPrices);
  };

  return (
    <div>
      <h2>Update Product: {product.name}</h2>
      <label>
        Small: 
        <input 
          type="number" 
          value={newPrices.Small} 
          onChange={(e) => setNewPrices({ ...newPrices, Small: e.target.value })}
        />
      </label>
      <br />
      <label>
        Medium: 
        <input 
          type="number" 
          value={newPrices.Medium} 
          onChange={(e) => setNewPrices({ ...newPrices, Medium: e.target.value })}
        />
      </label>
      <br />
      <label>
        Large: 
        <input 
          type="number" 
          value={newPrices.Large} 
          onChange={(e) => setNewPrices({ ...newPrices, Large: e.target.value })}
        />
      </label>
      <br />
      <button onClick={handleUpdate}><FaCheck/></button>
    </div>
  );
}

export default UpdateProduct;