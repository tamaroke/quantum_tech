import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Web Development | Your Company",
  description:
    "Professional web development services for businesses and organizations. From responsive websites to complex web applications, we design and build digital experiences that drive results.",
  keywords:
    "web development, website design, responsive websites, web applications, custom websites, ecommerce development",
  openGraph: {
    title: "Web Development | Your Company",
    description:
      "Professional web development services creating digital experiences that drive results.",
    images: ["/images/web-development.jpg"],
  },
};

export default function WebDevelopmentPage() {
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
          <span className="text-pink-300">Web Development</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row mb-12 gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Web Development</h1>
            <p className="text-xl mb-6">
              Creating powerful digital experiences that engage visitors and
              drive conversions.
            </p>
            <p className="mb-6">
              Our web development services deliver custom-tailored websites and
              web applications that help businesses thrive online. We combine
              cutting-edge technology with strategic design to create digital
              solutions that are not only visually impressive but also achieve
              your business objectives.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-semibold">
                  Start Your Web Project
                </button>
              </Link>
              <Link href="/case-studies">
                <button className="bg-transparent border border-white hover:bg-white/10 text-white py-3 px-6 rounded-lg font-semibold">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px]">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <Image
                src="/images/web-development.jpg"
                alt="Web Development"
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
            Our Web Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Responsive Website Design",
                description:
                  "Custom websites that look and perform beautifully on any device, from desktop to mobile.",
                icon: "🖥️",
              },
              {
                title: "E-Commerce Development",
                description:
                  "Powerful online stores with secure payment processing and intuitive shopping experiences.",
                icon: "🛒",
              },
              {
                title: "Web Application Development",
                description:
                  "Feature-rich web applications that solve complex business challenges.",
                icon: "⚙️",
              },
              {
                title: "Content Management Systems",
                description:
                  "Easy-to-manage websites with custom CMS implementations tailored to your needs.",
                icon: "📝",
              },
              {
                title: "Frontend Development",
                description:
                  "Engaging user interfaces built with modern frameworks like React, Vue, and Angular.",
                icon: "🎨",
              },
              {
                title: "Backend Development",
                description:
                  "Robust server-side solutions that power your web applications securely and efficiently.",
                icon: "🔧",
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
          <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">E-Commerce</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Product catalogs</li>
                <li>Shopping cart optimization</li>
                <li>Payment gateway integration</li>
                <li>Inventory management</li>
                <li>Customer account portals</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Patient portals</li>
                <li>Appointment scheduling</li>
                <li>HIPAA-compliant solutions</li>
                <li>Medical practice websites</li>
                <li>Healthcare information systems</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Finance</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Secure banking portals</li>
                <li>Investment platforms</li>
                <li>Financial calculators</li>
                <li>Budgeting applications</li>
                <li>Regulatory compliance</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Real Estate</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Property listings</li>
                <li>Virtual tours</li>
                <li>Agent/client portals</li>
                <li>Mortgage calculators</li>
                <li>Property management systems</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Learning management systems</li>
                <li>Course catalogs</li>
                <li>Student portals</li>
                <li>Virtual classrooms</li>
                <li>Education resource libraries</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Non-Profit</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Donation platforms</li>
                <li>Event management</li>
                <li>Volunteer coordination</li>
                <li>Campaign websites</li>
                <li>Community engagement</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Our Web Development Process
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Discovery & Strategy</h3>
                <p>
                  We analyze your business goals, target audience, and technical
                  requirements to create a strategic roadmap.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">UX/UI Design</h3>
                <p>
                  Our designers create wireframes and visual designs that focus
                  on usability, aesthetics, and conversion.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p>
                  We write clean, efficient code to bring your website or
                  application to life using modern technologies.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Testing & Quality Assurance
                </h3>
                <p>
                  Rigorous testing ensures your website works flawlessly across
                  all browsers and devices.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Deployment</h3>
                <p>
                  We carefully launch your website or application and ensure
                  everything runs smoothly in the production environment.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Maintenance & Support
                </h3>
                <p>
                  Our team provides ongoing support, updates, and improvements
                  to keep your web presence secure and effective.
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
                  src="/images/case-study-web.jpg"
                  alt="E-Commerce Web Development Case Study"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-4">
                  E-Commerce Sales Increased by 215%
                </h3>
                <p className="mb-4">
                  A boutique fashion retailer was struggling with an outdated
                  online store that had poor mobile experience and checkout
                  abandonment. We redesigned and developed a modern e-commerce
                  platform with streamlined checkout, personalized
                  recommendations, and integrated inventory management.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-pink-300 text-2xl font-bold">215%</p>
                    <p>Increase in online sales</p>
                  </div>
                  <div>
                    <p className="text-pink-300 text-2xl font-bold">42%</p>
                    <p>Reduction in cart abandonment</p>
                  </div>
                  <div>
                    <p className="text-pink-300 text-2xl font-bold">3.2x</p>
                    <p>Increase in mobile conversions</p>
                  </div>
                </div>
                <Link href="/case-studies/fashion-ecommerce">
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
                How long does it take to develop a website?
              </h3>
              <p>
                Development timelines vary based on complexity. Simple websites
                typically take 4-6 weeks, while complex web applications or
                e-commerce stores may take 3-6 months. We provide a detailed
                timeline during the initial consultation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                What technologies do you use for web development?
              </h3>
              <p>
                We use modern frameworks and technologies like React, Vue.js,
                Angular, Node.js, PHP/Laravel, and Python/Django depending on
                project requirements. Our tech stack is chosen based on what
                will best serve your specific business needs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Do you provide website maintenance services?
              </h3>
              <p>
                Yes, we offer comprehensive maintenance packages that include
                security updates, performance monitoring, content updates,
                technical support, and feature enhancements to keep your website
                secure and up-to-date.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Will my website be mobile-friendly?
              </h3>
              <p>
                Absolutely. All our websites are built with a responsive design
                approach, ensuring they function and look great on all devices
                including smartphones, tablets, laptops, and desktop computers.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to elevate your web presence?
          </h2>
          <p className="text-xl mb-6">
            Contact us today to discuss how our web development services can
            help grow your business online.
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
