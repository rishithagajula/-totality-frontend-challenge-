import React, { useState } from "react";
import { footer } from "../data/Data";
import "./footer.css";

const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
  };

  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_K8-SMC2QSSJi79CBlN53TCCINsL45f69AA&s' alt='logo' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straight to your inbox every month.</p>
                {!isSubscribed ? (
                <div className='input flex'>
                  <input type='text' placeholder='Email Address' />
                  <button onClick={handleSubscribe}>Subscribe</button>
                </div>
              ) : (
                <p>You are subscribed, and you will get updates.</p>
              )}
            </div>
          </div>

          {footer.map((val, index) => (
            <div className='box' key={index}>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, idx) => (
                  <li key={idx}>{items.list}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© Property Rental Platform. Designed By Rishitha.</span>
      </div>
    </>
  );
};

export default Footer;
