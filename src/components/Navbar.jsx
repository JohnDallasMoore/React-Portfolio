import React, { Dispatch, SetStateAction } from 'react';


function Navbar({setDisplayState}) {
  return (
    <div className="Navbar">
        <button onClick>Home</button>
        <button>About</button>
        <button>Projects</button>
        <button>Contact</button>
    </div>
  );
}

export default Navbar;