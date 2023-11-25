import React from 'react';
import { MenuList } from "../assist/MenuList";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Snacks Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return <div> {menuItem.price} </div>;
      })}
      </div>
    </div>
  );
}

export default Menu;