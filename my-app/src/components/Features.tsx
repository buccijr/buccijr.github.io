import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Forklift, MessageSquare, BarChart3, Clock, ArrowRight, Zap, Trash, TrendingDown, } from "lucide-react";
import { useEffect, useRef, useState } from "react";
export function useInView(options = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); 
        }
      },
      options
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}


const Features = () => {
      
  const features = [
    {
      icon: Forklift,
      title: "Process Integration",
      description:
        "Seamlessly connect all manufacturing processes with intelligent workflow automation and real-time coordination."
    },
    {
      icon: MessageSquare,
      title: "Enhanced Communication",
      description:
        "Bridge communication gaps between departments with automated alerts and streamlined information flow."
    },
    {
      icon: BarChart3,
      title: "Lean Analytics",
      description:
        "Monitor key metrics, identify bottlenecks, and optimize material flow with powerful analytics dashboards."
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description:
        "Track materials, processes, and deliveries in real-time to ensure optimal efficiency and quick response to changes."
    },
    {
      icon: TrendingDown,
      title: "Reduce Machine Downtime",
      description:
        "Keep machines running by eliminating material shortages and delays that stall production."
    },
    {
      icon: Trash,
      title: "Waste Reduction",
      description:
        "Reduce overproduction, excess handling, and material loss through synchronized flow and real-time tracking."
    }
  ];

  return (
    <section id="features" className="bg-[hsl(var(--muted)/0.3)] py-[80px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--foreground))]">
            Powerful Features for
            <span className="text-[hsl(var(--primary))]"> Lean Manufacturing</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[hsl(var(--muted-foreground))]">
            Our comprehensive solution provides everything you need to implement lean principles{" "}
            and optimize your material flow processes.
          </p>
        </div>

        {/* <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-opacity transition-transform duration-800 ease-out ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
        {features.map((feature, index) => (
          
  <Card
    key={index}
    className="border-0 shadow-md hover:shadow-[0_8px_20px_rgba(59,130,246,0.5)] transition-all duration-300 group cursor-pointer"
  >
    <CardHeader className="pb-4">
      <div className="w-12 h-12 bg-[linear-gradient(135deg,_hsl(var(--primary)),_hsl(var(--primary-glow)))] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <feature.icon className="h-6 w-6 text-[hsl(var(--primary-foreground))]" />
      </div>
      <CardTitle className="text-xl group-hover:text-[hsl(var(--primary))] transition-colors text-[hsl(var(--foreground))]">
        {feature.title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="leading-relaxed text-[hsl(var(--muted-foreground))]">{feature.description}</p>
    </CardContent>
  </Card>
))}
        </div> */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const { ref, isInView } = useInView({ threshold: 0.4 });
            return (
              <Card
                key={index}
                ref={ref}
                className={` group border-0 shadow-md hover:shadow-[0_8px_20px_rgba(59,130,246,0.5)] transition-all duration-700 ease-out
                  cursor-pointer
                  ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }
                `}
                style={{
                  transitionDelay: isInView ? `${index * 10}ms` : "0ms",
                }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-[linear-gradient(135deg,_hsl(var(--primary)),_hsl(var(--primary-glow)))] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-[hsl(var(--primary-foreground))]" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-[hsl(var(--primary))] transition-colors text-[hsl(var(--foreground))]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-[hsl(var(--muted-foreground))]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="relative rounded-2xl p-8 md:p-12 text-center py-[30px] overflow-hidden group ">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
           
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative max-w-3xl mx-auto">
            <Zap className="h-12 w-12 mx-auto mb-6 text-[hsl(var(--accent))]" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Transform Your Operations?</h3>
            <p className="mb-8 leading-relaxed text-white/90 text-lg">
              Begin with a
            free
              14 day trial! </p><a
  href="https://app.flowleansolutions.com/signup"
  target="_blank"
  rel="noopener noreferrer"
  className="flex flex-col sm:flex-row gap-4 justify-center "
>
 <button
  className="
    relative
    cursor-pointer
    inline-flex items-center justify-center
    px-8 py-3 text-lg font-medium
    h-[56px]
    duration-300
    rounded-lg
    bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-glow))]
    text-[hsl(var(--primary-foreground))]
    hover:shadow-[0_0_10px_rgba(255,255,255,0.35)]
    transition-all
    transform hover:scale-[1.03]
  "
>
  Get Free Trial
  <ArrowRight className="ml-2 h-5 w-5" />
</button>
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;