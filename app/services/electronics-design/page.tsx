import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Electronics Design Services | Your Company",
  description:
    "Custom electronics design and development services. From concept to prototype and production, we create innovative electronic solutions for your unique needs.",
  keywords:
    "electronics design, circuit design, PCB layout, prototype development, electronic engineering",
  openGraph: {
    title: "Electronics Design Services | Your Company",
    description:
      "Custom electronics design and development from concept to production.",
    images: ["/images/electronics-design.jpg"],
  },
};

export default function ElectronicsDesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 text-sm">
          <Link href="/" className="hover:text-pink-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#services" className="hover:text-pink-300">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-pink-300">Electronics Design</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row mb-12 gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Electronics Design Services
            </h1>
            <p className="text-xl mb-6">
              Innovative electronic solutions tailored to your specific
              requirements.
            </p>
            <p className="mb-6">
              From concept to production, our team of experienced engineers
              designs custom electronic circuits and systems that solve complex
              problems. We specialize in creating reliable, efficient, and
              cost-effective solutions across various industries.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-semibold">
                  Start Your Project
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="bg-transparent border border-white hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px]">
            {/* Replace with your actual image path */}
            <div className="w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/electronics-design.jpg"
                alt="Electronics Design Services"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Our Electronics Design Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Circuit Design",
                description:
                  "Custom analog and digital circuit design optimized for your specific application.",
                icon: "⚡",
              },
              {
                title: "PCB Layout",
                description:
                  "Professional PCB design with optimal component placement and routing.",
                icon: "🔌",
              },
              {
                title: "Prototype Development",
                description:
                  "Rapid prototyping to test and validate your electronic designs.",
                icon: "🔬",
              },
              {
                title: "Embedded Systems",
                description:
                  "Hardware and firmware design for microcontroller-based systems.",
                icon: "💻",
              },
              {
                title: "Power Electronics",
                description:
                  "Efficient power supply and energy management solutions.",
                icon: "🔋",
              },
              {
                title: "Manufacturing Support",
                description:
                  "Technical assistance during production for quality assurance.",
                icon: "🏭",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{service.icon}</span>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-200">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Design Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Design Process</h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Requirements Analysis
                </h3>
                <p>
                  We thoroughly discuss your needs, constraints, and objectives
                  to define clear project requirements.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Conceptual Design</h3>
                <p>
                  Our engineers develop the initial design concept with block
                  diagrams and system architecture.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Schematic Design</h3>
                <p>
                  Detailed circuit schematics are created with component
                  selection optimized for performance and cost.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">PCB Layout</h3>
                <p>
                  Components are arranged and connections routed to ensure
                  signal integrity and manufacturability.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Prototyping</h3>
                <p>
                  Functional prototypes are built and tested to validate the
                  design and identify improvements.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Testing & Refinement</h3>
                <p>
                  Rigorous testing ensures functionality, reliability, and
                  compliance with all requirements.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                7
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Production Support</h3>
                <p>
                  We provide documentation and technical assistance for
                  manufacturing and assembly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Consumer Electronics", icon: "📱" },
              { name: "Industrial Automation", icon: "🏭" },
              { name: "Medical Devices", icon: "🩺" },
              { name: "Automotive", icon: "🚗" },
              { name: "IoT & Smart Devices", icon: "🌐" },
              { name: "Renewable Energy", icon: "☀️" },
              { name: "Telecommunications", icon: "📡" },
              { name: "Aerospace", icon: "🚀" },
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center"
              >
                <div className="text-3xl mb-2">{industry.icon}</div>
                <h3 className="font-bold">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/images/project-1.jpg"
                  alt="Smart Home Controller"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Smart Home Controller
                </h3>
                <p className="mb-4">
                  Custom circuit design for an IoT-enabled home automation
                  system with advanced energy monitoring capabilities.
                </p>
                <Link href="/portfolio/smart-home-controller">
                  <span className="text-pink-300 hover:text-pink-400">
                    View Project Details →
                  </span>
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/images/project-2.jpg"
                  alt="Industrial Sensor Array"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Industrial Sensor Array
                </h3>
                <p className="mb-4">
                  Ruggedized multi-sensor system for harsh industrial
                  environments with wireless data transmission.
                </p>
                <Link href="/portfolio/industrial-sensor-array">
                  <span className="text-pink-300 hover:text-pink-400">
                    View Project Details →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                How long does the electronics design process take?
              </h3>
              <p>
                The timeline varies based on complexity. Simple designs might
                take 4-6 weeks, while complex projects can require 3-6 months
                from concept to final prototype.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Do you handle small-volume production?
              </h3>
              <p>
                Yes, we partner with trusted manufacturing facilities to handle
                prototype runs and small to medium production volumes of your
                electronic designs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                What information do you need to start a design project?
              </h3>
              <p>
                We typically need a clear description of the functionality
                required, any size or power constraints, environmental
                conditions, target cost, and production volume estimates.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Do you help with product certification (FCC, CE, etc.)?
              </h3>
              <p>
                Yes, we design with certification requirements in mind and can
                provide guidance and technical documentation to support the
                certification process.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to bring your electronics project to life?
          </h2>
          <p className="text-xl mb-6">
            Contact us today to discuss your custom electronics design needs.
          </p>
          <Link href="/contact">
            <button className="bg-white text-purple-700 hover:bg-gray-100 py-3 px-8 rounded-lg font-bold text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
