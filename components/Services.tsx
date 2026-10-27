import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
export default function Services() {
  const { services } = siteConfig;

  return (
    <section id="services" className="bg-ink-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-blue sm:text-5xl">
            {services.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            {services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <Reveal>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {services.items.map((service) => (
              <div
                id={service.id}
                key={service.id}
                className="group relative flex flex-col bg-ink p-8 shadow-sm ring-1 ring-surface/5 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-surface/10 rounded-tl-xl rounded-tr-4xl rounded-bl-4xl rounded-br-none"
              >
                {/* Icon Container - Non-clickable, sharp corners */}
                <div className="flex gap-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center bg-ink-soft text-2xl text-surface/70 transition-colors group-hover:bg-brand group-hover:text-white rounded-none">
                    <i className={`fas ${service.icon}`} aria-hidden="true" />
                  </div>
                  {/* Text Content */}
                  <h3 className="text-xl font-semibold text-blue">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
