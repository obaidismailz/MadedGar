import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://madedgar.com"),
  title: "MadedGar | Luxury Care & VIP Concierge for Overseas Pakistanis",
  description:
    "Remit Love. Deliver Care. Helping overseas Pakistanis protect, provide, and care for their elderly parents back home with 24/7 dedicated medical, financial, and supervisory support in Islamabad, Lahore, Karachi & nationwide.",
  keywords: [
    "MadedGar",
    "Elderly Care Pakistan",
    "Overseas Pakistanis Care Concierge",
    "Parents Healthcare Islamabad",
    "Elder Concierge Lahore",
    "Medical Emergency Response Karachi",
    "Escrow Bill Payment Pakistan",
  ],
  authors: [{ name: "MadedGar VIP Care" }],
  openGraph: {
    title: "MadedGar | Remit Love. Deliver Care.",
    description:
      "Helping overseas Pakistanis protect, provide, and care for their families back home with 24/7 dedicated medical, financial, and supervisory support.",
    url: "https://madedgar.com",
    siteName: "MadedGar Luxury Care Concierge",
    images: [
      {
        url: "https://madedgar.com/logo3.png",
        width: 1200,
        height: 630,
        alt: "MadedGar Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MadedGar | Remit Love. Deliver Care.",
    description:
      "Helping overseas Pakistanis protect, provide, and care for their families back home with 24/7 dedicated medical, financial, and supervisory support.",
    images: ["https://madedgar.com/logo3.png"],
  },
  icons: {
    icon: "/logo3.png",
    apple: "/logo3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#FCFAF7] text-[#161616] font-body">
        {children}
      </body>
    </html>
  );
}
