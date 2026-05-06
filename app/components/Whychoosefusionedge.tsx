"use client";

import { useState, useEffect, useRef, RefObject, ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────── */
interface Benefit {
  icon: ReactNode;
  label: string;
  desc: string;
  accent: string;
}

interface Logo {
  name: string;
  abbr: string;
}

interface StatCard {
  num: string;
  sub: string;
  color: string;
  icon: string;
  delay: string;
  borderColor: string;
  shadowColor: string;
}

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const benefits: Benefit[] = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    label: "Centralized Operations",
    desc: "Manage all facility activities from one unified system",
    accent: "#5D1F73",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    label: "Real-Time Visibility",
    desc: "Track assets, tasks, and inventory instantly",
    accent: "#1ABC9C",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Improved Efficiency",
    desc: "Reduce delays, errors, and manual effort across teams",
    accent: "#5D1F73",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: "Data-Driven Decisions",
    desc: "Use real-time insights to optimize your operations",
    accent: "#1ABC9C",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    label: "Scalable Platform",
    desc: "Built for single sites to multi-location enterprises",
    accent: "#5D1F73",
  },
];

const logos: Logo[] = [
  { name: "NovaBuild",    abbr: "NB" },
  { name: "CoreMed",      abbr: "CM" },
  { name: "AeroSpace Co.",abbr: "AS" },
  { name: "GreenCampus",  abbr: "GC" },
  { name: "PeakMfg",      abbr: "PM" },
  { name: "UrbanPlex",    abbr: "UP" },
  { name: "Velociti",     abbr: "VE" },
  { name: "NexaGroup",    abbr: "NG" },
];

const sectors = ["Enterprises", "Hospitals", "Campuses", "Manufacturing", "Commercial"];

const STAT_CARDS: StatCard[] = [
  { num: "99.9%", sub: "Uptime SLA",          color: "#5D1F73", icon: "🔒", delay: "0s",   borderColor: "rgba(93,31,115,0.12)",  shadowColor: "rgba(93,31,115,0.08)"  },
  { num: "50K+",  sub: "Assets Managed",      color: "#1ABC9C", icon: "📦", delay: "0.1s", borderColor: "rgba(26,188,156,0.12)", shadowColor: "rgba(26,188,156,0.08)" },
  { num: "40%",   sub: "Faster Resolution",   color: "#5D1F73", icon: "⚡", delay: "0.2s", borderColor: "rgba(93,31,115,0.12)",  shadowColor: "rgba(93,31,115,0.08)"  },
  { num: "24/7",  sub: "Live Support",        color: "#1ABC9C", icon: "💬", delay: "0.3s", borderColor: "rgba(26,188,156,0.12)", shadowColor: "rgba(26,188,156,0.08)" },
];

/* ─────────────────────────────────────────────────────────────
   HOOK – intersection observer
───────────────────────────────────────────────────────────── */
function useInView(ref: RefObject<HTMLDivElement | null>, rootMargin = "0px") {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
}
/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function WhyChooseFusionEdge() {
  const heroRef  = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  const heroVisible  = useInView(heroRef);
  const cardsVisible = useInView(cardsRef);
  const trustVisible = useInView(trustRef);

  const [activeSector, setActiveSector] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveSector(s => (s + 1) % sectors.length), 1800);
    return () => clearInterval(t);
  }, []);

  /* shared transition helper */
  const fadeIn = (visible: boolean, delay = "0s") =>
    ({
      opacity:    visible ? 1 : 0,
      transform:  visible ? "none" : "translateY(30px)",
      transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
    } as React.CSSProperties);

  return (
    <section className="relative w-full overflow-hidden bg-white font-[\'Plus_Jakarta_Sans\',sans-serif]">

      {/* ── subtle grid ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(93,31,115,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(93,31,115,0.04) 1px,transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── top ambient glow ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse,rgba(93,31,115,0.07) 0%,transparent 70%)" }}
      />

      {/* ═══════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════ */}
      <div
        ref={heroRef}
        className="relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24"
        style={fadeIn(heroVisible)}
      >
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* Left copy */}
          <div className="w-full lg:w-[52%] lg:max-w-[600px]">

            {/* Eyebrow */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 sm:mb-7"
              style={{
                background: "linear-gradient(135deg,rgba(93,31,115,0.07),rgba(26,188,156,0.07))",
                borderColor: "rgba(93,31,115,0.15)",
              }}
            >
              <div
                className="flex h-[22px] w-[22px] items-center justify-center rounded-full"
                style={{ background: "linear-gradient(135deg,#5D1F73,#1ABC9C)" }}
              >
                <svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.04em] text-[#5D1F73] sm:text-[12.5px]">
                Why FusionEdge?
              </span>
            </div>

            {/* Headline */}
            <h2 className="mb-4 tracking-tight sm:mb-5">
              <span className="block text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.05] text-[#0d0b2b]">
                Why Choose
              </span>
              <span
                className="block text-[clamp(32px,5vw,58px)] font-extrabold leading-[1.05]"
                style={{
                  background: "linear-gradient(135deg,#5D1F73 30%,#1ABC9C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                FusionEdge?
              </span>
            </h2>

            {/* Body */}
            <p className="mb-8 max-w-[500px] text-[14px] leading-relaxed text-gray-500 sm:text-[16px]">
              Modern facilities require more than manual tracking and disconnected tools.
              FusionEdge brings{" "}
              <strong className="font-bold text-[#0d0b2b]">everything together</strong> in one
              intelligent platform — built to scale with your enterprise.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <button
                className="group flex items-center gap-2 rounded-xl border-none px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] sm:px-7 sm:py-3.5"
                style={{
                  background: "linear-gradient(135deg,#5D1F73,#1ABC9C)",
                  boxShadow: "0 8px 28px rgba(93,31,115,0.35)",
                }}
              >
                Request Demo
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="flex items-center gap-2 rounded-xl border-[1.5px] border-[#e0d5ed] bg-white px-6 py-3 text-sm font-bold text-[#5D1F73] transition-all duration-200 hover:border-[#5D1F73] hover:bg-purple-50 active:scale-[0.97] sm:px-7 sm:py-3.5">
                Learn More →
              </button>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="flex w-full flex-col gap-3 sm:gap-4 lg:flex-1 lg:items-end">
            {STAT_CARDS.map((s, i) => (
              <div
                key={i}
                className="flex w-full items-center gap-4 rounded-2xl bg-white p-4 sm:w-auto sm:min-w-[240px] sm:p-5"
                style={{
                  border: `1.5px solid ${s.borderColor}`,
                  boxShadow: `0 4px 24px ${s.shadowColor}`,
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "none" : "translateX(30px)",
                  transition: `opacity 0.7s ease ${s.delay}, transform 0.7s ease ${s.delay}`,
                }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                  style={{ background: `${s.color}12` }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="m-0 text-2xl font-extrabold leading-none tracking-tight" style={{ color: s.color }}>
                    {s.num}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-gray-400">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          BENEFITS CARDS
      ═══════════════════════════════════════════ */}
      <div
        ref={cardsRef}
        className="relative z-10 border-y px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-20"
        style={{
          background: "linear-gradient(135deg,#f8f5fc 0%,#f0fdf9 100%)",
          borderColor: "rgba(93,31,115,0.08)",
        }}
      >
        <div className="mx-auto max-w-[1280px]">

          {/* Section label */}
          <div className="mb-10 text-center sm:mb-12">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.1em] text-[#1ABC9C] sm:text-xs">
              Platform Capabilities
            </p>
            <h3
              className="text-[clamp(22px,3vw,36px)] font-extrabold leading-tight tracking-tight text-[#0d0b2b]"
            >
              Everything your facility needs,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#5D1F73,#1ABC9C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                in one place
              </span>
            </h3>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-5">
            {benefits.map((b, i) => (
              <BenefitCard key={i} benefit={b} index={i} visible={cardsVisible} />
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          TRUST BANNER
      ═══════════════════════════════════════════ */}
      <div
        ref={trustRef}
        className="relative z-10 mx-auto max-w-[1280px] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24"
        style={fadeIn(trustVisible)}
      >
        {/* Header */}
        <div className="mb-10 text-center sm:mb-14">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#5D1F73] sm:text-xs">
            Trusted Globally
          </p>
          <h3 className="mb-4 text-[clamp(24px,3.2vw,40px)] font-extrabold leading-[1.1] tracking-tight text-[#0d0b2b]">
            Trusted by Forward-Thinking
            <br />
            <span
              style={{
                background: "linear-gradient(135deg,#5D1F73,#1ABC9C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Enterprises Across the Globe
            </span>
          </h3>
          <p className="mx-auto max-w-[580px] text-sm leading-relaxed text-gray-500 sm:text-[15px]">
            Powering efficient facility operations across{" "}
            <span
              key={activeSector}
              className="inline-block font-bold text-[#1ABC9C]"
              style={{ animation: "fadeSwap 0.4s ease" }}
            >
              {sectors[activeSector]}
            </span>{" "}
            worldwide.
          </p>
        </div>

        {/* Logo grid */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:mb-12">
          {logos.map((logo, i) => (
            <LogoTile key={i} logo={logo} index={i} visible={trustVisible} />
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="relative overflow-hidden rounded-2xl p-7 sm:rounded-3xl sm:p-10 lg:p-12"
          style={{ background: "linear-gradient(135deg,#5D1F73 0%,#3d1450 50%,#1ABC9C 100%)" }}
        >
          {/* BG blobs */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%,rgba(255,255,255,0.06) 0%,transparent 50%),radial-gradient(circle at 80% 50%,rgba(255,255,255,0.06) 0%,transparent 50%)",
            }}
          />

          <div className="relative flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white/60 sm:text-xs">
                Ready to get started?
              </p>
              <h4 className="text-[clamp(20px,3vw,32px)] font-extrabold leading-[1.1] tracking-tight text-white">
                Transform your facility
                <br />operations today.
              </h4>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                className="flex items-center gap-2 rounded-xl border-none bg-white px-6 py-3 text-sm font-extrabold text-[#5D1F73] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
              >
                Request Demo →
              </button>
              <button
                className="rounded-xl border-[1.5px] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-white/20 active:scale-[0.97]"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── global styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        @keyframes fadeSwap {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .benefit-card {
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .benefit-card:hover {
          border-color: rgba(93,31,115,0.22) !important;
          box-shadow: 0 12px 40px rgba(93,31,115,0.1) !important;
          transform: translateY(-4px) !important;
        }
        .benefit-card:hover .accent-bar {
          opacity: 1 !important;
        }
        .accent-bar {
          transition: opacity 0.3s ease;
        }
        .logo-tile {
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .logo-tile:hover {
          border-color: rgba(93,31,115,0.3) !important;
          box-shadow: 0 8px 28px rgba(93,31,115,0.1) !important;
          transform: translateY(-3px) !important;
        }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT – benefit card
───────────────────────────────────────────────────────────── */
function BenefitCard({
  benefit: b,
  index: i,
  visible,
}: {
  benefit: Benefit;
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className="benefit-card relative cursor-default overflow-hidden rounded-[20px] border-[1.5px] bg-white p-6 sm:p-7"
      style={{
        borderColor: "rgba(93,31,115,0.08)",
        boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(30px)",
        transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
      }}
    >
      {/* Corner blob */}
      <div
        className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 rounded-full"
        style={{ background: `${b.accent}0d` }}
      />

      {/* Icon */}
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] border-[1.5px]"
        style={{
          background: `${b.accent}12`,
          borderColor: `${b.accent}20`,
          color: b.accent,
        }}
      >
        {b.icon}
      </div>

      {/* Index label */}
      <p
        className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.08em]"
        style={{ color: b.accent }}
      >
        0{i + 1}
      </p>

      <h4 className="mb-2.5 text-[15px] font-extrabold leading-snug text-[#0d0b2b]">
        {b.label}
      </h4>
      <p className="m-0 text-[13px] leading-relaxed text-gray-500">{b.desc}</p>

      {/* Bottom accent bar */}
      <div
        className="accent-bar absolute bottom-0 left-0 right-0 h-[3px] rounded-b-[20px] opacity-0"
        style={{ background: `linear-gradient(90deg,${b.accent},transparent)` }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT – logo tile
───────────────────────────────────────────────────────────── */
function LogoTile({
  logo,
  index: i,
  visible,
}: {
  logo: Logo;
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className="logo-tile flex cursor-default items-center gap-3.5 rounded-2xl border-[1.5px] border-[#ede8f5] bg-white p-4 sm:p-5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "scale(0.9)",
        transition: `opacity 0.6s ease ${i * 0.07}s, transform 0.6s ease ${i * 0.07}s`,
      }}
    >
      {/* Monogram */}
      <div
        className="grid h-11 w-11 shrink-0 place-items-center rounded-[10px] text-xs font-extrabold tracking-wide text-white"
        style={{
          background: i % 2 === 0
            ? "linear-gradient(135deg,#5D1F73,#8B3BA8)"
            : "linear-gradient(135deg,#1ABC9C,#16A085)",
        }}
      >
        {logo.abbr}
      </div>
      <div>
        <p className="m-0 text-[13px] font-bold text-[#0d0b2b] sm:text-sm">{logo.name}</p>
        <p className="mt-0.5 text-[11px] font-medium text-gray-400">Client</p>
      </div>
    </div>
  );
}