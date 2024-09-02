import React from "react";
import Header from "../header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Footer from "../footer/Footer";
import About from "../aboutus/About";
import Blog from "../blog/Blog";
import Cart from "../cart/Cart";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import { CartProvider } from "../cart/CartContext"; 

const Pages = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default Pages;
