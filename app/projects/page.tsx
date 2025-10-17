// app/projects/page.tsx

import { ProjectCard } from "@/components/ProjectCard";
import { getSortedProjectsData } from "@/lib/projects"; // Naya function import kiya

// Page component ko 'async' banaya gaya
export default async function ProjectsPage() {
  // 'await' ka istemal karke Supabase se data get kiya
  const allProjects = await getSortedProjectsData();

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Dark mode class hata di gayi hai */}
      <h1 className="text-4xl font-bold text-center mb-12 text-slate-800">
        My Projects
      </h1>
      {/* Check kiya ki projects hain ya nahi */}
      {allProjects && allProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hardcoded data ke bajaye 'allProjects' ka istemal kiya */}
          {allProjects.map((project) => (
            <ProjectCard
              key={project.id} // Key ko unique id se badla
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-500">
          No projects found yet. Please add some to your projects!
        </p>
      )}
    </div>
  );
}