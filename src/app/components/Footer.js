"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    // This ensures the date only renders on the client side
    setTime(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-footer text-white py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand and Socials */}
        <div className="md:col-span-2">
          <span className="font-display text-2xl tracking-tighter mb-6 block retro-text">
            {"<INITCODES>"}
          </span>
          <p className="max-w-md opacity-60 leading-relaxed text-sm font-mono tracking-wider">
            Defining the intersection of art and engineering. Based in the
            digital ether, delivering across all time zones.
          </p>
          <div className="mt-8 flex space-x-6">
            <Link href="#" className="hover:text-accent transition-colors">
              {/* icon name must be lowercase: "share" */}
              <span className="material-symbols-outlined hover:text-[#e77544]">share</span>
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              <span className="material-symbols-outlined hover:text-[#e77544]">email</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/init-codes-106141389/"
              className="hover:text-[#e77544] transition-colors"
            >
              <i className="fa-brands fa-linkedin text-xl"></i>
            </Link>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h5 className="font-bold uppercase tracking-[0.3em] text-xs mb-8 text-white/40">
            Explore
          </h5>
          <ul className="space-y-4 text-sm font-mono tracking-widest">
            <li>
              <Link className="hover:text-accent hover:text-[#e77544] transition-colors" href="#">
                Manifesto
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-accent hover:text-[#e77544] transition-colors"
                href="#projects"
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent hover:text-[#e77544] transition-colors" href="#">
                Open Source
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent hover:text-[#e77544] transition-colors" href="#">
                Careers
              </Link>
            </li>
             <li>
              <Link className="hover:text-accent hover:text-[#e77544] transition-colors" href="/login">
              ADMIN Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Status Column */}
        <div>
          <h5 className="font-bold uppercase tracking-[0.3em] text-xs mb-8 text-white/40">
            Status
          </h5>
          <div className="flex items-center space-x-3 text-sm font-mono uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="opacity-80">All Systems Operational</span>
          </div>
          <p className="mt-12 text-[10px] opacity-40 uppercase tracking-[0.2em] leading-loose">
            © {time || "2026"} INITCODES. <br />
            ALL BYTES RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
