import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata = {
  title: "Rains® | Explore Our Outerwear & Waterproof Clothing",
  description:
    "Shop waterproof outerwear, raincoats, bags & accessories | Danish design for all weather | Shipped within 24 hours on working days | Fast international delivery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
