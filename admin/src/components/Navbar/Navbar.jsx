import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={assets.logo} alt="GrocerGo Logo" className="logo" />
        <div className="logoText">
          <h1>GrocerGo</h1>
          <h2>Grocery</h2>
        </div>
      </div>
      <img src={assets.profile_image} className="profile" alt="" />
    </div>
  );
};

export default Navbar;
