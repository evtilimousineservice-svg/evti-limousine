import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Ev&Ti Limousine Service | Los Angeles • San Diego • Palm Springs • Santa Barbara",
  description:
    "Luxury black car & limousine service in Southern California. Request-only bookings (minimum 3 hours before).",
  metadataBase: new URL("https://evtilimousine.com"),
  openGraph: {
    title: "Ev&Ti Limousine Service",
    description:
      "Luxury black car & limousine service in Southern California. Request-only bookings (minimum 3 hours before).",
    url: "https://evtilimousine.com",
    siteName: "Ev&Ti Limousine Service",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
