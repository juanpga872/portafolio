"use client"
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!form.current) return;

        emailjs
            .sendForm(
                'service_g3cnvf6', // Reemplaza con tu Service ID
                'template_9wgfuj6', // Reemplaza con tu Template ID
                form.current,
                'f1F2MVKHMdI_1HdQR' // Reemplaza con tu Public Key
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert('Message sent successfully!');
                },
                (error) => {
                    console.log(error.text);
                    alert('An error occurred, please try again.');
                }
            );
    };

    return (
        <div id="contact">
            <section id="contact" className="p-32 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
                    <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-6">
                        <input
                            type="text"
                            name="user_name"
                            className="w-full p-4 border border-gray-300 rounded-lg"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="user_email"
                            className="w-full p-4 border border-gray-300 rounded-lg"
                            placeholder="Your Email"
                            required
                        />
                        <textarea
                            name="message"
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
