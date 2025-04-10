import React from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Quantum Tech",
  description:
    "Innovating the Future — IT Solutions, Electronics, IoT, and More.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main>{children}</main>

        {/* ✅ Global Toast Notification Handler */}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
