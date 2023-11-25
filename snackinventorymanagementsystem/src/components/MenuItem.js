import React from 'react'

function MenuItem({ image, name, price, size, flavor}) {
  return (
    <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }} ></div>
        <h1> {name} </h1>
        <h1> {size} </h1>
        <h1> {flavor} </h1>
        <p> ${price} </p>
        
    </div>
  )
}

export default MenuItem;