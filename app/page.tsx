"use client";
import React, { useEffect } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import HeroSection from "./_components/hero-section";
import { links } from "./_components/navbar";
import ProjectSection from "./_components/project-section";
import Experience from "./_components/experience";
import Education from "./_components/education";
import ContactSection from "./_components/contact-section";

// Custom hook for hash-based navigation
const useHashNavigation = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1); // Remove the # symbol
        const element = document.getElementById(sectionId);
        if (element) {
          // Add a small delay to ensure the page is fully loaded
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      } else {
        // If no hash, scroll to top (home section)
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 100);
      }
    };

    // Handle initial page load with hash
    if (window.location.hash) {
      handleHashChange();
    } else {
      // If no hash on initial load, ensure we're at the top
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "auto", // Use auto for initial load to avoid animation
        });
      }, 50);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
};

export function Home() {
  useHashNavigation();

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