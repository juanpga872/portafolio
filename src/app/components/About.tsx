import Image from 'next/image';
import React from 'react';

export default function About() {
    return (
        <div >
            <section id="about" className="p-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
                    <Image 
                        src="/images/yo.jpeg" 
                        alt="Your Photo" 
                        width={400} // Ancho de la imagen
                        height={400} // Alto de la imagen
                        className="rounded-full w-80 h-80 mb-52 md:mb-0 md:mr-52" 
                    />
                    <div>
                        <h2 className="text-3xl font-bold mb-4">About Me</h2>
                        <p className="text-gray-600">
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

