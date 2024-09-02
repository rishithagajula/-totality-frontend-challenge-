import React, { useState } from "react";
import Heading from "../common/Heading";
import "./hero.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Hero = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ location, propertyType, priceRange });
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Find Your Perfect Space"
            subtitle="Discover a wide range of rental properties tailored to your needs"
          />
          <form className="flex" onSubmit={handleSearch}>
            <div className="box">
              <span>City/Street</span>
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="box">
              <span>Property Type</span>
              <input
                type="text"
                placeholder="Property Type"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input
                type="text"
                placeholder="Price Range"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              />
            </div>
            <div className="box">
              <h4>Advance Filter</h4>
            </div>
            <button className="btn1" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
