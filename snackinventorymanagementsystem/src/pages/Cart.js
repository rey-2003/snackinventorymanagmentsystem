import React, { useState } from 'react';
import { useCart } from '../pages/CartContext';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/Cart.css';

function Cart() {
  const { cart } = useCart();
  const [quantities, setQuantities] = useState(cart.map(() => 1));


 const handleIncrementQuantity = (index) => {
    const updatedQuantities = quantities.map((q, i) => (i === index ? q + 1 : q));
    setQuantities(updatedQuantities);
  };

  const handleDecrementQuantity = (index) => {
    const updatedQuantities = quantities.map((q, i) => (i === index ? Math.max(q - 1, 1) : q));
    setQuantities(updatedQuantities);

  };

   const totalAmountSum = cart.reduce(
    (total, item, index) => total + item.price * quantities[index],
    0
  );

  return (
    <div>
      <h2>ADDCART PRODUCTS</h2>
      <div className="productBox">
        {cart.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Flavor: {item.flavor}</p>
            <p>Size: {item.size}</p>
            <p>Price:{item.price}</p>
             <label>
              Qty:
               <button onClick={() => handleDecrementQuantity(index)}>-</button>
             <span className="quantity">{quantities[index]}</span>
              <button onClick={() => handleIncrementQuantity(index)}>+</button>
            </label>
            <p>
              Total Amount: <span className="price">{(item.price || 0) * quantities[index]}</span>
            </p>
          </div>
        ))}
      </div>
   <p>Total Payment: <span className="price">{totalAmountSum}</span></p>
      <Link to="/product">
        <button>
          <FaArrowLeft /> Back to Order Product
        </button>
      </Link>
    </div>
  );
}

export default Cart;