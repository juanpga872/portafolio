import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/img1.jpg")' }}>
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fadeIn delay-2s">
          I'm Juan Pablo, a passionate developer
        </p>

        <a
          href="#about"
          className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700 transition duration-300 ease-in-out animate-fadeIn delay-3s"
        >
          Learn More
        </a>
      </div>
    </header>
  );
};

export default Header;
