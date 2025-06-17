"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import HeroSection from "./_components/hero-section";
import { links } from "./_components/navbar";
import ProjectSection from "./_components/project-section";
import Experience from "./_components/experience";
import Education from "./_components/education";
import ContactSection from "./_components/contact-section";
export function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center h-auto w-full bg-black">
      <div className="flex flex-col items-center justify-center h-screen w-full">
      <HeroSection />
      </div>
      <Experience />
      <ProjectSection />
      <Education />
      <ContactSection />
      <div className="fixed top-[90%]">
        <FloatingDock
          items={links}
        />
      </div>
    </section>
  );
}

export default Home;