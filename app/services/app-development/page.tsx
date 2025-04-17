import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "App Development | Your Company",
  description:
    "Professional mobile app development services for businesses and organizations. From native iOS and Android apps to cross-platform solutions, we design and build mobile experiences that engage users and drive growth.",
  keywords:
    "app development, mobile app, iOS development, Android development, cross-platform apps, React Native, Flutter, custom mobile applications",
  openGraph: {
    title: "App Development | Your Company",
    description:
      "Professional mobile app development services creating engaging experiences that drive growth.",
    images: ["/images/app-development.jpg"],
  },
};

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 text-sm">
          <Link href="/" className="hover:text-cyan-300">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#services" className="hover:text-cyan-300">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-cyan-300">App Development</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row mb-12 gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-4">App Development</h1>
            <p className="text-xl mb-6">
              Building innovative mobile experiences that connect with users and
              transform businesses.
            </p>
            <p className="mb-6">
              Our app development services deliver custom-built mobile
              applications that help businesses reach customers wherever they
              are. We combine intuitive user experiences with powerful
              functionality to create mobile solutions that are not only
              visually stunning but also achieve your strategic business goals.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg font-semibold">
                  Start Your App Project
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
                src="/images/app-development.jpg"
                alt="App Development"
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
            Our App Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "iOS App Development",
                description:
                  "Native iOS applications built for iPhone and iPad using Swift and SwiftUI with exceptional performance.",
                icon: "📱",
              },
              {
                title: "Android App Development",
                description:
                  "Custom Android applications designed for the diverse ecosystem of Android devices using Kotlin and Java.",
                icon: "🤖",
              },
              {
                title: "Cross-Platform Development",
                description:
                  "Cost-effective solutions that work on both iOS and Android with frameworks like React Native and Flutter.",
                icon: "🔄",
              },
              {
                title: "UI/UX Design for Mobile",
                description:
                  "Intuitive and engaging mobile interfaces designed for optimal user experience and conversion.",
                icon: "🎨",
              },
              {
                title: "App Backend Development",
                description:
                  "Robust server-side solutions that power your mobile applications securely and efficiently.",
                icon: "⚙️",
              },
              {
                title: "App Maintenance & Updates",
                description:
                  "Ongoing support, performance optimization, and feature enhancements to keep your app competitive.",
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
              <h3 className="text-xl font-bold mb-4">Retail & E-Commerce</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Mobile shopping experiences</li>
                <li>Loyalty programs</li>
                <li>Augmented reality try-ons</li>
                <li>Inventory management</li>
                <li>Contactless payments</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Telemedicine platforms</li>
                <li>Patient engagement apps</li>
                <li>Health monitoring tools</li>
                <li>Medical appointment booking</li>
                <li>Medication management</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Finance</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Mobile banking applications</li>
                <li>Investment platforms</li>
                <li>Secure payment solutions</li>
                <li>Expense trackers</li>
                <li>Cryptocurrency wallets</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Transportation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ride-sharing services</li>
                <li>Fleet management</li>
                <li>Delivery tracking</li>
                <li>Navigation systems</li>
                <li>Transportation booking</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Entertainment</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Media streaming</li>
                <li>Gaming applications</li>
                <li>Event ticketing</li>
                <li>Social networking</li>
                <li>AR/VR experiences</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">Fitness & Wellness</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Workout trackers</li>
                <li>Nutrition planning</li>
                <li>Meditation & mindfulness</li>
                <li>Fitness community platforms</li>
                <li>Wearable device integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Our App Development Process
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Discovery & Strategy</h3>
                <p>
                  We analyze your business objectives, target users, and
                  technical requirements to develop a comprehensive app
                  strategy.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                <p>
                  Our designers create intuitive wireframes and visual designs
                  optimized for mobile user experiences.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p>
                  We build your app using clean, efficient code and the most
                  appropriate technologies for your project requirements.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Testing & Quality Assurance
                </h3>
                <p>
                  Rigorous testing ensures your app functions flawlessly across
                  all intended devices and use cases.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Deployment</h3>
                <p>
                  We handle the app store submission process and ensure your app
                  meets all platform requirements for successful publication.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shrink-0">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Maintenance & Updates
                </h3>
                <p>
                  Our team provides ongoing support, performance monitoring, and
                  regular updates to keep your app competitive and secure.
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
                  src="/images/case-study-app.jpg"
                  alt="Fitness App Development Case Study"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-4">
                  Fitness App User Engagement Increased by 187%
                </h3>
                <p className="mb-4">
                  A fitness brand was struggling with user retention in their
                  existing app. We redesigned and developed a new cross-platform
                  solution with personalized workout plans, social features, and
                  wearable device integration. The result was dramatic
                  improvements in user engagement and subscription conversions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-cyan-300 text-2xl font-bold">187%</p>
                    <p>Increase in daily active users</p>
                  </div>
                  <div>
                    <p className="text-cyan-300 text-2xl font-bold">156%</p>
                    <p>Growth in subscription revenue</p>
                  </div>
                  <div>
                    <p className="text-cyan-300 text-2xl font-bold">4.8</p>
                    <p>App Store average rating</p>
                  </div>
                </div>
                <Link href="/case-studies/fitness-app">
                  <span className="text-cyan-300 hover:text-cyan-400">
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
                How long does it take to develop a mobile app?
              </h3>
              <p>
                Development timelines vary based on complexity. Simple apps
                typically take 3-4 months, while complex applications may take
                6-12 months. We provide a detailed timeline during the initial
                consultation based on your specific requirements.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Should I build a native app or a cross-platform app?
              </h3>
              <p>
                The choice depends on your business goals, budget, and technical
                requirements. Native apps offer the best performance and access
                to platform-specific features, while cross-platform apps can
                reduce development time and cost when targeting both iOS and
                Android. We&apos;ll help you make the right decision based on
                your specific needs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                Do you handle app store submissions?
              </h3>
              <p>
                Yes, we manage the entire app store submission process for both
                Apple App Store and Google Play Store. We ensure your app meets
                all platform guidelines and requirements to ensure a smooth
                approval process.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-2">
                How do you approach app security?
              </h3>
              <p>
                Security is built into every stage of our development process.
                We implement industry best practices for data encryption, secure
                authentication, and protection against common vulnerabilities.
                For apps requiring heightened security, we conduct specialized
                security audits and penetration testing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to bring your app idea to life?
          </h2>
          <p className="text-xl mb-6">
            Contact us today to discuss how our app development services can
            help transform your business.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-700 hover:bg-gray-100 py-3 px-8 rounded-lg font-bold text-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
