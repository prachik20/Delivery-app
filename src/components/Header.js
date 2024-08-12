import { useEffect } from "react";
import {
  LOGO_URL,
  CART_ICON,
  LOGIN_ICON,
  CONTACT_LOGO,
  ABOUT_LOGO,
} from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    console.log("useEffect rendered");
  });

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/home">
            <img className="logo" src={LOGO_URL} />
          </Link>
        </div>
        <div className="nav-container">
          <ul>
            <li>
              <Link to="/about">
                <div className="nav-item">
                  <img className="about-icon" src={ABOUT_LOGO}></img>
                  <span className="nav-item-name">About us</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <div className="nav-item">
                  <img className="contact-icon" src={CONTACT_LOGO}></img>
                  <span className="nav-item-name">Contact</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <div className="nav-item">
                  <img className="login-icon" src={LOGIN_ICON}></img>
                  <span className="nav-item-name">Login</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <div className="nav-item">
                  <img className="cart-icon" src={CART_ICON}></img>
                  <span className="nav-item-name">Cart</span>{" "}
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
