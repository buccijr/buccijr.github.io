// import { PlayCircle, Clock, ArrowLeft, ArrowRight } from "lucide-react";
// import { useEffect, useState, } from "react";
// import { Card, CardContent } from "../components/ui/card";
// import { Button } from "../components/ui/button"; 

// const Tutorials = () => {
//   const [currentTutorial, setCurrentTutorial] = useState(0);

//   const tutorials = [
//     {
//       title: "Getting Started with FlowLean",
//       description:
//         "Learn the basics of setting up your lean manufacturing workflows and connecting your teams for optimal material flow.",
//       duration: "8 minutes",
//       difficulty: "Beginner",
//       topics: ["Initial Setup", "User Management", "Basic Workflows"],
//     },
//     {
//       title: "Advanced Analytics & Reporting",
//       description:
//         "Discover how to leverage our powerful analytics dashboard to identify bottlenecks and optimize your manufacturing processes.",
//       duration: "12 minutes",
//       difficulty: "Intermediate",
//       topics: ["KPI Tracking", "Custom Reports", "Data Analysis"],
//     },
//     {
//       title: "Real-time Communication Setup",
//       description:
//         "Master the art of seamless communication between departments using automated alerts and streamlined information flow.",
//       duration: "15 minutes",
//       difficulty: "Advanced",
//       topics: ["Alert Configuration", "Team Integration", "Process Automation"],
//     },
//     {
//       title: "Quality Control Implementation",
//       description:
//         "Implement robust quality control measures with automated checks and lean principles embedded throughout your processes.",
//       duration: "10 minutes",
//       difficulty: "Intermediate",
//       topics: ["Quality Gates", "Automated Checks", "Lean Principles"],
//     },
//   ];

  
//   const [count, setCount] = useState(0);
//   useEffect (() => {
// setCurrentTutorial(count)
//   }, [count]
//   );
 

//   const getDifficultyColor = (difficulty: string) => {
//     switch (difficulty) {
//       case "Beginner":
//         return "text-[hsl(var(--green-600))] bg-[hsl(var(--green-100))]";
//       case "Intermediate":
//         return "text-[hsl(var(--blue-600))] bg-[hsl(var(--blue-100))]";
//       case "Advanced":
//         return "text-[hsl(var(--orange-600))] bg-[hsl(var(--orange-100))]";
//       default:
//         return "text-[hsl(var(--gray-600))] bg-[hsl(var(--gray-100))]";
//     }
//   };

//   return (
//     <section id='tutorials' className="py-20 bg-[hsl(var(--muted)/0.3)]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
//             Learn with Our{" "}
//             <span className="text-[hsl(var(--primary))]">Interactive Tutorials</span>
//           </h2>
//           <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
//             Master FlowLean with our comprehensive tutorial series designed to help
//             you implement lean manufacturing principles effectively.
//           </p>
//         </div>
        
// <div className="flex items-center justify-center gap-10">
//   <button  className="text-black hover:text-blue-500 p-2 " onClick={() => setCount(count == 0 ? 3 :count-1)}>
//             <ArrowLeft size={30} className="cursor-pointer"></ArrowLeft>
//             </button> 
//         <div className="max-w-4xl ">
//           <Card className="border-0 shadow-industrial bg-[hsl(var(--background))] relative overflow-hidden">
//             <CardContent className="p-8 md:p-12">
//               <PlayCircle className="h-12 w-12 text-[hsl(var(--primary)/0.2)] mb-6" />

//               <div className="min-h-[200px] flex flex-col justify-center">
//                 <div className="flex items-center gap-4 mb-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
//                       tutorials[currentTutorial].difficulty
//                     )}`}
//                   >
//                     {tutorials[currentTutorial].difficulty}
//                   </span>
//                   <div className="flex items-center text-[hsl(var(--muted-foreground))]">
//                     <Clock className="h-4 w-4 mr-1" />
//                     <span className="text-sm">{tutorials[currentTutorial].duration}</span>
//                   </div>
//                 </div>

//                 <h3 className="text-xl md:text-2xl text-[hsl(var(--foreground))] leading-relaxed mb-4 font-semibold">
//                   {tutorials[currentTutorial].title}
//                 </h3>

//                 <p className="text-[hsl(var(--muted-foreground))] text-lg mb-6 leading-relaxed">
//                   {tutorials[currentTutorial].description}
//                 </p>

//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {tutorials[currentTutorial].topics.map((topic, index) => (
//                     <span
//                       key={index}
//                       className="px-3 py-1 bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] rounded-lg text-sm"
//                     >
//                       {topic}
//                     </span>
//                   ))}
//                 </div>

//                 <button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-[hsl(var(--primary-foreground))] px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center w-fit">
//                   <PlayCircle className="mr-2 h-5 w-5" />
//                   Start Tutorial
//                 </button>
//               </div>
//             </CardContent>
//           </Card>
        
//           </div>
//          <button  className="text-black hover:text-blue-500 p-2 " onClick={() => setCount(count == 3 ? 0 :count+1)}>
//             <ArrowRight size={30} className="cursor-pointer"></ArrowRight>
//             </button> 
//           </div>
//           <div className="flex justify-center mt-8 space-x-2">
//             {tutorials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentTutorial(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   currentTutorial === index
//                     ? "bg-[hsl(var(--primary))] scale-125"
//                     : "bg-[hsl(var(--muted-foreground)/0.3)] hover:bg-[hsl(var(--muted-foreground)/0.5)]"
//                 }`}
//               />
//             ))}
//           </div>
        
//         </div>

//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//           {/* Empty placeholders - you can fill these if needed */}
//           <div className="space-y-2">
//             <div className="text-3xl font-bold text-[hsl(var(--primary))]"></div>
//             <div className="text-[hsl(var(--muted-foreground))]"></div>
//           </div>
//           <div className="space-y-2">
//             <div className="text-3xl font-bold text-[hsl(var(--primary))]"></div>
//             <div className="text-[hsl(var(--muted-foreground))]"></div>
//           </div>
//           <div className="space-y-2">
//             <div className="text-3xl font-bold text-[hsl(var(--primary))]"></div>
//             <div className="text-[hsl(var(--muted-foreground))]"></div>
//           </div>
//         </div>
    
//     </section>
//   );
// };

// export default Tutorials;

import {  ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, } from "react";
import { Card, CardContent } from "../components/ui/card";

const Tutorials = () => {
  const [currentTutorial, setCurrentTutorial] = useState(0);

  const tutorials = [
'https://www.youtube.com/embed/wtMubi1by3o', 'https://www.youtube.com/embed/ZJV9nkVy5_c', 
'https://www.youtube.com/embed/GN03x_qdDjU',
'https://www.youtube.com/embed/1NqteyAkJIU',
'https://www.youtube.com/embed/YdLv0m-QVpk',
'https://www.youtube.com/embed/6ybBeSJH6GQ',


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
        
<div className="flex items-center justify-center gap-10 w-full">
  <button
    className="text-black hover:text-blue-500 p-2"
    onClick={() => setCount(count === 0 ? tutorials.length - 1 : count - 1)}
  >
    <ArrowLeft size={30} className="cursor-pointer" />
  </button>

  <div className="w-full max-w-5xl px-4">
    <Card className="border-0 shadow-industrial bg-[hsl(var(--background))] w-full">
      <CardContent className="p-4 md:p-8">
       
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
    </Card>
  </div>

  <button
    className="text-black hover:text-blue-500 p-2"
    onClick={() => setCount(count === tutorials.length-1 ? 0 : count + 1)}
  >
    <ArrowRight size={30} className="cursor-pointer" />
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
