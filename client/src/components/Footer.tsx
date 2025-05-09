import { Link } from "wouter";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Architecture", href: "#architecture" },
    { name: "Implementation", href: "#implementation" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <Link href="/">
                <span className="text-xl font-bold cursor-pointer">TyleDeClouds</span>
              </Link>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TyleDeClouds. All rights reserved.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/tyledeclouds" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">GitHub</span>
                <Github size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
