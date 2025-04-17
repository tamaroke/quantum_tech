import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Computer Repair & Servicing | Your Company",
  description:
    "Professional computer repair and servicing solutions for businesses and individuals. Fast diagnostics, reliable repairs, and maintenance services.",
  keywords:
    "computer repair, pc servicing, hardware repair, computer maintenance, IT support",
  openGraph: {
    title: "Computer Repair & Servicing | Your Company",
    description:
      "Professional computer repair and servicing solutions with quick turnaround times.",
    images: ["/images/computer-repair.jpg"],
  },
};

export default function ComputerRepairPage() {
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
          <span className="text-pink-300">Computer Repair & Servicing</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row mb-12 gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Computer Repair & Servicing
            </h1>
            <p className="text-xl mb-6">
              Fast, reliable computer repairs and maintenance for optimal
              performance.
            </p>
            <p className="mb-6">
              Our expert technicians diagnose and repair hardware and software
              issues quickly, minimizing downtime and extending the life of your
              valuable computer equipment. We service all major brands and
              models.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-semibold">
                  Schedule Repair
                </button>
              </Link>
              <Link href="/contact#emergency">
                <button className="bg-transparent border border-white hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold">
                  Emergency Service
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px]">
            {/* Replace with your actual image path */}
            <div className="w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/computer-repair.jpg"
                alt="Computer Repair Services"
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
            Our Computer Repair Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hardware Repairs",
                description:
                  "Motherboard, RAM, hard drive, power supply, and other component replacements and repairs.",
                icon: "🔧",
              },
              {
                title: "Virus & Malware Removal",
                description:
                  "Complete system cleaning and security enhancement to protect your data.",
                icon: "🛡️",
              },
              {
                title: "Data Recovery",
                description:
                  "Recovery of lost or corrupted data from damaged storage devices.",
                icon: "💾",
              },
              {
                title: "System Optimization",
                description:
                  "Performance tuning to make your computer run faster and more efficiently.",
                icon: "⚡",
              },
              {
                title: "OS Reinstallation",
                description:
                  "Clean installation of operating systems with all necessary drivers and updates.",
                icon: "🖥️",
              },
              {
                title: "Preventive Maintenance",
                description:
                  "Regular servicing to prevent failures and extend computer lifespan.",
                icon: "🧰",
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

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose Our Repair Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Certified Technicians</h3>
              <p>
                Our repair team consists of certified professionals with years
                of experience in computer hardware and software troubleshooting.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Quick Turnaround</h3>
              <p>
                We understand how important your computer is. Most repairs are
                completed within 24-48 hours, with emergency services available.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Transparent Pricing</h3>
              <p>
                No hidden fees or surprise charges. We provide detailed cost
                estimates before beginning any work.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Quality Guarantee</h3>
              <p>
                All our repairs come with a 90-day warranty. If the same issue
                recurs, we&apos;ll fix it at no additional cost.
              </p>
            </div>
          </div>
        </div>

        {/* Repair Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Our Computer Repair Process
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Diagnostics</h3>
                <p>
                  We perform comprehensive testing to accurately identify all
                  issues affecting your computer.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cost Estimate</h3>
                <p>
                  You receive a transparent quote with all required repairs and
                  associated costs.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Repair</h3>
                <p>
                  Upon approval, our technicians perform all necessary repairs
                  using quality parts.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Testing</h3>
                <p>
                  We thoroughly test your computer to ensure all issues have
                  been resolved.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pickup/Delivery</h3>
                <p>
                  Your repaired computer is ready for pickup or delivery, with
                  all work documented.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">The Difference We Make</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-red-400">
                Before Our Service
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Slow startup and operation</li>
                <li>Frequent freezing and crashes</li>
                <li>Overheating issues</li>
                <li>Strange noises from hardware</li>
                <li>Software errors and blue screens</li>
                <li>Security vulnerabilities</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                After Our Service
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Quick boot and responsive performance</li>
                <li>Stable and reliable operation</li>
                <li>Proper cooling and ventilation</li>
                <li>Quiet hardware operation</li>
                <li>Error-free software experience</li>
                <li>Enhanced security and protection</li>
              </ul>
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
                How long will my computer repair take?
              </h3>
              <p>
                Most standard repairs are completed within 24-48 hours. Complex
                issues may take longer, but we&apos;ll always keep you informed
                about the timeline.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Do you offer on-site repair services?
              </h3>
              <p>
                Yes, we provide on-site repairs for businesses and can arrange
                home visits for certain types of repairs when needed.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                What happens if you can&apos;t fix my computer?
              </h3>
              <p>
                In the rare case that we cannot repair your device, you&apos;ll
                only be charged for the diagnostic fee. We&apos;ll also provide
                recommendations for replacement options.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Will my data be safe during repairs?
              </h3>
              <p>
                Protecting your data is our priority. We take precautions to
                preserve your information during repairs, and we can perform
                data backups before any major work.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <p className="italic mb-4">
                &quot;My laptop was completely unresponsive and I thought
                I&apos;d lost all my important files. Their team not only fixed
                the hardware issue but recovered all my data. Fast service and
                reasonable prices!&quot;
              </p>
              <p className="font-bold">— Sarah T., Small Business Owner</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <p className="italic mb-4">
                &quot;We rely on their monthly maintenance service for our
                office computers. Since starting with them, we&apos;ve had
                virtually zero downtime and our systems run much faster. Highly
                recommend!&quot;
              </p>
              <p className="font-bold">— Michael R., Marketing Agency</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Is your computer giving you trouble?
          </h2>
          <p className="text-xl mb-6">
            Contact us today for fast, professional computer repair services.
          </p>
          <Link href="/contact">
            <button className="bg-white text-purple-700 hover:bg-gray-100 py-3 px-8 rounded-lg font-bold text-lg">
              Book a Repair
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
