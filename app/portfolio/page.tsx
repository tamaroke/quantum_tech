import React from "react";

const portfolioItems = [
  {
    title: "IoT Smart Lighting System",
    description:
      "A smart lighting solution using microcontrollers and mobile control.",
    color: "from-blue-500 to-cyan-400",
    textColor: "text-blue-900",
    shadowColor: "shadow-blue-200",
  },
  {
    title: "Custom PC Build & Repair",
    description:
      "Built and optimized gaming and business machines for clients.",
    color: "from-purple-500 to-pink-400",
    textColor: "text-purple-900",
    shadowColor: "shadow-purple-200",
  },
  {
    title: "School Management System",
    description:
      "Web-based system for managing student data, grading, and attendance.",
    color: "from-green-500 to-emerald-400",
    textColor: "text-green-900",
    shadowColor: "shadow-green-200",
  },
  {
    title: "Electronics PCB Design",
    description:
      "Designed and fabricated custom PCBs for client-specific applications.",
    color: "from-amber-500 to-yellow-400",
    textColor: "text-amber-900",
    shadowColor: "shadow-amber-200",
  },
  {
    title: "Inventory App",
    description: "A mobile app for small business inventory tracking.",
    color: "from-rose-500 to-red-400",
    textColor: "text-rose-900",
    shadowColor: "shadow-rose-200",
  },
];

const PortfolioPage = () => {
  return (
    <main className="min-h-screen px-6 py-20 bg-gradient-to-br from-stone-50 to-zinc-100 text-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
        Our Projects & Portfolio
      </h1>

      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Explore our diverse range of technical projects and solutions
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${item.color} p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${item.shadowColor}`}
          >
            <div className="bg-white p-6 rounded-xl h-full">
              <h2 className={`text-2xl font-semibold mb-3 ${item.textColor}`}>
                {item.title}
              </h2>
              <p className="text-gray-700">{item.description}</p>
              <div className="mt-4 flex justify-end">
                <button className="px-4 py-2 rounded-lg bg-white text-sm font-medium border border-gray-200 hover:bg-gray-50 transition">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PortfolioPage;
