import "../index.css";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <section className="bg-gradient-to-b from-white to-blue-200">
      <Navbar />
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h1 className="text-3xl font-extrabold text-black sm:text-4xl">
              ABOUT US
            </h1>
            <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
              Balai Finder
            </h1>
            <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
              Finder Balai
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              non deserunt eligendi illo ut! Minima dignissimos, aspernatur,
              quod cupiditate, nobis recusandae sint nostrum maiores commodi
              magni deserunt. Nulla, quasi est?
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-16">
          <div className="order-2 md:order-1 md:text-right">
            <h1 className="text-3xl font-extrabold text-black sm:text-4xl">
              ABOUT US
            </h1>
            <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
              Balai Finder
            </h1>
            <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
              Finder Balai
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              non deserunt eligendi illo ut! Minima dignissimos, aspernatur,
              quod cupiditate, nobis recusandae sint nostrum maiores commodi
              magni deserunt. Nulla, quasi est?
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-16">
          <div className="order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <h1 className="text-3xl font-extrabold text-black sm:text-4xl">
              ABOUT US
            </h1>
            <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
              Balai Finder
            </h1>
            <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
              Finder Balai
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              non deserunt eligendi illo ut! Minima dignissimos, aspernatur,
              quod cupiditate, nobis recusandae sint nostrum maiores commodi
              magni deserunt. Nulla, quasi est?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
export default About;
