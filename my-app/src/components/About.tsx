import { Card, CardContent } from "../components/ui/card";
import { Target, Lightbulb, Users2, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description:
        "We focus on delivering exact solutions that eliminate waste and optimize every process."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Continuously evolving our platform with cutting-edge lean manufacturing principles."
    },
    {
      icon: Users2,
      title: "Collaboration",
      description:
        "Building bridges between teams and processes for seamless communication."
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to helping our clients achieve operational excellence through lean methodologies."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--background))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
              About
              <span className="text-[hsl(var(--primary))]"> FlowLean Solutions</span>
            </h2>

            <div className="space-y-6 leading-relaxed text-[hsl(var(--muted-foreground))]">
              <p className="text-lg">
                We are passionate about transforming manufacturing operations through the power of lean
                principles. Our mission is to eliminate waste, optimize material flow, and create seamless
                communication between all aspects of your production process.
              </p>
              <p>
                Founded by industry experts with decades of experience in lean manufacturing and process
                optimization, FlowLean was born from the need to bridge the communication gap between processes
                and material handling. We understand the challenges of modern manufacturing and have developed
                a solution that addresses them head-on.
              </p>
              <p>
                Our platform doesn't just automate processes—it transforms how teams think about efficiency,
                collaboration, and continuous improvement. By implementing our solution, companies typically
                see significant reductions in waste, improved communication flow, and enhanced overall
                productivity.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">{/* Add content if needed */}</div>
                <div className="text-sm text-[hsl(var(--muted-foreground))]">{/* Add content if needed */}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--primary))] mb-2">{/* Add content if needed */}</div>
                <div className="text-sm text-[hsl(var(--muted-foreground))]">{/* Add content if needed */}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 {values.map((value, index) => (
    <Card
      key={index}
      className="border-0 shadow-md hover:shadow-[0_8px_20px_rgba(96,165,250,0.5)] transition-all duration-300 group cursor-pointer"
    >
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 bg-[linear-gradient(135deg,_hsl(var(--primary)),_hsl(var(--primary-glow)))] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <value.icon className="h-6 w-6 text-[hsl(var(--primary-foreground))]" />
        </div>
        <h3 className="text-lg font-semibold mb-3 text-[hsl(var(--foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
          {value.title}
        </h3>
        <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
          {value.description}
        </p>
      </CardContent>
    </Card>
  ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;