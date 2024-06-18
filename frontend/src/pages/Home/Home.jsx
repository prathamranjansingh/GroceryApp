import React, { useState } from "react";
import "./Home.css";
import ExploreCategory from "../../components/ExploreCategory/ExploreCategory";
import Header from "../../components/Header/Header";
import AppDownload from "../../components/AppDownload/AppDownload";
import Footer from "../../components/Footer/Footer";
import GroceryDisplay from "../../components/GroceryDisplay/GroceryDisplay";
const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Header />
      <ExploreCategory category={category} setCategory={setCategory} />
      <GroceryDisplay category={category} />
      <AppDownload />
      <Footer />
    </div>
  );
};

export default Home;
