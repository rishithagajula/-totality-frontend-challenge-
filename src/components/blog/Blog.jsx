import React from "react";
import Back from "../common/Back";
import RecentCard from "../recent/RecentCard";
import "../recent/recent.css";
import { CartProvider } from "../cart/CartContext";

const Blog = () => {
  return (
    <CartProvider>
      <section className='blog-out mb'>
        <Back
          name='Blog'
          title='Blog Grid - Our Blogs'
          cover="https://raw.githubusercontent.com/sunil9813/Real-estate-website/bd0611d251f80042a8b27279088b53ba3883d6d1/src/components/images/about.jpg"
        />
        <div className='container recent'>
          <RecentCard />
        </div>
      </section>
    </CartProvider>
  );
};
export default Blog;