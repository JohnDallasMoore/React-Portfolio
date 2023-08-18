import React, { Dispatch, SetStateAction } from 'react';
import Logo from "../images/logo.svg"


function Footer({setDisplayState}) {
  return (
    
    <nav className="bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={Logo} className="h-14 mr-3" alt="Coding Logo"></img>
        <div className="flex md:order-2">
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
        
      </div>
    </nav>
  );
}

export default Footer;