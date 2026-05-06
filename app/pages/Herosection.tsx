"use client";

import { useEffect, useRef, useState } from "react";

const dashboardItems = [
    { label: "Active Assets", value: "2,847", trend: "+12%", up: true },
    { label: "Work Orders", value: "134", trend: "+5%", up: true },
    { label: "Avg Response", value: "8 min", trend: "-22%", up: false },
];

export default function HeroSection() {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!visible) return;
        const interval = setInterval(() => {
            setCount((c) => {
                if (c >= 98) { clearInterval(interval); return 98; }
                return c + 1;
            });
        }, 18);
        return () => clearInterval(interval);
    }, [visible]);

    return (
        <section
            id="#home"
            ref={heroRef}
            className="relative bg-white flex items-center"
            style={{ minHeight: "calc(100vh - 64px)" }}
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

                    {/* ── LEFT COLUMN ── */}
                    <div
                        className={`flex flex-col gap-5 sm:gap-6 lg:gap-7 transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    >
                        {/* Eyebrow badge */}
                        <div
                            className="inline-flex items-center gap-2 self-start rounded-full px-3 py-1 sm:px-4 sm:py-1.5 border"
                            style={{ background: "#EAE8FA", borderColor: "#C5BFEF" }}
                        >
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: "#1DB88A" }} />
                            <span
                                className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase"
                                style={{ color: "#4B3EC8", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                            >
                                Intelligent Facility OS
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-black leading-[1.05] tracking-[-0.03em]"
                            style={{ color: "#1C1B3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                            Facility Management
                            <br />
                            <span className="relative inline-block text-purple-900">
                                <span className="relative z-10">Made Smarter</span>
                                <span
                                    className="absolute bottom-1 left-0 w-full h-2 sm:h-3 -z-0 rounded opacity-30"
                                    style={{ background: "#1DB88A", transform: "skewX(-2deg)" }}
                                />
                            </span>
                            <br />
                            <span className="text-purple-900">with FusionEdge</span>
                        </h1>

                        {/* Description */}
                        <p
                            className="text-sm sm:text-base lg:text-[1.05rem] leading-relaxed max-w-[480px]"
                            style={{ color: "#5B5A72", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                            Manage operations, assets, and services seamlessly — all from one
                            intelligent platform built for modern organizations.
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-3 items-center">
                            <button
                                className="group relative inline-flex items-center gap-2 font-semibold text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl transition-all duration-300 active:scale-95"
                                style={{
                                    background: "linear-gradient(to right, #6A3FA0, #2CBF9E)",
                                    color: "#fff",
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    boxShadow: "0 4px 20px rgba(75, 62, 200, 0.25)",
                                }}

                            >
                                Get a Free Demo
                                <svg
                                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform"
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>

                            <button
                                className="inline-flex items-center gap-2 font-semibold text-xs sm:text-sm px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl transition-all duration-300 active:scale-95 border"
                                style={{
                                    background: "white",
                                    borderColor: "#E0DEF0",
                                    color: "#1C1B3A",
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                }}
                                onMouseEnter={e => (e.currentTarget.style.borderColor = "#C5BFEF")}
                                onMouseLeave={e => (e.currentTarget.style.borderColor = "#E0DEF0")}
                            >
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: "#9896AF" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                Contact Us
                            </button>
                        </div>


                    </div>

                    {/* ── RIGHT COLUMN — Dashboard Mockup ── */}
                    <div
                        className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                    >
                        {/* Wrapper with padding so floating chips don't get clipped */}
                        <div className="relative w-full max-w-[400px] sm:max-w-[420px] mx-auto pt-10 pb-10 px-6">

                            {/* Decorative dashed ring */}
                            <div
                                className="absolute inset-0 rounded-3xl border border-dashed opacity-40 pointer-events-none"
                                style={{ borderColor: "#C5BFEF" }}
                            />

                            {/* Main card */}
                            <div
                                className="relative bg-white rounded-2xl overflow-hidden border"
                                style={{ borderColor: "#E0DEF0", boxShadow: "0 20px 60px rgba(75, 62, 200, 0.12)" }}
                            >
                                {/* Card header */}
                                <div
                                    className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b"
                                    style={{ borderColor: "#EAE8FA" }}
                                >
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ background: "#4B3EC8" }}
                                        >
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                            </svg>
                                        </div>
                                        <span className="font-bold text-xs sm:text-sm" style={{ color: "#1C1B3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>FusionEdge</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse" style={{ background: "#1DB88A" }} />
                                        <span className="text-[10px] sm:text-[11px]" style={{ color: "#9896AF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Live</span>
                                    </div>
                                </div>

                                <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                                    {/* Overview label */}
                                    <div>
                                        <p
                                            className="text-[10px] sm:text-xs uppercase tracking-widest mb-0.5"
                                            style={{ color: "#9896AF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                        >
                                            Today's Overview
                                        </p>
                                        <p
                                            className="text-lg sm:text-2xl font-black"
                                            style={{ color: "#1C1B3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                        >
                                            Facility Health Score
                                        </p>
                                    </div>

                                    {/* Score ring + bars */}
                                    <div className="flex items-center gap-4 sm:gap-5">
                                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                                            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                                                <circle cx="50" cy="50" r="42" fill="none" stroke="#EAE8FA" strokeWidth="10" />
                                                <circle
                                                    cx="50" cy="50" r="42" fill="none"
                                                    stroke="#4B3EC8" strokeWidth="10"
                                                    strokeLinecap="round"
                                                    strokeDasharray={`${2 * Math.PI * 42}`}
                                                    strokeDashoffset={`${2 * Math.PI * 42 * (1 - count / 100)}`}
                                                    style={{ transition: "stroke-dashoffset 0.05s linear" }}
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span
                                                    className="text-base sm:text-xl font-black"
                                                    style={{ color: "#1C1B3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                                >
                                                    {count}%
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-1 space-y-1.5 sm:space-y-2 min-w-0">
                                            {[
                                                { label: "HVAC Systems", pct: 94, color: "#1DB88A" },
                                                { label: "Electrical", pct: 87, color: "#4B3EC8" },
                                                { label: "Plumbing", pct: 76, color: "#A5B4FC" },
                                            ].map((item) => (
                                                <div key={item.label}>
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-[10px] sm:text-[11px] truncate" style={{ color: "#9896AF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.label}</span>
                                                        <span className="text-[10px] sm:text-[11px] font-bold ml-1 flex-shrink-0" style={{ color: "#1C1B3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.pct}%</span>
                                                    </div>
                                                    <div className="h-1 sm:h-1.5 rounded-full overflow-hidden" style={{ background: "#EAE8FA" }}>
                                                        <div
                                                            className="h-full rounded-full transition-all duration-1000"
                                                            style={{ width: visible ? `${item.pct}%` : "0%", backgroundColor: item.color }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Metric cards */}
                                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                                        {dashboardItems.map((item) => (
                                            <div
                                                key={item.label}
                                                className="rounded-xl p-2 sm:p-3 border"
                                                style={{ background: "#F8F7FF", borderColor: "#E0DEF0" }}
                                            >
                                                <p className="text-[9px] sm:text-[10px] leading-tight mb-1 truncate" style={{ color: "#9896AF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.label}</p>
                                                <p className="text-sm sm:text-base font-black" style={{ color: "#1C1B3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item.value}</p>
                                                <p
                                                    className="text-[9px] sm:text-[10px] font-bold mt-0.5"
                                                    style={{ color: item.up ? "#1DB88A" : "#4B3EC8", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                                >
                                                    {item.trend}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Upcoming work orders */}
                                    <div className="rounded-xl p-2.5 sm:p-3 border" style={{ background: "#F8F7FF", borderColor: "#E0DEF0" }}>
                                        <p
                                            className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider mb-1.5 sm:mb-2"
                                            style={{ color: "#9896AF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                                        >
                                            Upcoming Work Orders
                                        </p>
                                        {[
                                            "HVAC Filter Replacement — Floor 3",
                                            "Elevator Inspection — Tower B",
                                            "Fire Suppression Check",
                                            "Generator Test — Basement",
                                        ].map((t, i) => (
                                            <div key={i} className="flex items-center gap-2 py-0.5 sm:py-1">
                                                <div
                                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                    style={{ background: ["#F87171", "#FBBF24", "#4B3EC8", "#1DB88A"][i] }}
                                                />
                                                <p className="text-[10px] sm:text-[11px] truncate" style={{ color: "#5B5A72", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{t}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating notification chip — bottom left */}
                            <div
                                className={`absolute bottom-0 left-0 bg-white rounded-xl border px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                                style={{ borderColor: "#E0DEF0", boxShadow: "0 8px 30px rgba(75, 62, 200, 0.12)" }}
                            >
                                <div
                                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: "#D1FAF0" }}
                                >
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "#0F6E56" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[11px] sm:text-xs font-bold" style={{ color: "#1C1B3A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Resolved</p>
                                    <p className="text-[9px] sm:text-[10px]" style={{ color: "#9896AF", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Ticket #4821 closed</p>
                                </div>
                            </div>

                            {/* Floating efficiency chip — top right */}
                            <div
                                className={`absolute top-0 right-0 rounded-xl px-3 py-2 sm:px-4 sm:py-3 transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
                                style={{ background: "#4B3EC8", boxShadow: "0 8px 30px rgba(75, 62, 200, 0.35)" }}
                            >
                                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Efficiency</p>
                                <p className="text-base sm:text-lg font-black text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>↑ 38%</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}