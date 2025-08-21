import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black w-full px-4 py-3 md:px-6 md:py-4 border-b border-green-400">
      <div className="flex items-center justify-between">
        {/* Left side - Name and title */}
        <div className="flex flex-col">
          <h1 className="text-green-400 text-lg md:text-2xl font-bold font-mono">
            Sarvesh Bhanarkar
          </h1>
          <p className="text-gray-400 text-xs md:text-base font-mono">
            Student/Developer
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;