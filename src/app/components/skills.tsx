import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', icon: '/images/skills/javascript.svg' },
    { name: 'React', icon: '/images/skills/react.svg' },
    { name: 'Next.js', icon: '/images/skills/next.svg' },
    { name: 'TypeScript', icon: '/images/skills/typescript.svg' },
    { name: 'CSS', icon: '/images/skills/css.svg' },
    { name: 'HTML', icon: '/images/skills/html.svg' },
    { name: 'Python', icon: '/images/skills/python.svg' },
  ];

  return (
    <div>
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center space-y-4 p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
              >
                {/* Icono SVG */}
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-16 w-auto"
                />

                {/* Nombre de la habilidad */}
                <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


