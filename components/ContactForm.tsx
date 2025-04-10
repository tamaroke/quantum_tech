// components/ContactForm.tsx
import React from "react";

const ContactForm = () => {
  return (
    <section className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">
        Contact Us
      </h1>
      <p className="text-lg text-center mb-10">
        Fill out the form below or email us directly at{" "}
        <a
          href="mailto:your-email@gmail.com"
          className="text-indigo-600 font-semibold"
        >
          oigarak@gmail.com
        </a>
      </p>

      <form className="grid grid-cols-1 gap-6">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>Select Service Type</option>
          <option>Software Installation</option>
          <option>Computer Repair</option>
          <option>IoT Development</option>
          <option>Web/App Development</option>
          <option>Electronics Design</option>
        </select>
        <textarea
          rows={5}
          placeholder="Your Message"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
