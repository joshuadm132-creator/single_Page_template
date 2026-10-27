"use client"; // Required because we are using an interactive form with onClick/submit handlers

import { useState, FormEvent } from "react";
import { siteConfig } from "@/config/site";

export default function Contact() {
  const { contact } = siteConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get form data
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Format the message
    const text = `Hello Lorna, my name is ${name} (${email}).%0A%0A${message}`;
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${text}`;

    // Open in new tab
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-y-16 gap-x-16 lg:grid-cols-2">
          
          {/* LEFT COLUMN: Contact Info */}
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-blue sm:text-5xl">
              {contact.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {contact.subtitle}
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-brand text-white rounded-none">
                  <i className="fas fa-map-marker-alt" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue">Location</p>
                  <p className="text-base text-muted">{contact.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-brand text-white rounded-none">
                  <i className="fas fa-envelope" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue">Email</p>
                  <p className="text-base text-muted">{contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-[#25D366] text-white rounded-none">
                  <i className="fab fa-whatsapp text-xl" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-blue">WhatsApp</p>
                  <p className="text-base text-muted">Direct message via form</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="bg-ink-soft p-8 sm:p-10 rounded-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-blue">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-ink px-4 py-3 text-surface focus:outline-none focus:ring-2 focus:ring-brand rounded-none"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-blue">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-ink px-4 py-3 text-surface focus:outline-none focus:ring-2 focus:ring-brand rounded-none"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-blue">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-ink px-4 py-3 text-surface focus:outline-none focus:ring-2 focus:ring-brand rounded-none resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-brand px-8 py-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark disabled:opacity-70 rounded-tl-md rounded-tr-md rounded-bl-md rounded-br-none"
              >
                {isSubmitting ? "Opening WhatsApp..." : "Send WhatsApp Message"}
                <i className="fab fa-whatsapp text-lg" aria-hidden="true" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}