import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../images/logo.svg";
import arrow_down from "../images/arrow-down.svg";
import "../css/header.css";
import Burger from "../components/Burger";
import { useDispatch } from "react-redux";
import { getCurrentUrlName} from "../utils/prevPage";

function Header() {
  const dispatch = useDispatch();
  const current_url = useLocation()
  
  function getUrl(e) {
    dispatch(getCurrentUrlName(e.target.textContent));

  }

  function closeChildLink(e) {
    document.querySelector(".child-link").classList.remove("db");
    document.querySelector(".parent-link").classList.add("active");

    getUrl(e);
  }
  function removeStopScrolling() {
    document.querySelector('body').classList.remove('stopScrolling')
    const burger = document.querySelector(".burger");
    burger.classList.remove("activ");
  }

  return (
    <header>
      <div className="container ">
        <div className= {current_url.pathname === "/" ? 'home-navbar': "navbar"} >
          {current_url.pathname !== "/" && 
         <div className="logo">
          <NavLink to="/" className="logo__link">
            <img loading="lazy" src={Logo} alt="Logo"/>
          </NavLink> 
        </div> }

        <ul className="nav">
          <li className="nav__item">
            <NavLink onClick={getUrl} className="nav__link" to="/">
              Home
            </NavLink>{" "}
          </li>
          <li className="nav__item">
            <NavLink onClick={getUrl} className="nav__link" to="/about">
              About Us
            </NavLink>{" "}
          </li>
          <li className="nav__item">
            <NavLink onClick={getUrl} className="nav__link" to="/self-service">
              Self Service
            </NavLink>{" "}
          </li>
          <li className="nav__item">
            <NavLink onClick={getUrl} className="nav__link" to="/wash-fold">
              Wash & Fold
            </NavLink>{" "}
          </li>
          <li className="nav__item parent-item">
            <NavLink
              onClick={getUrl}
              className="nav__link parent-link"
              to="/pickup-and-delivery"
            >
              Pickup & Delivery
            </NavLink>
            <img className= {current_url.pathname === "/" ? 'home-arrow_down': "arrow_down"}  src={arrow_down} alt="arrow down" />
            <ul className="child-link">
              <li className="nav__item">
                <NavLink
                  onClick={closeChildLink}
                  className="nav__link"
                  to="/commercial-laundry"
                >
                  Commercial Laundry Services
                </NavLink>
              </li>
            </ul>
          </li>
          {/* <li className="nav__item">
            <NavLink onClick={getUrl} className="nav__link" to="/pricing">
              Pricing
            </NavLink>
          </li> */}
          <li className="nav__item">
            <NavLink onClick={getUrl} className="nav__link" to="/contact">
              Contact us
            </NavLink>
          </li>
        </ul>

        <Burger />
        <ul className="nav--mobile">
          <li className="nav__item">
            <NavLink onClick = {removeStopScrolling} className="nav__link nav__link--mobile" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink onClick = {removeStopScrolling} className="nav__link nav__link--mobile" to="/about">
              About Us
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink onClick = {removeStopScrolling} className="nav__link nav__link--mobile" to="/self-service">
              Self Service
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink onClick = {removeStopScrolling} className="nav__link nav__link--mobile" to="/wash-fold">
              Wash & Fold
            </NavLink>
          </li>
          <li className="nav__item ">
            <NavLink onClick = {removeStopScrolling}
              className="nav__link nav__link--mobile "
              to="/pickup-and-delivery"
            >
              Pickup & Delivery
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink onClick = {removeStopScrolling}
              className="nav__link nav__link--mobile"
              to="/commercial-laundry"
            >
              Commercial Laundry Services
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink onClick = {removeStopScrolling} className="nav__link nav__link--mobile" to="/pricing">
              Pricing
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink onClick = {removeStopScrolling} className="nav__link nav__link--mobile" to="/contact">
              Contact us
            </NavLink>
          </li>
        </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
