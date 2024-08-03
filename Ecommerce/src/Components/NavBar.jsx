import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-violet-400 p-4">
      <div className="container mx-auto ">
        <div className="text-white font-bold text-xl ">
          <img className=" inline  "  />
          YourLogo
        </div>
        <div className="flex justify-center  space-x-10">
          <a href="/" className="text-white">Home</a>
        <Link to='/cart'>Cart</Link>
          <a href="/about" className="text-white">About</a>
          <a href="/contact" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
