import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/Order.css";

function Orders() {
   const [showTotalAmount, setShowTotalAmount] = useState(false);
  const location = useLocation();
  const { orders } = location.state || { orders: [] };

  console.log('Orders received:', orders);

  if (!orders || !Array.isArray(orders) || orders.length === 0) {
    return <p>No orders to display.</p>;
  }

  const totalAmountSum = orders.reduce((total, order) => total + order.totalAmount, 0);

  return (
    <div>
      <h2>O R D E R S</h2>
      {orders.map((order, index) => (
        <div key={index}>
          <p>Name: {order.name}</p>
          <p>Flavor: {order.flavor}</p>
          <p>Size: {order.size}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Total Amount: {order.totalAmount}</p>
        </div>
      ))}
      <div>
             <button onClick={() => setShowTotalAmount(!showTotalAmount)}>Payment View</button>
      {showTotalAmount && <h3>Total Payment: {totalAmountSum}</h3>}
          </div>
    </div>
  );
}

export default Orders;