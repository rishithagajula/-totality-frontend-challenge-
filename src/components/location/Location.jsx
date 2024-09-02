import React from "react"
import Heading from "../common/Heading"
import { location } from "../data/Data"
import "./style.css"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Explore By Location' subtitle='Discover the vibrant city, a perfect blend of rich history and contemporary lifestyle. From luxurious apartments to serene villas,office and studio our properties in the city offer something for everyone. Nestled in prime locations with easy access to cultural landmarks, bustling markets, and world-class amenities, your ideal home or investment opportunity awaits in this dynamic city. Explore today and experience the best of both worlds-heritage and modernity' />
            <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.Apartments}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location