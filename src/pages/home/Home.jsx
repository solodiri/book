import React from "react";
import "./home.css";
import Shop from "../../compoments/shop/Shop";
import Hero from "../../compoments/hero/Hero";

const Home = () => {
  return (
    <div className=" home">
      <Hero />
      <Shop />
    </div>
  );
};

export default Home;
