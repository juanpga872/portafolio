import React from 'react';

export default function Projects() {
  return (
    <div id="projects">
      <section id="projects" className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Tarjeta 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img src="/images/projects/Homepaw.PNG" alt="Project 1" className="w-full h-48 object-cover transition duration-300 hover:opacity-90" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">PawHome</h3>
                <p className="text-gray-600 mb-4">
                  Página web diseñada para facilitar la adopción y apadrinamiento de mascotas, así como la venta de productos para sus amigos peludos.
                </p>
                <a href="#" className="text-blue-500 hover:underline">View Project</a>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img src="/images/projects/FairTour.PNG" alt="Project 2" className="w-full h-48 object-cover transition duration-300 hover:opacity-90" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Fair Tour</h3>
                <p className="text-gray-600 mb-4">Brief description of the project...</p>
                <a href="#" className="text-blue-500 hover:underline">View Project</a>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img src="" alt="Project 3" className="w-full h-48 object-cover transition duration-300 hover:opacity-90" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Project Title</h3>
                <p className="text-gray-600 mb-4">Brief description of the project...</p>
                <a href="#" className="text-blue-500 hover:underline">View Project</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

