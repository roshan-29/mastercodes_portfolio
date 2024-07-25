
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-black font-bold mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-3xl">
           MASTER/CODES
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-7 text-green-500 hover:text-white font-bold text-2xl ">
  Past Work
</a>
<a href="#skills" className="mr-8 text-green-500 hover:text-white font-bold  text-2xl">
  Skills
</a>
<a href="#testimonials" className="mr-8 text-green-500 hover:text-white font-bold text-2xl">
  Works
</a>
<a href="#testimonials" className="mr-8 text-green-500 hover:text-white  font-bold text-2xl">
  Message Me!
</a>
         
        </nav>
        <a
          href="https://www.linkedin.com/in/roshan-kulal-284988209/"
          className="inline-flex items-center bg-black-800 border-0 py-1 px-6 font-bold focus:outline-none hover:bg-green-700 rounded text-base mt-4 text-2xl md:mt-0">
          
          <ArrowRightIcon className="w-4 h-4 ml-1 bold"  />
My linkedin
        </a>
      </div>
    </header>
  );
}