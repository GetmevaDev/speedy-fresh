import React from "react";
import { Link, NavLink } from "react-router-dom";
import RGM from "../images/RGM.svg";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/about">
            About Us
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/self-service">
            Self Service
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/wash-fold">
            Wash & Fold
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/pickup-and-delivery">
            Pickup & Delivery
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/commercial-laundry">
            Commercial Loundry
          </NavLink>
        </li>
        {/* <li className="nav__item">
          <NavLink className="nav__link" to="/pricing">
            Pricing
          </NavLink>
        </li> */}
        <li className="nav__item">
          <NavLink className="nav__link" to="/contact">
            Contact us
          </NavLink>
        </li>
      </ul>

      <div className="footer__rights">
        <div className="container footer__rights-wrapper">
          <p>
            © 2023 <span>Speedy Fresh Laundromat</span> All rights reserved
          </p>
          <div className="footer__logo">
            <div className="footer__logo-wrapper">
            <img loading="lazy" src={RGM} alt="rgm" />
            <p>
              Web Design & Digital Marketing by
              <a href="https://robertgerov.com/" className="rgm">
                Robert Gerov Media
              </a>
            </p>
            </div>
            
            <Link className="accessibility-policy" to='/accessibility-policy-and-commitment-statement'>Accessibility Policy and Commitment Statement</Link>
          </div>
        </div>
      </div>

      <meta property="og:locale" content="en_US" />

      <meta property="og:site_name" content="Speedy Fresh Laundry Service" />

      <meta property="og:type" content="website" />

      <meta
        property="og:title"
        content="Speedy Fresh: Professional Laundry Service in Brooklyn, NY: Wash and Fold, Laundry Pick Up and Delivery Service."
      />

      <meta
        property="og:description"
        content="Professional Laundry Pick Up and Delivery Service, wash and fold: new Laundromats at Speedy Fresh Laundry, quick and top-quality service for same day and next day laundry"
      />

      <meta property="og:url" content="Speedy Fresh Laundromat " />

      <meta
        property="og:image"
        content="https://speedyfreshlaundromat.com/static/media/logo.8780194d.svg"
      />

      <meta
        property="og:image:secure_url"
        content="https://speedyfreshlaundromat.com/static/media/logo.8780194d.svg"
      />
    </footer>
  );
}

export default Footer;
