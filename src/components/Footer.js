import { NavLink } from "react-router-dom";
import RGM from "../images/RGM.svg";
import "../css/footer.css";


function Footer() {

  return (
    <div className="footer">
      <ul className="footer__nav">
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>{" "}
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/about">
            About Us
          </NavLink>{" "}
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/self-service">
            Self Service
          </NavLink>{" "}
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
          <img src={RGM} alt="rgm" />
          <p>Web Design & Digital Marketing by <span className="rgm">Robert Gerov Media</span> </p>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
