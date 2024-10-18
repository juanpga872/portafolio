import React from 'react'

export default function Skills() {
    return (
        <div>
            <section id="skills" className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Technical Skills</h2>
                    <div className="flex justify-center space-x-6">
                        <img src="/images/skills/javascript.svg" alt="JavaScript" className="h-12 w-auto" />
                        <img src="/images/skills/react.svg" alt="React" className="h-12 w-auto" />
                        <img src="/images/skills/next.svg" alt="Next.js" className="h-12 w-auto" />
                        <img src="/images/skills/typescript.svg" alt="TypeScript" className="h-12 w-auto" />
                        <img src="/images/skills/css.svg" alt="CSS" className="h-12 w-auto" />
                    </div>
                </div>
            </section>
        </div>
    )
}
