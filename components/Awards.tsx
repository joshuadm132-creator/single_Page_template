import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

export default function Awards() {
  const { awards } = siteConfig;

  return (
    <section id="awards" className="bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-blue sm:text-5xl">
              {awards.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              {awards.subtitle}
            </p>
          </div>
        </Reveal>

        {/* Awards Grid */}
        <Reveal>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-2">
            {awards.items.map((award, index) => (
              <div
                key={index}
                className="group relative flex items-start gap-6 border-b border-surface/10 pb-8"
              >
                {/* Icon Container (Sharp corners) */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-ink text-xl text-brand rounded-none">
                  <i className={`fas ${award.icon}`} aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <span className="mb-1 text-sm font-bold uppercase tracking-wider text-brand">
                    {award.year}
                  </span>
                  <h3 className="text-xl font-semibold text-blue">
                    {award.title}
                  </h3>
                  <p className="mt-1 text-base text-muted">
                    {award.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
