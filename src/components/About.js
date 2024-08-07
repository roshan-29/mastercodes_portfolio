// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black font-bold">
            Hi, I'm Roshan.
            <br className="hidden lg:inline-block" />I love to build amazing websites.
          </h1>
          <p className="mb-8 leading-relaxed text-green-600 font-bold">
           WELCOME to my Portfolio :>
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/_rosha.nn/"
              className="inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded text-lg">
              connect with me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 hover:text-white rounded text-lg">
              see my past work 
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./rosh.jpg"
          />
        </div>
      </div>
    </section>
  );
}