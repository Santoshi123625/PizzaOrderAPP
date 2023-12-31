import React from 'react'
import {Link} from "react-router-dom";
function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style= {{ backgroundImage: `url(${image})`}}></div>
      <h1>{name}</h1>
      <p>₹ {price}</p>
      <Link to="/cart">
          <button>Add to Cart</button>
      </Link>
    </div>
  )
}

export default MenuItem
