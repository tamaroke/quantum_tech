"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-sm py-4 px-6 flex items-center sticky top-0 z-50">
      {/* Logo or Brand */}
      <h1 className="text-2xl font-bold text-blue-700 tracking-wide">
        Quantum Tech!!
      </h1>

      {/* Nav Links aligned to the right */}
      <div className="ml-auto flex gap-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "px-4 py-2 rounded-lg transition text-sm font-medium",
              pathname === href
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600"
            )}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
