import Image from "next/image";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

export default function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
        <div className="grid grid-cols-1 gap-y-16 gap-x-16 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT COLUMN: Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            
            {/* Solid Brand Shadow Block (Non-clickable = Sharp Corners) */}
            <div className="absolute inset-0 translate-x-5 translate-y-5  bg-orange-300 rounded-sm" />
            
            {/* Image Container (Non-clickable = Sharp Corners) */} <Reveal>
            <div className="relative aspect-[4/5] w-full bg-brand shadow-md rounded-sm overflow-hidden">
            
              <Image
                src={about.image.src}
                alt={about.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
             
            </div> </Reveal>
          </div>

          {/* RIGHT COLUMN: Text Content */}
          <div className="max-w-xl lg:max-w-none">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-[#0a2856] sm:text-5xl">
              {about.title}
            </h2>
            
            <p className="mt-4 text-lg font-medium text-brand">
              {about.subtitle}
            </p>
            
            <div className="mt-6 space-y-6 text-base leading-relaxed text-muted">
              {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Clickable CTA (Chamfered corners) */}
            <div className="mt-10">
              <a
                href={about.cta.href}
                className="inline-flex items-center gap-2 bg-surface px-8 py-3.5 text-sm font-semibold text-ink shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-black rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-none"
              >
                {about.cta.text}
                <i className="fas fa-download text-xs" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>
        </Reveal>
      </div>
    </section>
  );
}