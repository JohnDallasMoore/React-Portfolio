import React, { Dispatch, SetStateAction } from 'react';
import Logo from "../images/logo.svg"


function Navbar({setDisplayState}) {
  return (
    // <div className="Navbar">
    //     <button onClick={() => setDisplayState('')}>Home</button>
    //     <button onClick={() => setDisplayState('about')}>About</button>
    //     <button onClick={() => setDisplayState('projects')}>Projects</button>
    //     <button onClick={() => setDisplayState('contact')}>Contact</button>
    // </div>
    <nav class="bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={Logo} class="h-14 mr-3" alt="Coding Logo"></img>
          
      {/* <a href="#home" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white"></span>
      </a> */}
      <div class="flex md:order-2">
          <a href="./images/Resume - John Dallas Moore.pdf" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              Resume
          </a>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-900 border-gray-700">
          <li>
          <a href="#home" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500" aria-current="page">Home</a>
          </li>
          <li>
          <a href="#about" class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0  text-white hover:bg-gray-700 hover:text-blue-700 border-gray-700">About</a>
          </li>
          <li>
          <a href="#projects" class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0  text-white hover:bg-gray-700 hover:text-blue-700 border-gray-700">Projects</a>
          </li>
          <li>
          <a href="#contact" class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0  text-white hover:bg-gray-700 hover:text-blue-700 border-gray-700">Contact</a>
          </li>
      </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;