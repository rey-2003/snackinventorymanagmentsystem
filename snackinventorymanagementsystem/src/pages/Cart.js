import React, { useEffect, useState } from 'react';
import { useCart } from '../pages/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Orders from '../pages/Orders';
import '../styles/Cart.css';


function Cart() {
  const { cart, setCart } = useCart();
  const [quantities, setQuantities] = useState(cart.map(() => 1));
  const [orders] = useState([]);
  const navigate = useNavigate();

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

 const handlePlaceOrder = () => {
  console.log('Placing order:', cart);
    const newOrders = cart.map((item, index) => ({
      name: item.name,
      flavor: item.flavor,
      size: item.size,
      quantity: quantities[index],
      totalAmount: (item.price[item.size] || 0) * quantities[index],
    }));

    fetch('http://localhost:8081/placeOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orders: newOrders }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the server as needed
        // Additional logic if needed after placing the order
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        // Handle error if the order placement fails
      });

    // Clear the cart after placing the order
    setCart([]);
    setQuantities([]);

    console.log('Navigating to orders page...');
    navigate('/orders', { state: { orders: newOrders } });
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
        <div className='placeOrder'>
         {cart.length > 0 && (
        <>
         <button onClick={handlePlaceOrder}>Place Order</button>

     </>
       )}
      </div>
      </div>
   <h3>Total Payment: <span className="price">{totalAmountSum}</span></h3>
      <Link to="/product">
        <button>
          <FaArrowLeft /> Back to Order Product
        </button>
      </Link>
      {orders.length > 0 && <Orders orders={orders} />}
    </div>
  );
}

export default Cart;