import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aman Yadav - Resume | Full Stack & AI Developer",
  description:
    "Resume of Aman Yadav showcasing professional experience, technical skills, and projects in software development and artificial intelligence.",
  keywords: [
    "Software Engineer Resume",
    "Full Stack Developer CV",
    "AI Engineer Portfolio",
    "Technical Resume",
    "Developer Skills",
    "Hire Full Stack Developer",
  ],
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Aman Yadav - Professional Resume",
    description:
      "Detailed resume of Aman Yadav highlighting technical expertise and project accomplishments",
    url: "/resume",
    type: "profile",
    images: [
      {
        url: "/resume-og.png",
        width: 1200,
        height: 630,
        alt: "Aman Yadav Resume Preview",
      },
    ],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
