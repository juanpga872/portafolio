"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_g3cnvf6", // Reemplaza con tu Service ID
        "template_9wgfuj6", // Reemplaza con tu Template ID
        form.current,
        "f1F2MVKHMdI_1HdQR" // Reemplaza con tu Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div id="contact">
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Feel free to reach out to me for collaborations or any inquiries.
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <input
                type="text"
                name="user_name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="user_email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <textarea
              name="message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows={5}
              required
            />
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
