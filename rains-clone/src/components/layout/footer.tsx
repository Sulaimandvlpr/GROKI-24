"use client";

import Link from "next/link";

const footerLinks = {
  service: [
    { label: "Help Center", href: "/pages/help" },
    { label: "Contact", href: "/pages/contact" },
    { label: "Shipping", href: "/pages/shipping" },
    { label: "Returns", href: "/pages/returns" },
    { label: "Warranty", href: "/pages/warranty" },
  ],
  company: [
    { label: "About", href: "/pages/about" },
    { label: "Career", href: "/pages/career" },
    { label: "Press", href: "/pages/press" },
    { label: "Sustainability", href: "/pages/sustainability" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/rains/" },
    { label: "Facebook", href: "https://www.facebook.com/rainsofficial" },
    { label: "Pinterest", href: "https://www.pinterest.com/rainscom/" },
    { label: "TikTok", href: "https://www.tiktok.com/@rains" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/rains/" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="rains-container">
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0">
              <p className="text-sm text-gray-600">All orders ship within 24 business hours.</p>
              <p className="text-sm text-gray-600">2-year product warranty</p>
              <p className="text-sm text-gray-600">30-day returns</p>

              <div className="mt-6">
                <h3 className="text-sm font-medium">Get your weekly dose of Rains.</h3>
                <p className="mt-1 text-xs text-gray-600">
                  Receive updates on pre-access, product drops, exclusive member offers, events, and more - delivered right to your inbox.
                </p>
                <div className="mt-2 flex max-w-md">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full min-w-0 border border-r-0 border-gray-300 px-3 py-2 text-sm focus:outline-none"
                  />
                  <button className="rains-button bg-black text-white">Sign up</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-medium">Service</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.service.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-gray-600 hover:text-gray-800"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-gray-600 hover:text-gray-800"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium">Social</h3>
                <ul className="mt-4 space-y-2">
                  {footerLinks.social.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-gray-600 hover:text-gray-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-xs text-gray-600">© Rains 2025. All rights reserved</p>
            <div className="mt-4 flex space-x-4">
              <Link href="/pages/terms" className="text-xs text-gray-600 hover:text-gray-800">
                Terms & Conditions
              </Link>
              <Link href="/pages/privacy-policy" className="text-xs text-gray-600 hover:text-gray-800">
                Privacy Policy
              </Link>
              <Link href="/pages/cookie-policy" className="text-xs text-gray-600 hover:text-gray-800">
                Cookie Policy
              </Link>
              <Link href="/collections" className="text-xs text-gray-600 hover:text-gray-800">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
