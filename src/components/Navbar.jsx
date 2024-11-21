import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">redux-store</Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/cart">
            cart <sup>{cartItems.length}</sup>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
