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
    <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-700 tracking-wide">
        Quantum Tech
      </h1>
      <div className="flex space-x-6 font-medium">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "transition hover:text-blue-600",
              pathname === href
                ? "text-blue-700 font-semibold border-b-2 border-blue-500"
                : "text-gray-700"
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
