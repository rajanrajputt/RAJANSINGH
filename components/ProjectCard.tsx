// components/ProjectCard.tsx

import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  // Check karte hain ki link external hai ya internal
  const isExternal = link.startsWith("http");

  return (
    // Link component par conditional attributes add kiye gaye hain
    <Link 
      href={link} 
      // Agar link external hai, tabhi target="_blank" lagayenge
      target={isExternal ? "_blank" : "_self"} 
      // rel attribute bhi sirf external links ke liye zaroori hai
      rel={isExternal ? "noopener noreferrer" : undefined} 
      className="cursor-pointer group"
    >
      <div 
        className="p-6 h-full border rounded-lg transition-all duration-300 
                   bg-white 
                   border-slate-200 
                   hover:shadow-lg hover:-translate-y-1 
                   hover:border-blue-500"
      >
        <h3 
          className="text-2xl font-bold mb-2 
                     text-slate-800 
                     group-hover:text-blue-600 
                     transition-colors"
        >
          {title}
        </h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 text-xs font-medium rounded-full 
                         bg-teal-100 text-teal-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}