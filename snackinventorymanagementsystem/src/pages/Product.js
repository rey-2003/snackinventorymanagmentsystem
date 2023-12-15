import React, { useState } from 'react';
import Navbar from "../components/navbar";
import { ProductList as initialProductList } from "../assist/ProductList";
import ProductItem from '../components/ProductItem';
import UpdateProduct from './UpdateProduct';
import { useCart } from '../pages/CartContext';
import "../styles/Product.css";
import Footer from "../components/Footer";

function Product() {
  const { addToCart } = useCart();
  const [productList, setProductList] = useState(initialProductList);
  const [selectedOptions, setSelectedOptions] = useState({
    flavor: '',
    size: '',
  });
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState('');

  const handleOptionChange = (optionType, value, productItem) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionType]: value,
    });

    if (optionType === 'size') {
      if (productItem && productItem.prices && productItem.prices[value]) {
        const updatedProduct = {
          ...productItem,
          price: productItem.prices[value],
        };

        setProductList((prevList) =>
          prevList.map((item) =>
            item.name === productItem.name && item.size === value ? updatedProduct : item
          )
        );
      } 
    }
  };

  const handleAddToCart = (product) => {
    addToCart({
      name: product.name,
      flavor: selectedOptions.flavor,
      size: selectedOptions.size,
      price: product.price,
      updateStockCallback: () => updateStockCallback(product, -1),
    });

    setSelectedOptions({
      flavor: '',
     size: '',
     price: '',
    });
  };

  const updateStockCallback = (product, updatedStock) => {
  console.log('Updating stock:', product, updatedStock);
  const updatedProductList = productList.map((item) =>
    item.name === product.name ? { ...item, stock: { ...item.stock, ...updatedStock } } : item
  );

  setProductList(updatedProductList);
};

  const handleUpdateProduct = (productName, newPrices) => {
    const updatedProductList = productList.map((product) =>
      product.name === productName ? { ...product, price: newPrices } : product
    );
    setProductList(updatedProductList);
    setShowUpdateModal(false);
  };

  return (
    <div className="product">
      <Navbar />
      <h1 className="productTitle">Our Snacks Menu</h1>
      <div className="productList">
        {productList.map((productItem, key) => (
          <ProductItem
            key={key}
            image={productItem.image}
            name={productItem.name}
            flavor={productItem.flavor}
            size={productItem.size}
            price={productItem.price}
            flavorOptions={productItem.flavorOptions}
            sizeOptions={productItem.sizeOptions}
            stock={productItem.stock[selectedOptions.size]}
            onOptionChange={(type, value) => handleOptionChange(type, value, productItem)}
            onAddToCart={() => handleAddToCart(productItem)}
            onStockUpdate={(updatedStock) => updateStockCallback(productItem, updatedStock)}
          />
        ))}
      </div>
      <div>
        <label>
          Select Product to Update:
          <select
            value={selectedProductName}
            onChange={(e) => setSelectedProductName(e.target.value)}
          >
            <option value="">Select Product</option>
            {productList.map((product) => (
              <option key={product.name} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={() => setShowUpdateModal(true)}>Update Product</button>
      {showUpdateModal && (
        <UpdateProduct
          product={productList.find((product) => product.name === selectedProductName)}
          onUpdate={handleUpdateProduct}
        />
      )}
      <Footer />
      
    </div>
  );
}

export default Product;