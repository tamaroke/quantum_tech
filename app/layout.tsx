import React from "react";
import "../styles/globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-indigo-900 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Quantum Tech</h1>
            <div className="space-x-4">
              <Link href="/" className="hover:text-purple-300">
                Home
              </Link>
              <Link href="/portfolio" className="hover:text-purple-300">
                Portfolio
              </Link>
              <Link href="/contact" className="hover:text-purple-300">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-indigo-900 p-4 text-white">
          <div className="container mx-auto text-center">
            <p>
              © {new Date().getFullYear()} Quantum Tech. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
