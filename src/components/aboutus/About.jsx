import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover="https://raw.githubusercontent.com/sunil9813/Real-estate-website/bd0611d251f80042a8b27279088b53ba3883d6d1/src/components/images/about.jpg" />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
            <p>Ease of Use: "Easily browse, find, and rent properties with just a few taps. Our user-friendly interface makes finding your next home effortless."
            <br/>Wide Selection: "Access a vast range of properties, from cozy apartments to spacious family homes, villa, office and studios. Whatever you're looking for, you'll find it here."
            <br/>Advanced Filters: "Refine your search with advanced filters to find the perfect property that meets your needs and budget."
            <br/>Secure Transactions: "Enjoy peace of mind with secure payment options and verified listings, ensuring a safe and reliable rental experience."
            <br/>24/7 Support: "Get round-the-clock support for any queries or issues, making your rental experience smooth and hassle-free."</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdF4SJNqEvPm681VKDhfOyHdsha9TD0oY0hA&s' alt='About Us' />
          </div>
        </div>
      </section>
    </>
  )
}
export default About