import React from 'react';

const Navbar = () => {
    return (
        
             <header className="flex justify-between items-center p-2 px-24 py-3 bg-white shadow-sm">
      {/* Left Side - Logo */}
      <div className="text-2xl font-bold text-black">
        CareerHub
      </div>

      {/* Middle Links */}
      <nav className="space-x-4">
        <a href="#statistics" className="text-purple-500 hover:text-purple-700">
          Statistics
        </a>
        <a href="#applied-jobs" className="text-gray-500 hover:text-gray-700">
          Applied Jobs
        </a>
        <a href="#blog" className="text-gray-500 hover:text-gray-700">
          Blog
        </a>
      </nav>

      {/* Right Side - Button */}
      <div>
        <button className="bg-gradient-to-r from-purple-400 to-blue-500 px-4 py-3 text-white font-semibold  rounded-lg hover:from-purple-500 hover:to-blue-600 ">
          Start Applying
        </button>
      </div>
    </header>
  );
};
    
    


export default Navbar;