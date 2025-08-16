
import {  ArrowLeft, ArrowRight,  } from "lucide-react";
import { useEffect, useState, } from "react";
import {CardContent } from "../components/ui/card";

const Tutorials = () => {
  const [currentTutorial, setCurrentTutorial] = useState(0);

  const tutorials = [
'https://www.youtube.com/embed/wtMubi1by3o', 
'https://www.youtube.com/embed/rCg-mEqhWkQ',



'https://www.youtube.com/embed/bdJjJ_2tYn0',
'https://www.youtube.com/embed/GN03x_qdDjU',
'https://www.youtube.com/embed/ZJV9nkVy5_c', 
'https://www.youtube.com/embed/1NqteyAkJIU',
'https://www.youtube.com/embed/YdLv0m-QVpk',
'https://www.youtube.com/embed/6ybBeSJH6GQ',
'https://www.youtube.com/embed/E2ByO0f1iCo',


'https://www.youtube.com/embed/mHdVvFue2lo',


  ];

  
  const [count, setCount] = useState(0);
  useEffect (() => {
setCurrentTutorial(count)
  }, [count]
  );
 

 

  return (
    <section id='tutorials' className="py-20 bg-[hsl(var(--muted)/0.3)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
           See{" "}
            <span className="text-[hsl(var(--primary))] mr-1.5">FlowLean</span>
            in Action
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
           Discover how FlowLean works
          </p>
        </div>
        
<div className="flex items-center justify-center lg:gap-10 sm:gap-3 gap-1 md:gap-8 w-full">
  <button
    className="text-black hover:text-blue-500 lg:p-2 md:p-2 sm:p-0.5"
    onClick={() => setCount(count === 0 ? tutorials.length - 1 : count - 1)}
  >
    <ArrowLeft size={28} className="cursor-pointer lg:scale-110" />
  </button>

  <div className="w-full max-w-5xl   md:p-3 lg:p-4">
   
      <CardContent className="p-2 md:p-8">
       
        <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
          <iframe
            src={tutorials[count]}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-md"
          />
        </div>
      </CardContent>
 
  </div>

  <button
    className="text-black hover:text-blue-500 lg:p-2  md:p-2  sm:p-0.5"
    onClick={() => setCount(count === tutorials.length-1 ? 0 : count + 1)}
  >
    <ArrowRight size={28} className="cursor-pointer lg:scale-110" />
  </button>
</div>
          <div className="flex justify-center mt-8 space-x-2">
            {tutorials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCount(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTutorial === index
                    ? "bg-[hsl(var(--primary))] scale-125"
                    : "bg-[hsl(var(--muted-foreground)/0.3)] hover:bg-[hsl(var(--muted-foreground)/0.5)]"
                }`}
              />
            ))}
          </div>
        
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Empty placeholders - you can fill these if needed */}
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[hsl(var(--primary))]"></div>
            <div className="text-[hsl(var(--muted-foreground))]"></div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[hsl(var(--primary))]"></div>
            <div className="text-[hsl(var(--muted-foreground))]"></div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[hsl(var(--primary))]"></div>
            <div className="text-[hsl(var(--muted-foreground))]"></div>
          </div>
        </div>
    
    </section>
  );
};

export default Tutorials;
