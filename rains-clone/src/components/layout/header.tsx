"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

const mainNavItems = [
  { label: "New in", href: "/collections/new-arrivals" },
  { label: "Women", href: "/collections/women" },
  { label: "Men", href: "/collections/men" },
  { label: "Bags", href: "/collections/bags" },
  { label: "Accessories", href: "/collections/waterproof-accessories" },
  { label: "Rains World", href: "/pages/company" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="rains-container">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>

          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Rains</span>
              <span className="text-3xl font-bold tracking-tight">RAINS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:gap-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rains-link py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:block">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link href="/cart" className="flex items-center">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-1 text-xs">0</span>
              <span className="sr-only">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on state */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
