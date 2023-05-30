import React from "react";
import "../css/hero.css";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

function Hero({ title, subtitle, image }) {
  const currentPage = useSelector((store) => store.getLocation.name);
  const cur_page = useLocation();

  return (
    <div className="container ">
      <div className="hero">
        <div className="hero__content">
          {title && <h2>{title}</h2>}
          {subtitle && <h4>{subtitle}</h4>}
          <div className="hero__cta">
            <a href="https://speedyfreshlaundromat.curbsidelaundries.com/" className="btn btn--primary">
              Schedule a Pickup
            </a>
            <a href="tel:(718)4900334" className="btn btn--secondary">
              Click to call
            </a>
          </div>
        </div>
        <div className="hero__image">
          <img loading="lazy" src={image} alt="hero" />
        </div>
      </div>

      {cur_page.pathname !== "/" && (
        <div className="breadcrumbs">
          <Link className="previous" to="/">
            Home
          </Link>
          {cur_page.pathname === "/commercial-laundry" && (
            <Link to="/pickup-and-delivery" className="previous">
              » Pickup & Delivery
            </Link>
          )}
          <p className="current">
            » {' '}
            {cur_page.pathname === "/pickup-and-delivery"
              ? "  Pickup & Delivery"
              : currentPage}
          </p>
        </div>
      )}
    </div>
  );
}

export default Hero;
