import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Software Installation Services | Your Company",
  description:
    "Professional software installation services tailored to your business needs. We handle complex installations, configurations, and provide ongoing support.",
  keywords:
    "software installation, software setup, professional installation, business software",
  openGraph: {
    title: "Software Installation Services | Your Company",
    description:
      "Professional software installation services tailored to your business needs.",
    images: ["/images/software-installation.jpg"],
  },
};

export default function SoftwareInstallationPage() {
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
          <span className="text-pink-300">Software Installation</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row mb-12 gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Software Installation Services
            </h1>
            <p className="text-xl mb-6">
              Professional software setup and configuration for businesses of
              all sizes.
            </p>
            <p className="mb-6">
              Our expert team ensures your software is installed correctly,
              configured optimally, and running smoothly from day one. We
              minimize downtime and maximize efficiency.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-semibold">
                  Get a Quote
                </button>
              </Link>
              <Link href="/contact#consultation">
                <button className="bg-transparent border border-white hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold">
                  Book Consultation
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px]">
            {/* Replace with your actual image path */}
            <div className="w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/software-installation.jpg"
                alt="Software Installation Services"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Our Software Installation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Operating System Installation",
                description:
                  "Windows, macOS, Linux distributions expertly installed and configured.",
                icon: "🖥️",
              },
              {
                title: "Business Software Setup",
                description:
                  "ERP, CRM, accounting, and other business-critical software installation.",
                icon: "📊",
              },
              {
                title: "Custom Software Deployment",
                description:
                  "Careful installation of custom-developed software for your business.",
                icon: "⚙️",
              },
              {
                title: "Software Updates & Upgrades",
                description:
                  "Keep your software current with our update and upgrade services.",
                icon: "🔄",
              },
              {
                title: "Network Software Configuration",
                description:
                  "Proper setup of networking software for optimal performance.",
                icon: "🔌",
              },
              {
                title: "Software Troubleshooting",
                description:
                  "Expert diagnosis and resolution of software installation issues.",
                icon: "🔍",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{feature.icon}</span>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Our Software Installation Process
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Assessment</h3>
                <p>
                  We evaluate your systems, requirements, and compatibility to
                  ensure a smooth installation process.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Planning</h3>
                <p>
                  Our team develops a detailed installation plan to minimize
                  disruption to your business operations.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Installation</h3>
                <p>
                  We execute the installation with precision, following best
                  practices and manufacturer guidelines.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Configuration</h3>
                <p>
                  Your software is configured for optimal performance and
                  security based on your specific needs.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Testing</h3>
                <p>
                  Rigorous testing ensures everything works as expected before
                  handover.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Training & Support</h3>
                <p>
                  We provide training for your team and ongoing support to
                  ensure you get the most from your software.
                </p>
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
                How long does software installation typically take?
              </h3>
              <p>
                Installation times vary based on the complexity of the software
                and your system requirements. Simple installations may take only
                an hour, while enterprise solutions might require several days
                for proper setup and configuration.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Do you offer remote installation services?
              </h3>
              <p>
                Yes, many software installations can be completed remotely,
                saving you time and money. For complex setups, we may recommend
                on-site installation for the best results.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Can you install software on multiple computers?
              </h3>
              <p>
                Absolutely. We offer bulk installation services for businesses
                needing software deployed across multiple workstations or
                servers. We&apos;ll ensure consistent configuration throughout
                your organization.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                What if I encounter issues after installation?
              </h3>
              <p>
                We provide post-installation support to address any issues that
                may arise. Our service includes a warranty period where
                we&apos;ll troubleshoot and resolve software-related problems at
                no additional cost.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-xl mb-6">
            Contact us today for professional software installation services.
          </p>
          <Link href="/contact">
            <button className="bg-white text-purple-700 hover:bg-gray-100 py-3 px-8 rounded-lg font-bold text-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
