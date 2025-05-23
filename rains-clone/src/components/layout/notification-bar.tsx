"use client";

import { useEffect, useState } from "react";

const notifications = [
  "2-year product warranty",
  "All orders are shipped within 24 business hours",
  "30-day returns",
];

export function NotificationBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % notifications.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notification-bar">
      <div className="rains-container">
        <p>{notifications[currentIndex]}</p>
      </div>
    </div>
  );
}
