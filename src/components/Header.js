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
  return (
    <div className="">
      <div className="flex justify-between border border-solid black">
        <div className="">
          <Link to="/home">
            <img className="w-44 ml-12" src={LOGO_URL} />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex ">
            <li className="pr-16">
              <Link to="/about">
                <div className="flex ">
                  <img className="w-6" src={ABOUT_LOGO}></img>
                  <span className="pl-3">About us</span>
                </div>
              </Link>
            </li>
            <li className="pr-16">
              <Link to="/contact">
                <div className="flex">
                  <img className="w-6" src={CONTACT_LOGO}></img>
                  <span className="pl-3">Contact</span>
                </div>
              </Link>
            </li>
            <li className="pr-16">
              <Link to="/cart">
                <div className="flex">
                  <img className="w-6" src={LOGIN_ICON}></img>
                  <span className="pl-3">Login</span>
                </div>
              </Link>
            </li>
            <li className="pr-24">
              <Link to="/cart">
                <div className="flex">
                  <img className="w-6" src={CART_ICON}></img>
                  <span className="pl-3">Cart</span>{" "}
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
