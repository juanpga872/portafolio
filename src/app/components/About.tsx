import Image from 'next/image';
import React from 'react';

export default function About() {
    return (
        <div>
            <section id="about" className="p-8 md:p-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                    {/* Contenedor padre responsivo */}
                    <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-8 md:mb-0 md:mr-8 flex-shrink-0">
                        <Image
                            src="/images/yo.jpeg"
                            alt="Your Photo"
                            fill
                            sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 25vw"
                            style={{ objectFit: 'cover', borderRadius: '50%' }}
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center md:text-left">
                            About Me
                        </h2>
                        <p className="text-gray-600 text-center md:text-left">
                            Soy un desarrollador de software junior con experiencia en React.js,
                            TypeScript y otras tecnologías web. Me apasiona crear interfaces intuitivas y eficientes,
                            y valoro el trabajo en equipo, la responsabilidad y la adaptación al cambio. Poseo un enfoque proactivo y detallista, y estoy comprometido con la entrega de soluciones de calidad. 
                            Cuento con un nivel básico de inglés, lo que me permite acceder a documentación técnica y colaborar en equipos multiculturales. 
                            Busco seguir creciendo profesionalmente y contribuir al éxito de los proyectos en los que participe.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}




