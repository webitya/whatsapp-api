import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://wa.webitya.com'),
  title: {
    default: "Webitya | #1 WhatsApp Business API Platform for Indian SMEs",
    template: "%s | Webitya WhatsApp Automation"
  },
  description: "Automate sales, support & marketing on WhatsApp with Webitya. The most trusted Official WhatsApp Business API platform in India. Get Green Tick, Chatbots & Broadcasts.",
  keywords: [
    "WhatsApp Business API",
    "WhatsApp Automation Tool",
    "WhatsApp Marketing Software",
    "Green Tick Verification India",
    "Webitya",
    "WhatsApp API Pricing",
    "WhatsApp Chatbot Builder",
    "Business Automation India"
  ],
  authors: [{ name: "Webitya Digital" }],
  creator: "Webitya Digital",
  publisher: "Webitya Digital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Webitya | Automate Business on WhatsApp",
    description: "Scale your business with the world's most powerful WhatsApp API platform. Reach 2 Billion+ users directly. Start your free demo today.",
    url: "https://wa.webitya.com",
    siteName: "Webitya",
    images: [
      {
        url: "/webitya-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Webitya WhatsApp Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webitya | #1 WhatsApp API Solution",
    description: "Automate sales & support on WhatsApp. Get Green Tick verified today.",
    images: ["/webitya-logo.jpg"],
    creator: "@webitya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // User to replace
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://wa.webitya.com/#organization",
        "name": "Webitya",
        "url": "https://wa.webitya.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://wa.webitya.com/webitya-logo.jpg",
          "width": 112,
          "height": 112
        },
        "sameAs": [
          "https://facebook.com/webitya",
          "https://twitter.com/webitya",
          "https://instagram.com/webitya"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-6207732383",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": "en"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Webitya WhatsApp Business API",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/webitya-logo.jpg" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={outfit.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-6 py-3 bg-brand-green text-black font-bold rounded-lg shadow-xl outline-none border-2 border-black"
        >
          Skip to Main Content
        </a>
        <Preloader />
        <SmoothScroll>
          <div id="main-content">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
