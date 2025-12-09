import { Outfit } from "next/font/google"; // Using generic google font loader, assuming standard next.js setup
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Webitya | Official WhatsApp Business API Solution",
  description: "Automate your business on WhatsApp with Webitya. The #1 WhatsApp API platform for Indian SMEs. Get Green Tick, Broadcasts & Chatbots.",
  keywords: ["WhatsApp Business API", "WhatsApp Automation", "Green Tick Verification", "WhatsApp Marketing", "Webitya", "WhatsApp API India"],
  openGraph: {
    title: "Webitya | Official WhatsApp Business API Solution",
    description: "Scale your business with WhatsApp Automation. Get verified, broadcast offers, and support customers 24/7.",
    url: "https://wa.webitya.com",
    siteName: "Webitya",
    images: [
      {
        url: "/webitya-logo.jpg",
        width: 800,
        height: 600,
        alt: "Webitya Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webitya | Official WhatsApp Business API",
    description: "Automate your business with WhatsApp API. Sign up for a free demo today.",
    images: ["/webitya-logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/webitya-logo.jpg" sizes="any" />
      </head>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
