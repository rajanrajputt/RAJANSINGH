// components/Header.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header 
      // Gradient background vaapas add kiya, aur shadow bhi
      className="fixed top-0 left-0 right-0 z-50 w-full 
                 bg-gradient-to-r from-white via-orange-100 to-orange-200 "
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="text-2xl font-extrabold cursor-pointer text-slate-900 transition-transform duration-300 hover:scale-105"
        >
          MyPortfolio
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link 
            href="/projects" 
            className={`cursor-pointer rounded-md px-3 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white/50
              ${pathname === '/projects' ? 'text-blue-600' : 'text-slate-800'}`}
          >
            Projects
          </Link>
          <Link 
            href="/blog" 
            className={`cursor-pointer rounded-md px-3 py-2 text-lg font-medium transition-all duration-300 hover:scale-105 hover:bg-white/50
              ${pathname.startsWith('/blog') ? 'text-blue-600' : 'text-slate-800'}`}
          >
            Blog
          </Link>
          <Link 
            href="/#contact" 
            className="cursor-pointer rounded-lg px-4 py-2 text-lg font-semibold text-white shadow-lg transition-all duration-300 
                       bg-gradient-to-r from-orange-500 to-orange-400 
                       hover:scale-105 hover:from-orange-600 hover:to-orange-500
                       animate-pulse"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}