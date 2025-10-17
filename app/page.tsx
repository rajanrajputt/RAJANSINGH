// app/page.tsx

import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { getSortedProjectsData } from "@/lib/projects";
import { getTechStackData } from "@/lib/techStack";
import { TechStackSection } from "@/components/TechStackSection";
import { ContactForm } from "@/components/ContactForm";

// Social media icons
const GitHubIcon = () => ( <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>);
const LinkedInIcon = () => ( <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>);

export default async function HomePage() {
  const allProjects = await getSortedProjectsData();
  const techStackData = await getTechStackData();
  const featuredProjects = allProjects.slice(0, 3);

  return (
    <main>
      {/* Hero, Projects, Tech Stack sections yahan hain... */}
      <section className="container mx-auto flex min-h-[calc(100vh-150px)] flex-col items-center justify-center px-4 py-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">Building Digital Experiences That Drive Results</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-700 md:text-xl">I transform complex problems into elegant, user-friendly digital solutions. My focus is on building high-performance websites that not only look stunning but also deliver tangible value to your business.</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link href="/projects" className="cursor-pointer rounded-lg bg-slate-900 px-8 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105">See My Work</Link>
          <Link href="/blog" className="cursor-pointer rounded-lg border border-slate-300 px-8 py-3 font-semibold text-slate-800 shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-slate-50">Explore My Thoughts</Link>
        </div>
      </section>
      <section className="w-full py-20 border-t border-orange-200/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Featured Projects</h2>
          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => ( <ProjectCard key={project.id} title={project.title} description={project.description} tags={project.tags} link={project.link} /> ))}
            </div>
          ) : ( <p className="text-center text-slate-500">No featured projects available yet.</p> )}
          <div className="mt-16 text-center">
            <Link href="/projects" className="cursor-pointer rounded-lg border border-slate-400 px-8 py-3 font-semibold text-slate-800 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-slate-100">View All Projects</Link>
          </div>
        </div>
      </section>
      <TechStackSection techStackData={techStackData} />

      {/* CONTACT SECTION -- UPDATED */}
      <section id="contact" className="w-full py-20 scroll-mt-16 border-t border-orange-200/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Social Links -- Sizes aur spacing update ki gayi */}
            <div className="space-y-8 text-center md:text-left">
              <h3 className="text-8xl font-bold text-slate-900">Let's Connect</h3>
              <p className="text-lg md:text-xl text-slate-600">
                Have a project in mind or just want to chat? Fill out the form or find me on these platforms. I'm always open to discussing new ideas and opportunities.
              </p>
              <div className="flex justify-center md:justify-start gap-8 pt-4">
                <Link href="#" className="text-slate-600 hover:text-slate-900 transition-colors"><GitHubIcon /></Link>
                
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}