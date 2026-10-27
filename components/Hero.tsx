import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const { hero } = siteConfig;

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-5rem)] flex-col overflow-hidden bg-ink"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-1 items-center px-6 py-8 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-2">
          {/* LEFT COLUMN: Socials + Text */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Vertical Social Strip */}
            <div className="hidden flex-col gap-6 sm:flex">
              {hero.socials.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="text-xl text-surface/50 transition-colors hover:text-brand"
                  aria-label="Social link"
                >
                  <i className={`fab ${social.icon}`} />
                </a>
              ))}
            </div>

            {/* Text Content */}
            <div className="max-w-xl">
              {/* Credentials */}
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-brand">
                {hero.credentials}
              </p>

              {/* Headline split into role and name */}
              <h1 className="font-serif leading-[1.1]">
                {/* Smaller Role Headline */}
                <span className="block text-3xl font-semibold text-surface/80 sm:text-4xl lg:text-5xl">
                  {hero.headline}
                </span>
                {/* Large Name */}
                <span className="mt-2 block text-5xl font-bold text-blue sm:text-6xl lg:text-7xl">
                  {hero.name}
                </span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                {hero.tagline}
              </p>

              <a
                href={hero.cta.href}
                className="mt-8 inline-block bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark rounded-tl-md rounded-tr-xl rounded-bl-xl rounded-br-none"
              >
                {hero.cta.text}
              </a>

              {/* STATS ROW */}
              <div className="mt-8 flex flex-wrap items-center gap-8 border-t border-surface/10 pt-6 sm:gap-12">
                {hero.stats.map((stat) => (
                  <div key={stat.label}>
                    {/* Deep blue stats, ready for count-up animation */}
                    <p
                      className="font-serif text-3xl font-bold text-blue"
                      data-target={stat.value}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm font-medium text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Bleeding Image */}
          <div className="relative mt-12 flex h-full items-end justify-center lg:mt-0 lg:justify-end">
            <div className="relative h-[400px] w-full max-w-md sm:h-[500px] lg:h-[650px] lg:max-w-lg">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
