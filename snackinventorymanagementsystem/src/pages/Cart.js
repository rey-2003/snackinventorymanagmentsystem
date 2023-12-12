import React, { useEffect, useState } from 'react';
import { useCart } from '../pages/CartContext';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../styles/Cart.css';

function Cart() {
  const { cart, setCart } = useCart();
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  useEffect(() => {
    console.log('Updated Quantities:', quantities);
  }, [quantities]);


 const handleIncrementQuantity = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    setQuantities(updatedQuantities);
  };

  const handleDecrementQuantity = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = Math.max(updatedQuantities[index] - 1, 1);
    setQuantities(updatedQuantities);
 };

  const handleDeleteProduct = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    const updatedQuantities = [...quantities];
    updatedQuantities.splice(index, 1);
    setQuantities(updatedQuantities);


  };
   const totalAmountSum = cart.reduce(
    (total, item, index) => total + (item.price[item.size] ||0) * quantities[index],
    0
  );

  return (
    <div className="addcart">
      <h2>ADDCART PRODUCTS</h2>
      <div className="productBox">
        {cart.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Flavor: {item.flavor}</p>
            <p>Size: {item.size}</p>
            <p>Price:{item.price[item.size]}</p>
             <label>
              Qty:
               <button onClick={() => handleDecrementQuantity(index)}>-</button>
             <span className="quantity">{quantities[index]}</span>
              <button onClick={() => handleIncrementQuantity(index)}>+</button>
            </label>
            <h4>
              Total Amount: <span className="price">{(item.price[item.size] || 0) * quantities[index]}</span>
            </h4>
             <button onClick={() => handleDeleteProduct(index)}>Delete Product</button>
          </div>
        ))}
      </div>
   <h3>Total Payment: <span className="price">{totalAmountSum}</span></h3>
      <Link to="/product">
        <button>
          <FaArrowLeft /> Back to Order Product
        </button>
      </Link>
    </div>
  );
}

export default Cart;