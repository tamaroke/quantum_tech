import React from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar"; // Adjust the import path as needed

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

        <footer className="bg-indigo-900 p-4 text-white">
          <div className="container mx-auto text-center">
            <p>
              © {new Date().getFullYear()} Quantum Tech. All rights reserved.
            </p>
            <p>Oigara Kevin Tamaro</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
