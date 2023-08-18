import React, { Dispatch, SetStateAction } from 'react';
import Logo from "../images/logo.svg"


function Navbar({setDisplayState}) {
  return (
    
    <nav className="bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={Logo} className="h-14 mr-3" alt="Coding Logo"></img>
        <div className="flex md:order-2">
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                Resume
            </button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-900 border-gray-700">
              <li>
              <button onClick={() => setDisplayState('')} className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0  text-white hover:bg-gray-700 hover:text-blue-700 border-gray-700" aria-current="page">Home</button>
              </li>
              <li>
              <button onClick={() => setDisplayState('about')} className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0  text-white hover:bg-gray-700 hover:text-blue-700 border-gray-700">About</button>
              </li>
              <li>
              <button onClick={() => setDisplayState('projects')} className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0  text-white hover:bg-gray-700 hover:text-blue-700 border-gray-700">Projects</button>
              </li>
              <li>
              <button onClick={() => setDisplayState('contact')} className="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0  text-white hover:bg-gray-700 hover:text-blue-700 border-gray-700">Contact</button>
              </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;