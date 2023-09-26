import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from "../assets/tasty.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home" style= {{ backgroundImage: `url(${BannerImage})`}} >
      <div className="headerContainer" >
        <h2>Order Tasty & </h2>
        <h2>Fresh Food</h2>
        {/* <p>PIZZA TO FIT ANY TASTE</p> */}
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
        </div>  
    </div>
  );
}

export default Home;
