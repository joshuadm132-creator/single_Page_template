import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { footer, nav, hero } = siteConfig;

  return (
    <footer className="bg-ink-soft border-t border-surface/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          
          {/* Brand & Tagline */}
          <div className="max-w-xs text-center md:text-left">
            <Link href="/" className="font-serif text-3xl font-black tracking-tighter text-brand">
              {nav.logoText}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {footer.tagline}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-surface/80 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons (Clickable = Chamfered corners) */}
          <div className="flex items-center gap-4">
            {hero.socials.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center bg-ink text-surface/70 shadow-sm transition-all hover:-translate-y-1 hover:bg-brand hover:text-white rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-none"
              >
                <i className={`fab ${social.icon}`} />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-surface/10 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted">
            {footer.copyright}
          </p>
          <p className="text-sm text-muted">
            Based in Harare, Zimbabwe
          </p>
        </div>

      </div>
    </footer>
  );
}
