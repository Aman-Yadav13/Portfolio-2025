import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ActiveAboutContextProvider from "@/context/active-about-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aman Yadav | Full Stack Developer & AI Engineer",
    template: "%s | Aman Yadav",
  },
  description:
    "Portfolio of Aman Yadav, a Full Stack Developer and AI/ML Engineer specializing in building scalable web applications and intelligent systems.",
  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "React Specialist",
    "Next.js Developer",
    "Machine Learning",
    "Portfolio",
    "Software Engineer",
    "Web Development",
    "AI Solutions",
  ],
  authors: [
    { name: "Aman Yadav", url: "https://portfolioamanyadav.vercel.app" },
  ],
  creator: "Aman Yadav",
  publisher: "Aman Yadav",
  metadataBase: new URL("https://portfolioamanyadav.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aman Yadav | Full Stack & AI Developer",
    description: "Portfolio showcasing innovative web and AI solutions",
    url: "https://portfolioamanyadav.vercel.app",
    siteName: "Aman Yadav Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aman Yadav Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Add after setting up Google Search Console
  // verification: { google: "your-google-verification-code" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aman Yadav",
              jobTitle: "Full Stack Developer & AI Engineer",
              url: "https://portfolioamanyadav.vercel.app",
              sameAs: [
                "https://github.com/aman-yadav13",
                "https://linkedin.com/in/aman-yadav13",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vellore",
                addressRegion: "Tamil Nadu",
                addressCountry: "India",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ActiveAboutContextProvider>{children}</ActiveAboutContextProvider>
      </body>
    </html>
  );
}
