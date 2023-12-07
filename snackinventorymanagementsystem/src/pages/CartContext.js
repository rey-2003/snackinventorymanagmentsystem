import React, { createContext, useContext, useState, useEffect} from 'react';

// Create a context to manage the cart state
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  useEffect(() => {
      setCart((prevCart) =>
      prevCart.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }))
    );
  }, [cart]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex((item) => item.name === product.name);

    if (existingProductIndex !== -1) {
      // If the product exists, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);

    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
   
  const calculateTotalPrice = () => {
     return cart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
    
  };

  const getCartCount = () => {
     return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cart,
    addToCart,
    getCartCount,
    calculateTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};