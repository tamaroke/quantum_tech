import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "IoT Solutions | Your Company",
  description:
    "Custom Internet of Things (IoT) solutions for businesses and industries. From smart devices to complete IoT ecosystems, we design and implement connected technology.",
  keywords:
    "IoT solutions, Internet of Things, connected devices, smart devices, IoT implementation, IoT integration",
  openGraph: {
    title: "IoT Solutions | Your Company",
    description:
      "Custom Internet of Things solutions connecting your business to the future.",
    images: ["/images/iot-solutions.jpg"],
  },
};

export default function IoTSolutionsPage() {
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
          <span className="text-pink-300">IoT Solutions</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row mb-12 gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">IoT Solutions</h1>
            <p className="text-xl mb-6">
              Connect your business to the future with smart, integrated IoT
              systems.
            </p>
            <p className="mb-6">
              Our IoT solutions transform how businesses operate by connecting
              devices, gathering valuable data, and providing actionable
              insights. We design, develop, and implement customized IoT systems
              that drive efficiency, improve decision-making, and create new
              opportunities.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-semibold">
                  Discuss Your Project
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="bg-transparent border border-white hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold">
                  View Case Studies
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px]">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/iot-solutions.jpg"
                alt="IoT Solutions"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our IoT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "IoT Strategy & Consulting",
                description:
                  "Expert guidance on implementing IoT technology to achieve your business objectives.",
                icon: "🧠",
              },
              {
                title: "Smart Device Development",
                description:
                  "Custom design and development of connected devices for your specific needs.",
                icon: "📱",
              },
              {
                title: "IoT Platform Integration",
                description:
                  "Seamless integration of IoT devices with cloud platforms and existing systems.",
                icon: "☁️",
              },
              {
                title: "Data Analytics & Insights",
                description:
                  "Converting IoT data into actionable business intelligence and insights.",
                icon: "📊",
              },
              {
                title: "Edge Computing Solutions",
                description:
                  "Processing data closer to the source for faster response and reduced bandwidth.",
                icon: "⚡",
              },
              {
                title: "IoT Security",
                description:
                  "Robust security measures to protect your IoT ecosystem from vulnerabilities.",
                icon: "🔒",
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

        {/* Industries Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Industries We Transform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Manufacturing</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Predictive maintenance</li>
                <li>Asset tracking</li>
                <li>Real-time production monitoring</li>
                <li>Quality control automation</li>
                <li>Supply chain optimization</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Remote patient monitoring</li>
                <li>Medical asset tracking</li>
                <li>Smart facility management</li>
                <li>Medication adherence systems</li>
                <li>Environmental monitoring</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Agriculture</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Precision farming</li>
                <li>Soil and crop monitoring</li>
                <li>Livestock tracking and monitoring</li>
                <li>Automated irrigation systems</li>
                <li>Supply chain tracking</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Smart Buildings</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Energy management</li>
                <li>Occupancy monitoring</li>
                <li>Environmental control</li>
                <li>Security and access control</li>
                <li>Predictive maintenance</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Retail</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Inventory management</li>
                <li>Customer behavior analysis</li>
                <li>Personalized shopping experiences</li>
                <li>Supply chain optimization</li>
                <li>Smart shelves and displays</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Transportation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fleet management</li>
                <li>Predictive maintenance</li>
                <li>Route optimization</li>
                <li>Driver safety monitoring</li>
                <li>Cargo condition tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Our IoT Implementation Process
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Discovery & Requirements
                </h3>
                <p>
                  We analyze your business needs, technical requirements, and
                  identify opportunities for IoT integration.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Solution Architecture
                </h3>
                <p>
                  Our team designs the technical architecture, including
                  devices, connectivity, data flow, and user interfaces.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Prototype Development
                </h3>
                <p>
                  We create a working prototype to validate the concept and
                  gather feedback before full implementation.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Development & Integration
                </h3>
                <p>
                  Our engineers build the complete solution and integrate it
                  with your existing systems and infrastructure.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Testing & Quality Assurance
                </h3>
                <p>
                  Comprehensive testing ensures reliability, security, and
                  performance before deployment.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Deployment & Support</h3>
                <p>
                  We manage the rollout and provide ongoing support, monitoring,
                  and maintenance for your IoT ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Case Study</h2>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3 relative min-h-[200px]">
                <Image
                  src="/images/case-study-iot.jpg"
                  alt="IoT Manufacturing Case Study"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-4">
                  Manufacturing Efficiency Increased by 37%
                </h3>
                <p className="mb-4">
                  A leading manufacturing company was struggling with unexpected
                  machine failures and production inefficiencies. We implemented
                  a comprehensive IoT solution to monitor equipment performance,
                  predict maintenance needs, and optimize production schedules.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-pink-300 text-2xl font-bold">37%</p>
                    <p>Increase in efficiency</p>
                  </div>
                  <div>
                    <p className="text-pink-300 text-2xl font-bold">68%</p>
                    <p>Reduction in downtime</p>
                  </div>
                  <div>
                    <p className="text-pink-300 text-2xl font-bold">22%</p>
                    <p>Decrease in operating costs</p>
                  </div>
                </div>
                <Link href="/case-studies/manufacturing-iot">
                  <span className="text-pink-300 hover:text-pink-400">
                    Read Full Case Study →
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
                How can IoT benefit my business?
              </h3>
              <p>
                IoT can provide real-time operational visibility, automate
                processes, reduce costs, enable predictive maintenance, improve
                decision-making through data analytics, and create new revenue
                streams through innovative services.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                How long does it take to implement an IoT solution?
              </h3>
              <p>
                Implementation timelines vary based on project complexity.
                Simple solutions might be deployed in 2-3 months, while
                enterprise-scale implementations typically take 6-12 months from
                concept to full deployment.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                How do you ensure IoT security?
              </h3>
              <p>
                We implement multi-layered security measures including device
                authentication, encrypted communications, secure boot processes,
                regular security updates, access controls, and continuous
                monitoring for vulnerabilities.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Can you integrate IoT with our existing systems?
              </h3>
              <p>
                Yes, our solutions are designed to integrate with your existing
                IT infrastructure, business applications, and operational
                technology. We use standard protocols and custom integrations to
                ensure seamless data flow.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to transform your business with IoT?
          </h2>
          <p className="text-xl mb-6">
            Contact us today to discuss how our IoT solutions can drive
            innovation and efficiency.
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
