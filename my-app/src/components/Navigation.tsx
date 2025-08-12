import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
  className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-lg border-b border-white/60 "
  style={{ backdropFilter: "blur(12px)" }}
>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-[hsl(var(--primary))]">
              FlowLeanSolutions
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "features", "about", "pricing", "tutorials"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  {section == 'tutorials' ? 'Demo' : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
 <a
  href="https://app.flowleansolutions.com/login"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 shadow-md transition duration-500 hover:from-blue-600 hover:to-blue-400 hover:shadow-lg 
  "
>
  <div className="bg-background rounded-md px-1 py-0.2">
    <Button className="py-0.5 px-6 text-[1rem] text-white cursor-pointer">Sign In</Button>
  </div>
</a>

  

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[hsl(var(--background))] border-t border-[hsl(var(--border))]">
              {["home", "features", "about", "tutorials"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block px-3 py-2 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors w-full text-left"
                >
                  {section == 'tutorials' ? 'Demo' : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
             
              <div className="px-3 py-2">
                <a
                href="https://app.flowleansolutions.com/login"
                className="block px-3 py-2 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors w-full text-left"
              >
                Login
              </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;