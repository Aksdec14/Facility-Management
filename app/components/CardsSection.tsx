"use client";

import React from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const testimonials = [
  {
    description:
      "FusionEdge has completely streamlined how we manage facility requests across locations. Nothing gets lost anymore.",
    author: "Facility Manager, Corporate Campus",
  },
  {
    description:
      "The visibility we now have across assets and maintenance has significantly improved our response times.",
    author: "Operations Head, Manufacturing Unit",
  },
  {
    description:
      "From inventory tracking to work order management, everything is now structured and easy to manage.",
    author: "Admin Lead, Commercial Facility",
  },
];

const industries: string[] = [
  "Corporate Offices & Campuses",
  "Manufacturing & Industrial Facilities",
  "Healthcare & Hospitals",
  "Educational Institutions",
  "Retail & Commercial Spaces",
  "Real Estate & Property Management",
];

const transformations: string[] = [
  "Replace manual tracking with digital workflows",
  "Eliminate delays with real-time updates",
  "Improve compliance with audit-ready records",
  "Optimize costs with better resource planning",
];

/* ─── Unsplash placeholder images ─── */
const IMG = {
  office:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
  team: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  facility:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  meeting:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  warehouse:
    "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
};

/* ─── Shared dark overlay ─── */
const overlayClass =
  "absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/90 via-[#1E1B4B]/30 to-transparent";

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function CardsSection() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-16 lg:py-16">

      {/* ══════════════════════════════════════════════════════
          ROW 1
          Mobile  → stacked (1 col)
          md      → 2 col equal
          lg      → 3 col: [1fr  2fr]  (cell-2 spans 2)
         ══════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">

        {/* Cell 1 — Intro gradient card */}
        <div
          className="flex flex-col justify-between rounded-2xl p-6 text-white sm:p-8"
          style={{
            background: "linear-gradient(135deg, #4C1D95 0%, #0D9488 100%)",
            minHeight: "280px",
          }}
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-[#6EE7B7] sm:mb-4">
              Trusted by Facility Teams
            </p>
            <h2 className="text-xl font-semibold leading-snug sm:text-2xl">
              At FusionEdge, we are passionate about transforming how facilities
              are managed and maintained.
            </h2>
          </div>
          <p className="mt-5 text-sm text-white/70">
            Helping operations teams across industries run smarter, faster, and
            with full visibility.
          </p>
        </div>

        {/* Cell 2 — Large photo + Testimonial 1
            md: spans full row-2 width (2nd col)
            lg: spans 2 columns out of 3            */}
        <div
          className="relative overflow-hidden rounded-2xl md:col-span-1 lg:col-span-2"
          style={{ minHeight: "280px" }}
        >
          <Image
            src={IMG.office}
            alt="Corporate office facility"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
          />
          <div className={overlayClass} />
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8">
            <span className="mb-2 font-serif text-3xl leading-none text-[#10B981]">
              &ldquo;
             </span>
            <p className="max-w-lg text-base font-medium leading-relaxed text-white sm:text-lg md:text-xl">
              {testimonials[0].description}
            </p>
            <p className="mt-3 text-sm text-[#6EE7B7]">
              — {testimonials[0].author}
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          ROW 2
          Mobile  → stacked (1 col)
          sm      → 2 col
          lg      → 3 col equal
         ══════════════════════════════════════════════════════ */}
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

        {/* Cell 3 — Industries */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ minHeight: "260px" }}
        >
          <Image
            src={IMG.warehouse}
            alt="Industrial facility"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className={overlayClass} />
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
            <p className="mb-3 text-xs uppercase tracking-widest text-[#10B981]">
              Industries We Serve
            </p>
            <ul className="space-y-1">
              {industries.slice(0, 4).map((ind, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white">
                  <span className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10B981]" />
                  {ind}
                </li>
              ))}
              <li className="mt-1 text-xs text-white/50">
                + {industries.length - 4} more sectors
              </li>
            </ul>
          </div>
        </div>

        {/* Cell 4 — Testimonial 2 */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ minHeight: "260px" }}
        >
          <Image
            src={IMG.team}
            alt="Operations team"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className={overlayClass} />
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
            <span className="mb-3 self-start rounded-full bg-[#7C3AED]/80 px-2 py-1 text-[10px] uppercase tracking-widest text-white">
              Client Story
            </span>
            <p className="text-sm font-medium leading-relaxed text-white sm:text-base">
              &ldquo;{testimonials[1].description}&rdquo;
            </p>
            <p className="mt-2 text-xs text-[#6EE7B7]">
              — {testimonials[1].author}
            </p>
          </div>
        </div>

        {/* Cell 5 — Transformations + CTA */}
        <div
          className="relative overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-1"
          style={{ minHeight: "260px" }}
        >
          <Image
            src={IMG.meeting}
            alt="Facility management meeting"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/95 via-[#4C1D95]/60 to-[#0D9488]/20" />
          <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-[#10B981]">
                How We Transform
              </p>
              <ul className="space-y-2">
                {transformations.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-xs text-[#10B981]">✔</span>
                    <p className="text-xs leading-snug text-white">{t}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              <button className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-[#4C1D95] transition hover:opacity-90">
                Request Demo →
              </button>
              <button className="rounded-lg border border-white/60 px-4 py-2 text-xs text-white transition hover:bg-white/10">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          BOTTOM ROW — Testimonial 3 + CTA banner
          Mobile  → stacked
          md+     → 2 col
         ══════════════════════════════════════════════════════ */}
      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">

        {/* Testimonial 3 */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ minHeight: "200px" }}
        >
          <Image
            src={IMG.facility}
            alt="Commercial facility"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={overlayClass} />
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
            <span className="mb-2 self-start rounded-full bg-[#0D9488]/80 px-2 py-1 text-[10px] uppercase tracking-widest text-white">
              Client Story
            </span>
            <p className="text-sm font-medium leading-relaxed text-white">
              &ldquo;{testimonials[2].description}&rdquo;
            </p>
            <p className="mt-2 text-xs text-[#6EE7B7]">
              — {testimonials[2].author}
            </p>
          </div>
        </div>

        {/* CTA gradient banner */}
        <div
          className="flex flex-col justify-between rounded-2xl p-5 text-white sm:p-6"
          style={{
            background: "linear-gradient(135deg, #3B1FA8 0%, #0D9488 100%)",
            minHeight: "200px",
          }}
        >
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-[#6EE7B7]">
              Ready to get started?
            </p>
            <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
              Transform your facility operations today.
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Whether you manage one building or multiple locations, FusionEdge
              can be tailored to your needs.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
            <button className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-[#4C1D95] transition hover:opacity-90">
              Request Demo →
            </button>
            <button className="rounded-lg border border-white/60 px-4 py-2 text-xs text-white transition hover:bg-white/10">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}