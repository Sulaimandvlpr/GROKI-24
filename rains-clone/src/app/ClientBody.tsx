"use client";

import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NotificationBar } from "@/components/layout/notification-bar";
import { CookieConsent } from "@/components/layout/cookie-consent";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="relative flex min-h-screen flex-col">
        <NotificationBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </div>
    </ThemeProvider>
  );
}
