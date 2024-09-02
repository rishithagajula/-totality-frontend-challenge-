import React from "react"
import Back from "../common/Back"
import "../featured/featured.css"
import FeaturedCard from "../featured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover="https://raw.githubusercontent.com/sunil9813/Real-estate-website/bd0611d251f80042a8b27279088b53ba3883d6d1/src/components/images/services.jpg" />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services