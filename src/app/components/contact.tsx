"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();

        emailjs
            .send(
                'service_g3cnvf6', // Service ID
                'template_9wgfuj6', // Template ID
                formData,
                'f1F2MVKHMdI_1HdQR' // Public Key
            )
            .then(
                (result) => {
                    alert('Mensaje enviado con éxito.');
                    setFormData({ name: '', email: '', message: '' }); // Limpia el formulario
                },
                (error) => {
                    alert('Hubo un error al enviar el mensaje, inténtalo de nuevo.');
                }
            );
    };

    return (
        <div id="contact">
            <section id="contact" className="p-32 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
                    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg"
                            placeholder="Your Email"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-lg"
                            placeholder="Your Message"
                            required
                        />
                        <button type="submit" className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

