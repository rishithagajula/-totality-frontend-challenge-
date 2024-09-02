import React from "react";
import { list } from "../data/Data";
import { useCart } from "../cart/CartContext";

const RecentCard = () => {
  const { addToCart } = useCart();

  return (
    <div className='content grid3 mtop'>
      {list.map((val, index) => {
        const { cover, category, location, name, price, type } = val;
        return (
          <div className='box shadow' key={index}>
            <div className='img'>
              <img src={cover} alt={name} />
            </div>
            <div className='text'>
              <div className='category flex'>
                <span
                  style={{
                    background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                    color: category === "For Sale" ? "#25b579" : "#ff9800",
                  }}
                >
                  {category}
                </span>
              </div>
              <h4>{name}</h4>
              <p>
                <i className='fa fa-location-dot'></i> {location}
              </p>
            </div>
            <div className='button flex'>
              <div>
                <button className='btn4'>{price}</button> 
              </div>
              <span>{type}</span>
              <button className='btn2' onClick={() => addToCart({ ...val, quantity: 1 })}>
                Book Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecentCard;