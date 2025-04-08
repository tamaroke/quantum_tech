import React from "react";
import "./globals.css"; // Import global styles (or Tailwind, etc.)

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
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
