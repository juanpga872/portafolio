import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
         
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Juan <br /> Pablo <br /> Garces</h1>
          </div>

          {/* Navegación */}
          <div className="flex space-x-6">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>

         
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/tu-github" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.165c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.73.084-.73 1.204.085 1.837 1.235 1.837 1.235 1.07 1.834 2.81 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.019.005 2.045.137 3.002.404 2.293-1.552 3.301-1.23 3.301-1.23.652 1.652.24 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.606-2.803 5.624-5.475 5.92.43.371.812 1.102.812 2.222v3.293c0 .32.218.694.825.576C20.565 21.798 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.5c-.966 0-1.5-.756-1.5-1.5s.534-1.5 1.5-1.5 1.5.756 1.5 1.5-.534 1.5-1.5 1.5zm13.5 10.5h-3v-4.5c0-1.104-.895-2-2-2s-2 .896-2 2v4.5h-3v-9h3v1.342c.446-.684 1.574-1.342 2.5-1.342 2.21 0 4 1.79 4 4v5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Juan Pablo Garcés Acevedo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
