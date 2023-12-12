import React, { createContext, useContext, useState, useEffect} from 'react';

// Create a context to manage the cart state
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;

};


// Cart provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  useEffect(() => {
       console.log('Updated Quantities:', cart);
  }, [cart]);  
 

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      
      (item) => item.name === product.name  &&
        item.flavor === product.flavor &&
        item.size === product.size);

        console.log('Before setCart:', cart);

    if (existingProductIndex !== -1) {
      // If the product exists, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      console.log('Updated Cart:', updatedCart);
      setCart(updatedCart);

      if(product.updateStockCallback) {
        product.updateStockCallback();
      }
     

    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...product, quantity: 1 }]);
  
    }
  };

  const removeProductFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  }
   
  const calculateTotalPrice = () => {
     return cart.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);
    
  };

  const getCartCount = () => {
     return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const value = {
    cart,
    setCart,
    addToCart,
    removeProductFromCart,
    getCartCount,
    calculateTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};