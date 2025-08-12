import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[hsl(var(--primary))]">FlowLeanSolutions</h3>
            <p className="text-[hsl(var(--secondary-foreground)/0.8)] leading-relaxed">
              Transforming manufacturing operations through lean principles and
              intelligent material flow optimization.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="text-[hsl(var(--secondary-foreground)/0.6)] hover:text-[hsl(var(--primary))] transition-colors"
                  aria-label="Social Link"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "Features", id: "features" },
                { label: "About", id: "about" },
                { label: "Pricing", id: "pricing" },
              ].map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-[hsl(var(--secondary-foreground)/0.8)] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Features</h4>
            <ul className="space-y-2 text-[hsl(var(--secondary-foreground)/0.8)]">
              <li>Enhanced Communication</li>
              <li>Process Integration</li>
              <li>Comprehensive Analytics</li>
              <li>Workflow Automation</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-[hsl(var(--secondary-foreground)/0.8)]">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>contact@flowleansolutions.com</span>
              </div>
               <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
             support@flowleansolutions.com
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>+1 (704) 340-8228</span>
              </div>
             
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--secondary-foreground)/0.2)] pt-8 text-center">
          <p className="text-[hsl(var(--secondary-foreground)/0.6)]">
            {/* © 2024 FlowLean. All rights reserved. | Privacy Policy | Terms of Service */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;