import React from "react";
import "./shop.css";

import BookCard from "../bookcard/BookkCard";
import Testimonial from "../testimonial/Testimonial";
import Subscription from "../subscription/Subscription";
import Favoirte from "../favorite/Favorite";

const Shop = () => {
  const favoriteTitles = "Favorite Books";
  return (
    <div className="shop">
      <div>
        <div className="shopTitle">
          <h2>Best Seller Books</h2>
        </div>
        <BookCard />
        <div className="shopTitle">
          <h2>{favoriteTitles}</h2>
          <Favoirte />
          <Testimonial />
          <Subscription />
        </div>
      </div>
    </div>
  );
};

export default Shop;
