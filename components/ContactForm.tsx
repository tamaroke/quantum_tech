"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-12 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
      <p className="text-center mb-8 text-gray-600">
        Fill out the form below or email us directly at{" "}
        <a href="mailto:oigarak@gmail.com" className="text-blue-600 underline">
          oigarak@gmail.com
        </a>
      </p>

      <form className="w-full max-w-xl space-y-4" onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="input"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="input"
          required
        />
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="input"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="input"
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="input"
        >
          <option>Select Service Type</option>
          <option>App Development</option>
          <option>Electronics Design</option>
          <option>Computer Servicing</option>
          <option>IoT Solutions</option>
        </select>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          className="input"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
