import React, { useContext, useState } from "react";
import logo from "../../assets/Logo.png";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { StoreContext } from "../../context/StoreContext";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="GrocerGo Logo" className="logo" />
          </Link>
          <div className="logoText">
            <h1>GrocerGo</h1>
            <h2>Grocery</h2>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-search-icon">
            <Link to="/cart">
              <span className="material-symbols-outlined">shopping_cart</span>
              <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
            </Link>
          </div>
          {!token ? (
            <button onClick={() => setShowLogin(true)}>Sign In</button>
          ) : (
            <div className="navbar-profile">
              <img src={assets.profile_icon} className="profile" alt="" />
              <ul className="nav-profile-dropdown">
                <li onClick={() => navigate("/myorders")}>
                  <img src={assets.bag_icon} alt="" /> <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="" /> <p>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
