"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      // Show cookie banner after a small delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookieConsent", "necessary");
    setIsVisible(false);
  };

  const toggleDetails = () => {
    // This would toggle detailed cookie preferences
    // For now, we'll just implement the accept/decline functionality
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-lg">
      <div className="rains-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0 lg:max-w-3xl">
            <p className="text-sm font-medium">For a more personalized experience</p>
            <p className="mt-1 text-xs text-gray-600">
              We use cookies to streamline your visit and deliver personalised product recommendations.
              Accept all for a more personalized, tailored shopping experience.{" "}
              <Link href="/pages/cookie-policy" className="underline">
                Read more
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={toggleDetails}
              className="text-xs underline"
            >
              Show details
            </button>
            <button
              onClick={acceptNecessary}
              className="border border-black px-4 py-2 text-xs"
            >
              Only necessary
            </button>
            <button
              onClick={acceptAll}
              className="bg-black px-4 py-2 text-xs text-white"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
