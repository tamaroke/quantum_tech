"use client";
import React, { useState, useEffect, useRef } from "react";

// Define TypeScript interfaces
interface PortfolioItemDetails {
  fullDescription: string;
  technologies: string[];
  features: string[];
  duration: string;
  client: string;
  images: string[];
}

interface PortfolioItem {
  title: string;
  description: string;
  color: string;
  textColor: string;
  shadowColor: string;
  details: PortfolioItemDetails;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "IoT Smart Lighting System",
    description:
      "A smart lighting solution using microcontrollers and mobile control.",
    color: "from-blue-500 to-cyan-400",
    textColor: "text-blue-900",
    shadowColor: "shadow-blue-200",
    details: {
      fullDescription:
        "A comprehensive IoT-based lighting system that allows users to control lights remotely through a mobile application. The system includes motion sensors for automatic activation and scheduled lighting patterns.",
      technologies: ["Arduino", "ESP8266", "React Native", "Firebase"],
      features: [
        "Remote control via mobile app",
        "Motion-activated lighting",
        "Customizable lighting schedules",
        "Energy usage analytics",
        "Voice control integration",
      ],
      duration: "3 months",
      client: "Residential smart home project",
      images: ["/images/iot-lighting-1.jpg", "/images/iot-lighting-2.jpg"],
    },
  },
  // Other portfolio items remain the same...
  {
    title: "Custom PC Build & Repair",
    description:
      "Built and optimized gaming and business machines for clients.",
    color: "from-purple-500 to-pink-400",
    textColor: "text-purple-900",
    shadowColor: "shadow-purple-200",
    details: {
      fullDescription:
        "Specialized service for building custom PCs tailored to specific needs, from high-performance gaming rigs to reliable business workstations. Also provides diagnostics and repair services for existing systems.",
      technologies: [
        "Custom PC Hardware",
        "Windows/Linux OS",
        "Overclocking",
        "System Optimization",
      ],
      features: [
        "Custom component selection",
        "Performance optimization",
        "Thermal management solutions",
        "Software configuration",
        "Troubleshooting and repair",
      ],
      duration: "Ongoing service",
      client: "Various individual and business clients",
      images: ["/images/custom-pc-1.jpg", "/images/custom-pc-2.jpg"],
    },
  },
  {
    title: "School Management System",
    description:
      "Web-based system for managing student data, grading, and attendance.",
    color: "from-green-500 to-emerald-400",
    textColor: "text-green-900",
    shadowColor: "shadow-green-200",
    details: {
      fullDescription:
        "A comprehensive web-based school management system that handles student records, attendance tracking, grade management, and communication between teachers, students, and parents.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT Authentication",
      ],
      features: [
        "Student information management",
        "Attendance tracking",
        "Grade and assessment recording",
        "Parent-teacher communication portal",
        "Assignment submission and tracking",
      ],
      duration: "6 months",
      client: "Local private high school",
      images: ["/images/school-system-1.jpg", "/images/school-system-2.jpg"],
    },
  },
  {
    title: "Electronics PCB Design",
    description:
      "Designed and fabricated custom PCBs for client-specific applications.",
    color: "from-amber-500 to-yellow-400",
    textColor: "text-amber-900",
    shadowColor: "shadow-amber-200",
    details: {
      fullDescription:
        "Professional design and fabrication of printed circuit boards for various electronic applications. Services include schematic design, PCB layout, prototyping, and small-batch production.",
      technologies: [
        "Eagle CAD",
        "KiCad",
        "SMD Assembly",
        "Through-hole Technology",
      ],
      features: [
        "Custom schematic design",
        "Multi-layer PCB layouts",
        "Component sourcing",
        "Prototype testing",
        "Small-batch manufacturing",
      ],
      duration: "Varies by project",
      client: "Electronics startups and hobbyists",
      images: ["/images/pcb-design-1.jpg", "/images/pcb-design-2.jpg"],
    },
  },
  {
    title: "Inventory App",
    description: "A mobile app for small business inventory tracking.",
    color: "from-rose-500 to-red-400",
    textColor: "text-rose-900",
    shadowColor: "shadow-rose-200",
    details: {
      fullDescription:
        "A cross-platform mobile application that helps small businesses track their inventory in real-time. Features include barcode scanning, stock alerts, sales reporting, and supplier management.",
      technologies: ["React Native", "Firebase", "Expo", "Redux"],
      features: [
        "Barcode and QR code scanning",
        "Inventory level tracking",
        "Low stock notifications",
        "Sales and inventory reporting",
        "Supplier contact management",
      ],
      duration: "4 months",
      client: "Local retail businesses",
      images: ["/images/inventory-app-1.jpg", "/images/inventory-app-2.jpg"],
    },
  },
];

interface DetailModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Handle clicking outside the modal
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Handle browser back button
    const handlePopState = (event: PopStateEvent) => {
      onClose();
      // Prevent default only if needed to avoid breaking other browser functionality
      event.preventDefault();
    };

    // Handle escape key press
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);

    // Push a new history state to handle back button
    if (item) {
      window.history.pushState({ modalOpen: true }, "");
    }

    // Clean up event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose, item]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 backdrop-blur-sm transition-all duration-300">
      <div
        ref={modalRef}
        className="bg-gray-50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        <div className={`p-6 rounded-t-2xl bg-gradient-to-r ${item.color}`}>
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-white">{item.title}</h2>
            <button
              onClick={onClose}
              className="bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100">
          <p className="text-gray-700 mb-6">{item.details.fullDescription}</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {item.details.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white rounded-full text-sm text-gray-700 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Project Details</h3>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p>
                  <span className="font-medium">Duration:</span>{" "}
                  {item.details.duration}
                </p>
                <p>
                  <span className="font-medium">Client:</span>{" "}
                  {item.details.client}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5 space-y-1 bg-white p-4 rounded-lg shadow-sm">
              {item.details.features.map((feature, index) => (
                <li key={index} className="text-gray-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {item.details.images.map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg aspect-video flex items-center justify-center shadow-sm p-2"
              >
                <p className="text-gray-500 text-sm">
                  Image placeholder: {image.split("/").pop()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const openDetails = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeDetails = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  // Handle browser back button if modal is open
  useEffect(() => {
    const handlePopState = () => {
      if (selectedItem) {
        closeDetails();
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedItem]);

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
                <button
                  onClick={() => openDetails(item)}
                  className="px-4 py-2 rounded-lg bg-white text-sm font-medium border border-gray-200 hover:bg-gray-50 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <DetailModal item={selectedItem} onClose={closeDetails} />
      )}
    </main>
  );
};

export default PortfolioPage;
