import React, { useState } from "react";
import "./header.css";
import { nav } from "../data/Data";
import { Link } from "react-router-dom";
import { useCart } from "../cart/CartContext";

const Header = () => {
  const [navList, setNavList] = useState(false);

  const { cartItems } = useCart();

  return (
    <header>
      <div className='container flex'>
        <div className='logo'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_K8-SMC2QSSJi79CBlN53TCCINsL45f69AA&s'
            alt='logo'
          />
        </div>
        <div className='nav'>
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='button flex'>
          <Link to="/cart">
            <button className='btn1'>
              <i className='fa fa-shopping-cart'></i> Cart ({cartItems.length})
            </button>
          </Link>
        </div>
        <div className='toggle'>
          <button onClick={() => setNavList(!navList)}>
            {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;