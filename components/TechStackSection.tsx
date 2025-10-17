// components/TechStackSection.tsx

"use client";

import { TechStackCard } from "./TechStackCard";
import type { TechItem } from "@/lib/techStack";

type TechStackSectionProps = {
  techStackData: TechItem[];
};

export function TechStackSection({ techStackData }: TechStackSectionProps) {
  
  // Naya, behtar scroll function
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    // Header ki height 64px hai (h-16)
    const headerHeight = 64; 

    if (element) {
      // Element ki position get ki
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      // Viewport ki height get ki
      const viewportHeight = window.innerHeight;

      // Center mein laane ke liye scroll position calculate ki
      const scrollToPosition = elementPosition - (viewportHeight / 2) + (element.offsetHeight / 2) - (headerHeight / 2);

      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 border-t border-orange-200/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-slate-800">
          My Core Technologies
        </h2>

        {/* QUICK-LINK BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {techStackData.map((tech) => (
            <button
              key={`btn-${tech.id}`}
              onClick={() => handleScroll(tech.name.toLowerCase().replace(/\s/g, '-'))}
              className="cursor-pointer rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-200 hover:scale-105"
            >
              {tech.name}
            </button>
          ))}
        </div>

        {/* TECH STACK CARDS */}
        {techStackData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStackData.map((tech) => (
              <TechStackCard
                key={tech.id}
                id={tech.name.toLowerCase().replace(/\s/g, '-')} 
                name={tech.name}
                description={tech.description}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">No tech stack items found yet.</p>
        )}
      </div>
    </section>
  );
}