import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ExploreCategory.css";
const ExploreCategory = ({ category, setCategory }) => {
  return (
    <div className="Explore">
      <div className="title">
        <h1>Explore Categories</h1>
      </div>

      <div className="categories">
        <ul>
          <li
            onClick={() => setCategory("all")}
            className={category === "all" ? "active" : ""}>
            All
          </li>
          <li
            onClick={() => setCategory("vegetables")}
            className={category === "vegetables" ? "active" : ""}>
            Vegetables
          </li>
          <li
            onClick={() => setCategory("Fruits")}
            className={category === "Fruits" ? "active" : ""}>
            Fruits
          </li>
          <li
            onClick={() => setCategory("Dairy")}
            className={category === "Dairy" ? "active" : ""}>
            Dairy
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExploreCategory;
