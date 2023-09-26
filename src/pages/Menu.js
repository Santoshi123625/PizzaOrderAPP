import React from 'react'
import {MenuList} from "../helpers/MenuList";
import MenuItem from '../component/MenuItem';
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menu">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem,key)=>{
          return <MenuItem 
          key={key}
          image={menuItem.images} 
          name={menuItem.name} 
          price={menuItem.price}
        />
        } )}
      </div>
    </div>
  )
}

export default Menu
