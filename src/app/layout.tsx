import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
        url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "MadedGar Luxury Elderly Care Concierge",
      },
    ],
    locale: "en_US",
    type: "website",
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
