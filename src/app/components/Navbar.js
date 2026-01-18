"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Animation utility classes
  const linkStyles = `text-2xl tracking-[0.4em] uppercase font-bold transition-all duration-300 hover:text-accent transform 
    ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`;

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Main Nav Bar */}
      <nav className="relative z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-primary/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="font-display text-xl tracking-tighter cursor-pointer retro-text">
            {"<INIT>"}
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center space-x-12 text-sm font-medium tracking-widest uppercase">
            {["Home", "Projects", "Blog"].map((item) => {
              const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;

              return (
                <Link
                  key={item}
                  href={href}
                  className="transition-colors duration-300 hover:text-[#FF4D00]"
                >
                  {item}
                </Link>
              );
            })}
          </div>

          {/* Action Buttons & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* <Link href={"/login"} className="hidden sm:block bg-primary hover:text-[#FF4D00] text-white dark:bg-white dark:text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all">
              Login
            </Link> */}

            {/* Hamburger / Close Icon Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 flex items-center justify-center w-10 h-10 transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-md">
                {isOpen ? (
                  <span className="text-2xl font-bold text-[#FF4D00]">X</span>
                ) : (
                  "MENU"
                )}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Overlay */}
      <div
        className={`
        fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out
        ${
          isOpen
            ? "visible opacity-100 backdrop-blur-lg bg-background-light/40 dark:bg-background-dark/60"
            : "invisible opacity-0"
        }
      `}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 p-6">
          <Link
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: "100ms" }}
            className={linkStyles}
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: "300ms" }}
            className={linkStyles}
            href="/blog"
          >
            Blog
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: "200ms" }}
            className={linkStyles}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            href={"/login"}
            style={{ transitionDelay: "400ms" }}
            className={`bg-primary text-white dark:bg-white dark:text-black px-12 py-4 text-xs font-bold uppercase tracking-[0.3em] transition-all duration-500
            ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
