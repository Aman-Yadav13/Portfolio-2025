"use client";

import { Roboto_Slab } from "next/font/google";
import { Work } from "./components/work";
import { HeroSection } from "./sections/hero";
import { AboutSection } from "./sections/about";
import { TestimonialSection } from "./sections/testimonial";
import { ContactSection } from "./sections/contact";
import { SideNavbar } from "./components/side-navbar";

const roboto_Slab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <>
      <SideNavbar />
      <HeroSection />
      <AboutSection />
      <Work />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
