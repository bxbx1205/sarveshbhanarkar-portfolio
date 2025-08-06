import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black w-full px-4 py-4 md:px-6 md:py-6 border-b border-green-400">
      <div className="flex items-center justify-between">
        {/* Left side - Name and title */}
        <div className="flex flex-col">
          <h1 className="text-green-400 text-xl md:text-2xl font-bold font-mono">
            Sarvesh Bhanarkar
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-mono">
            Student/Developer
          </p>
        </div>
        
        {/* Right side - Icon */}
        {/* <div className="flex items-center">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-teal-400 rounded flex items-center justify-center">
            <svg 
              className="w-4 h-4 md:w-5 md:h-5 text-black" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z"/>
            </svg>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;