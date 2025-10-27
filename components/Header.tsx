// components/Header.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // State manage karne ke liye

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 w-full 
                 bg-gradient-to-r from-white via-orange-100 to-orange-200 "
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          onClick={() => setIsMobileMenuOpen(false)} // Logo click par menu band karein
          className="text-2xl font-extrabold cursor-pointer text-slate-900 transition-transform duration-300 hover:scale-105"
        >
          MyPortfolio
        </Link>

        {/* Desktop Navigation (md screen se badi par dikhega) */}
        <nav className="hidden md:flex items-center gap-2 sm:gap-4">
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
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button (md screen se chhoti par dikhega) */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="p-2 rounded-md text-slate-800 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
          >
            {/* Simple Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> // Close icon
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /> // Hamburger icon
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 right-0 z-40">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            <Link 
              href="/projects" 
              onClick={toggleMobileMenu}
              className={`block cursor-pointer rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-slate-100
                ${pathname === '/projects' ? 'text-blue-600' : 'text-slate-800'}`}
            >
              Projects
            </Link>
            <Link 
              href="/blog" 
              onClick={toggleMobileMenu}
              className={`block cursor-pointer rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-slate-100
                ${pathname.startsWith('/blog') ? 'text-blue-600' : 'text-slate-800'}`}
            >
              Blog
            </Link>
            <Link 
              href="/#contact" 
              onClick={toggleMobileMenu}
              className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium transition-colors text-slate-800 hover:bg-slate-100"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}