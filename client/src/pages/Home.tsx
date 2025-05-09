import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Implementation from "@/components/Implementation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Implement smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const link = target as HTMLAnchorElement;
        const href = link.getAttribute('href');
        
        if (href && href.startsWith('#') && href !== '#') {
          e.preventDefault();
          
          const targetId = href;
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 font-body text-neutral-800">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Implementation />
      <Contact />
      <Footer />
    </div>
  );
}
