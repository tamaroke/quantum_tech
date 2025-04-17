// Change the button to a Link component
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Software Installation",
              description:
                "High-quality software installation tailored to your needs.",
              icon: "💻",
              slug: "software-installation",
            },
            {
              title: "Computer Repair & Servicing",
              description:
                "High-quality computer repair & servicing tailored to your needs.",
              icon: "🔧",
              slug: "computer-repair-servicing",
            },
            {
              title: "Electronics Design",
              description:
                "High-quality electronics design tailored to your needs.",
              icon: "🔌",
              slug: "electronics-design",
            },
            {
              title: "IoT Solutions",
              description: "High-quality IoT solutions tailored to your needs.",
              icon: "📱",
              slug: "iot-solutions",
            },
            {
              title: "Web Development",
              description:
                "High-quality web development tailored to your needs.",
              icon: "🌐",
              slug: "web-development",
            },
            {
              title: "App Development",
              description:
                "High-quality app development tailored to your needs.",
              icon: "📱",
              slug: "app-development",
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
              <p className="text-gray-200 mb-4">{service.description}</p>
              <Link href={`/services/${service.slug}`}>
                <button className="bg-pink-600 hover:bg-purple-700 text-white py-2 px-4 rounded">
                  Learn More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
