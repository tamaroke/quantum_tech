// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Welcome to <span className="text-cyan-300">Quantum Tech</span>
          </h1>
          <p className="text-lg text-gray-200 mb-6">
            At Quantum Tech, we blend innovation with expertise to deliver
            smart, efficient, and modern technology solutions—from computer
            servicing to custom web and mobile applications, electronics design,
            and IoT services. We don’t just offer services; we build digital
            experiences.
          </p>
          <Link href="/contact">
            <button className="bg-pink-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg text-white font-semibold">
              Get in Touch
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <Image
            src="/images/quantum-tech-hero.jpg" // 🔁 Replace with your actual image path
            alt="Quantum Tech illustration"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      </section>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
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
