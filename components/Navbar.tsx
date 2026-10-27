"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const { nav } = siteConfig;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-ink/90 backdrop-blur-md border-b border-surface/5">
      {/* 
        Desktop: 3-column grid for perfect centering. 
        Mobile: flex layout.
      */}
      <div className="mx-auto flex h-14 max-w-[90rem] items-center justify-between px-6 md:grid md:grid-cols-3 md:justify-items-center lg:px-12">
        
        {/* Logo - Far Left (Desktop) / Left (Mobile) */}
        <div className="justify-self-start">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-serif text-3xl font-black tracking-tighter text-brand-dark"
          >
            {nav.logoText}
          </Link>
        </div>

        {/* Center Links - Centered relative to the entire Navbar (Desktop Only) */}
        <ul className="hidden items-center justify-center gap-10 md:flex">
          {nav.links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-surface/80 transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 
          Right Side: 
          Desktop - Empty column to balance the grid + CTA button
          Mobile - Hamburger Button 
        */}
        <div className="flex items-center justify-end w-full justify-self-end">
          
         

          {/* Mobile Toggle Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center text-2xl text-surface transition-colors hover:text-brand md:hidden rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-ink border-b border-surface/5 shadow-lg md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-surface/80 transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
            
           
          </div>
        </div>
      )}
    </nav>
  );
}