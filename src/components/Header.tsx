"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "Team", href: "/team" },
  { label: "Documents", href: "/documents" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 font-bold text-ink hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm">
              UF
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm md:text-base font-bold text-ink">Unnati Foundation</span>
              <span className="text-xs text-slate">Bhandara</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-ink hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              href="/contact"
              className="hidden sm:inline-flex px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-dark transition-colors text-sm font-medium"
            >
              Donate
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-ink hover:bg-slate/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-slate/10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-ink hover:bg-sand transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <Link 
                href="/contact"
                className="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-orange-dark transition-colors text-sm font-medium"
              >
                Donate Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
