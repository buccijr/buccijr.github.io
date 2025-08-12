import { Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useState } from "react";
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

const Pricing = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "All Core Features",
        'Up to 500 transactions per month',
        "Up to 5 team members",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "Best for growing businesses",
     features: [
        "All Core Features",
        'Up to 1000 transactions per month',
       
        "Up to 15 team members",
        "CSV Download Access",
      ],
      popular: true,
      buttonText: "Get Started",
    },
    {
      name: "Unlimited",
      price: "$149",
      period: "/month",
      description: "For enterprises with unlimited needs",
      features: [
        "All Core Features",
        "Unlimited transactions per month",
       
        "Unlimited team members",
        "CSV Download Access",
      ],
      popular: false,
      buttonText: "Get Started",
    },
  ];


  const navigate = useNavigate();

  const handleClick = (planName: string) => {
   
    navigate('/billing', { state: { plan: planName } });
  };

  return (
    
  <section
  id='pricing'
  ref={ref}
  className={`py-24 transition-all duration-700 ease-out
    bg-[linear-gradient(to_bottom, hsl(var(--background)), hsl(var(--muted)/0.2))]
    ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-13"}`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-[hsl(var(--foreground))]">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-[hsl(var(--muted-foreground))]">
            Choose the perfect plan for your business needs. All plans include our core features with scalable
            limits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative transition-all duration-300 ${
                plan.popular
                  ? "border-[hsl(var(--primary))] shadow-lg scale-105"
                  : "border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.5)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-[hsl(var(--foreground))]">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-[hsl(var(--muted-foreground))]">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[hsl(var(--foreground))]">{plan.price}</span>
                  <span className="text-[hsl(var(--muted-foreground))]">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 shrink-0 mt-0.5 text-[hsl(var(--primary))]" />
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full cursor-pointer ${
                    plan.popular ? "bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)]" : "variant-outline"
                  }`}
                  variant={plan.popular ? "default" : "outline"}

                  onClick={() => handleClick(plan.name)}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-[hsl(var(--muted-foreground))]">
            Yearly subscriptions availible at a discount.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;