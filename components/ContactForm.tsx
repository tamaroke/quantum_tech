"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending the form
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        service: "",
        message: "",
      });

      // Reset the success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple SVG icons as inline components
  const UserIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const MailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );

  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  const MessageIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-400"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );

  const SendIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
    >
      <path d="m22 2-7 20-4-9-9-4Z"></path>
      <path d="M22 2 11 13"></path>
    </svg>
  );

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-green-600"
    >
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-12 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-3 text-gray-800">
            Get in Touch
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-lg mx-auto">
            Have questions or want to work with us? Fill out the form below or
            email us directly at{" "}
            <a
              href="mailto:oigarak@gmail.com"
              className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              oigarak@gmail.com
            </a>
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-3">
              <div className="p-2 bg-green-100 rounded-full">
                <CheckIcon />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Thank You!
            </h3>
            <p className="text-green-700">
              Your message has been sent successfully. We&apos;ll get back to
              you soon.
            </p>
          </div>
        ) : (
          <form className="w-full space-y-5" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon />
                </div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon />
                </div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon />
                </div>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700"
            >
              <option value="">Select Service Type</option>
              <option value="App Development">App Development</option>
              <option value="Electronics Design">Electronics Design</option>
              <option value="Computer Servicing">Computer Servicing</option>
              <option value="IoT Solutions">IoT Solutions</option>
            </select>

            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <MessageIcon />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-200 ${
                isSubmitting ? "opacity-80 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <SendIcon />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-center max-w-3xl">
        <div className="bg-white rounded-lg shadow-md p-5 flex-1 min-w-[240px]">
          <div className="p-2 bg-blue-50 rounded-full inline-flex mb-3">
            <MailIcon />
          </div>
          <h3 className="font-semibold text-lg mb-1">Email</h3>
          <a
            href="mailto:oigarak@gmail.com"
            className="text-blue-600 hover:underline"
          >
            oigarak@gmail.com
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-5 flex-1 min-w-[240px]">
          <div className="p-2 bg-blue-50 rounded-full inline-flex mb-3">
            <PhoneIcon />
          </div>
          <h3 className="font-semibold text-lg mb-1">Phone</h3>
          <p className="text-gray-600">Contact us for our number</p>
        </div>
      </div>
    </div>
  );
}
