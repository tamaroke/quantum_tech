import React from "react";

const portfolioItems = [
  {
    title: "IoT Smart Lighting System",
    description:
      "A smart lighting solution using microcontrollers and mobile control.",
  },
  {
    title: "Custom PC Build & Repair",
    description:
      "Built and optimized gaming and business machines for clients.",
  },
  {
    title: "School Management System",
    description:
      "Web-based system for managing student data, grading, and attendance.",
  },
  {
    title: "Electronics PCB Design",
    description:
      "Designed and fabricated custom PCBs for client-specific applications.",
  },
  {
    title: "Inventory App",
    description: "A mobile app for small business inventory tracking.",
  },
];

const PortfolioPage = () => {
  return (
    <main className="min-h-screen px-6 py-20 bg-gray-50 text-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our Projects & Portfolio
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PortfolioPage;
