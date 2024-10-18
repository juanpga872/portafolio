import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'JavaScript', level: 65, icon: '/images/skills/javascript.svg' },
    { name: 'React', level: 60, icon: '/images/skills/react.svg' },
    { name: 'Next.js', level: 70, icon: '/images/skills/next.svg' },
    { name: 'TypeScript', level: 75, icon: '/images/skills/typescript.svg' },
    { name: 'CSS', level: 60, icon: '/images/skills/css.svg' },
    { name: 'HTML', level: 50, icon: '/images/skills/html.svg' },
    { name: 'Python', level: 30, icon: '/images/skills/python.svg' },
  ];

  return (
    <div>
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>
          <div className="space-y-8">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center space-x-6">
                {/* Icono SVG */}
                <img src={skill.icon} alt={skill.name} className="h-12 w-auto" />

                {/* Información de la habilidad */}
                <div className="w-full">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  
                  {/* Barra de progreso */}
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                    <div
                      className="bg-blue-500 h-4 rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        transition: 'width 2s ease-in-out',
                      }}
                    ></div>
                  </div>

                  {/* Porcentaje */}
                  <p className="text-sm text-gray-600">{skill.level}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


