import React from "react";
import { Link } from "react-router-dom"
import "../css/homePriceBanner.css"
import BannerImg from "../images/mother-with-daughter.jpg"
function HomePriceBanner() {
  return (
    <div className="container">
      <div className="homePriceBanner-grid">
        <div className="homePriceBanner__content">
          <h3>Pricing That Fits Your Budget</h3>
          <p>Discover our competitive and transparent pricing designed to accommodate all your laundry needs. Whether you're washing daily essentials or tackling larger items, we offer a range of affordable options to ensure a stress-free experience. For a detailed breakdown of our services and prices, click the button below.</p>
          <Link to = "/pricing" className = "btn btn--secondary">See Our Pricing</Link>
        </div>
        <div className="homePriceBanner__image">
          <img src={BannerImg} alt="washing machine"/>
        </div>
      </div>

    </div>
  )
}

export default HomePriceBanner
