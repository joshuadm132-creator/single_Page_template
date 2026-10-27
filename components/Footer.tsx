import Link from "next/link";
import { siteConfig } from "@/config/site";
import { connection } from "next/server";
export default async function Footer() {
  // 3. Tell Next.js to render this at request time
  await connection(); 
  
  const { footer, nav, hero } = siteConfig;
 
    return (
    // Changed background to deep espresso (bg-surface)
    <footer className="bg-surface border-t border-white/10 text-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          
          <div>
            <Link href="/" className="font-serif text-4xl font-black tracking-tighter text-brand">
              {nav.logoText}
            </Link>
            {/* Changed text-muted to a lighter cream for dark background */}
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink/70">
              Strategic Programs and Portfolio Leader based in Harare, Zimbabwe. Delivering measurable impact across multi-stakeholder environments.
            </p>
          </div>

          <div className="lg:pl-12">
            {/* Changed text-blue to a lighter warm tone for contrast */}
            <blockquote className="font-serif text-2xl font-medium leading-snug text-ink sm:text-3xl">
              "{footer.quote}"
            </blockquote>
            <p className="mt-4 text-sm font-bold uppercase tracking-widest text-brand">
              {footer.author}
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center">
          
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {hero.socials.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                aria-label="Social link"
                // Updated for dark bg: bg-white/10, text-ink
                className="flex h-10 w-10 items-center justify-center bg-white/10 text-ink transition-all hover:-translate-y-1 hover:bg-brand hover:text-white rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-none"
              >
                <i className={`fab ${social.icon}`} />
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs md:flex-row">
          <p className="text-ink/60">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
          
          <p className="text-ink/60">
            Designed by{" "}
            <a 
              href={footer.designedBy.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-ink transition-colors hover:text-brand"
            >
              {footer.designedBy.name}
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}