import React from "react"
import Heading from "../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Explore our latest selection of stunning properties, meticulously curated to suit every lifestyle Whether you are seeking a cozy apartment a luxurious villa or a modern office space, we have the perfect match for you. With prime locations, unbeatable prices, and top-notch amenities, our recent listings are designed to provide comfort, convenience, and elegance. Dont miss out on the opportunity to own or rent your dream property—browse now and take the first step towards your ideal home or workspace.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent