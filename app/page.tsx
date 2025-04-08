"use client";

import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to Quantum Tech
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl">
          Innovating the Future — IT Solutions, Electronics, IoT, and More.
        </p>
        <a
          href="#services"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Explore Services
        </a>
      </section>

      <section id="services" className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            "Software Installation",
            "Computer Repair & Servicing",
            "Electronics Design",
            "IoT Solutions",
            "Web Development",
            "App Development",
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600 text-sm">
                {`High-quality ${service.toLowerCase()} tailored to your needs.`}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
