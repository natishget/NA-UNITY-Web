"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Why NA UNITY" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-100 bg-black ">
      <div className="      max-w-[80%] mx-auto md:px-0 px-4 ">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-12 h-12 relative">
              <Image
                src="/NA-Unity.png"
                alt="NA UNITY Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-white text-lg">NA UNITY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-600 transition-colors  font-bold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-4 py-2 text-white border-1 border-white rounded-full hover:bg-white hover:text-black transition-colors font-medium text-sm"
            >
              Request a Quote
            </Link>
            {/* <Link
              href="/contact"
              className="px-4 py-2 bg-[#0000FF] text-white rounded hover:bg-blue-700 transition-colors font-medium text-sm"
            >
              Contact Us
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-white hover:bg-[#cccccc] rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 px-4 pt-2">
              <Link
                href="/contact"
                className="flex-1 px-4 py-2 text-[#0000FF] border-2 border-[#0000FF] rounded hover:bg-[#0000FF] hover:text-white transition-colors font-medium text-sm text-center"
              >
                Quote
              </Link>
              <Link
                href="/contact"
                className="flex-1 px-4 py-2 bg-[#0000FF] text-white rounded hover:bg-blue-700 transition-colors font-medium text-sm text-center"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
