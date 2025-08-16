import { Button } from "../components/ui/button"; 
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "../assets/hero-manufacturing.jpg";
import { useState } from "react";
const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
const scrollToTutorials = () => {
    const element = document.getElementById('tutorials');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const [isHoveredd, setIsHoveredd,] = useState(false);
  return (
    <section 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    
    id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
        src={heroImage}
        alt="Hero"
        className="w-full h-full  object-cover transition-filter duration-500"
        style={{ filter: isHovered ? "brightness(0.8)" : "brightness(0.5)" }}
      />
        <div className="absolute inset-0 bg-gradient-steel opacity-50 hover:opacity-80 transition-opacity duration-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
        <h1
  className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${
    isHovered ? "text-white" : "text-[hsl(var(--primary-foreground))]"
  }`}
>
  Streamline Your
  <span className="ml-4 bg-gradient-to-r from-blue-800 to-yellow-400 bg-clip-text text-transparent">
    Material Flow
  </span>
  <br />
  with Lean Principles
</h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-[hsl(var(--primary-foreground)/0.9)]">
            Transform your manufacturing operations with intelligent communication between processes and material handling. Eliminate waste, optimize flow, and boost efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-1 justify-center items-center mb-10">
            <Button 
            onMouseEnter={() => setIsHoveredd(true)}
             onMouseLeave={() => setIsHoveredd(false)}
              size="lg" 
              className="group bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-glow))] text-[hsl(var(--primary-foreground))] shadow-industrial text-lg px-5 py-3 cursor-pointer
              transition-all duration-300 mb-2"
              onClick={scrollToFeatures}
            >
              Discover Features
            <ArrowRight
    className={` transform transition-all duration-300 
      ${isHoveredd ? 'opacity-100 translate-x-1' : 'opacity-0 -translate-x-1'}
    `}
  />
            </Button>
            <Button 
             onClick={scrollToTutorials}
              variant="outline" 
              size="lg"
              className=" border-[hsl(var(--primary-foreground)/0.4)] text-[hsl(var(--primary-foreground))] 
              
              hover:bg-[hsl(var(--primary-foreground)/0.3)] text-lg px-8 py-3 mb-2"
            >
              Watch Demo

            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[hsl(var(--primary-foreground)/0.9)]">
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="h-5 w-5 text-[hsl(var(--accent))] mr-2 flex-shrink-0" />
              <span>Improve material flow</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="h-5 w-5 text-[hsl(var(--accent))] mr-2 flex-shrink-0" />
              <span>Streamline communication</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="h-5 w-5 text-[hsl(var(--accent))] mr-2 flex-shrink-0" />
              <span>Real-time optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;