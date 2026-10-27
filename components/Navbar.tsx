import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const { nav } = siteConfig;

  return (
    <nav className="fixed top-0 z-30 w-full bg-ink/90 backdrop-blur-md">
      {/* Updated layout to grid to ensure true middle alignment for links */}
      <div className="mx-auto grid h-13 max-w-[90rem] grid-cols-3 items-center px-6 lg:px-12">
        {/* Logo - Far Left */}
        <div className="justify-self-start">
          <Link
            href="/"
            className="font-serif text-3xl font-black tracking-tighter text-brand-dark"
          >
            {nav.logoText}
          </Link>
        </div>

        {/* Center Links - Centered relative to the entire Navbar */}
        <ul className="hidden items-center justify-center gap-10 justify-self-center md:flex">
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

        {/* Empty Column to balance the grid for perfect center alignment */}
        <div className="hidden md:block" />
      </div>
    </nav>
  );
}