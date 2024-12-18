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
                <a href="https://pawhome.vercel.app/" className="text-blue-500 hover:underline">View Project</a>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img src="/images/projects/FairTour.PNG" alt="Project 2" className="w-full h-48 object-cover transition duration-300 hover:opacity-90" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Fair Tour</h3>
                <p className="text-gray-600 mb-4">Pagina web para la promocionar y facilitar tours de viajes en colombia para extrangeros de manera segura</p>
                <a href="#" className="text-blue-500 hover:underline">View Project</a>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img src="/images/projects/x.png" alt="Project 3" className="w-full h-48 object-cover transition duration-300 hover:opacity-90" />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2"> X </h3>
                <p className="text-gray-600 mb-4">Proyecto que simula la navegacion de la aplicacion X twiter en flutter</p>
                <a href="https://github.com/juanpga872/proyecto-x" className="text-blue-500 hover:underline">View Project</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

