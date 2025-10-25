// app/project-unavailable/page.tsx

import Link from "next/link";

// Simple lock icon SVG
const LockIcon = () => (
  <svg className="h-16 w-16 text-slate-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export default function ProjectUnavailablePage() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[calc(100vh-250px)] flex flex-col items-center justify-center text-center">
      <LockIcon />
      <h1 className="text-4xl font-bold text-slate-800 mb-6">
        Project Under NDA
      </h1>
      {/* Paragraph updated with highlighted text */}
      <p className="max-w-2xl text-lg text-slate-600 mb-8">
        Specific details of this project are protected under a Non-Disclosure Agreement (NDA), a commitment I strictly adhere to. The work involved <strong>navigating complex challenges</strong> to deliver <strong>substantial business value</strong> for the client. While I cannot share specifics due to confidentiality, I am keen to discuss how the <strong>problem-solving approach and technical expertise</strong> applied in this project can directly contribute to achieving <strong>your specific business goals</strong>. <strong>Let&apos;s schedule a brief call</strong> to explore how I can bring similar value to your project.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
         <Link
          href="/#contact"
          className="cursor-pointer rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700"
        >
          Discuss Your Project
        </Link>
        <Link
          href="/projects"
          className="cursor-pointer rounded-lg border border-slate-400 px-8 py-3 font-semibold text-slate-800 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-slate-100"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}