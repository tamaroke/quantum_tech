// app/contact/page.tsx
import React from "react";
import ContactForm from "../../components/ContactForm"; // Adjust path based on your folder structure

const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 py-20 px-6">
      <ContactForm /> {/* Now using the ContactForm component */}
    </main>
  );
};

export default Contact;
