import React from 'react'

export default function Contact() {
    return (
        <div id='contact'>
            <section id='contact' className="p-32 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
                    <form className="max-w-lg mx-auto space-y-6">
                        <input type="text" className="w-full p-4 border border-gray-300 rounded-lg" placeholder="Your Name" required />
                        <input type="email" className="w-full p-4 border border-gray-300 rounded-lg" placeholder="Your Email" required />
                        <textarea className="w-full p-4 border border-gray-300 rounded-lg" placeholder="Your Message" required />
                        <button type="submit" className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
