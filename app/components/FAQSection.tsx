"use client";

import { useState } from "react";

const FAQS = [
    {
        id: "fm-software",
        question: "What is facility management software?",
        answer:
            "Facility management software helps organizations manage assets, maintenance, work orders, and operations from a centralized platform.",
    },
    {
        id: "improve-operations",
        question: "How does FusionEdge improve facility operations?",
        answer:
            "It provides real-time visibility, automation, and analytics to streamline operations and improve efficiency.",
    },
    {
        id: "multi-facility",
        question: "Can FusionEdge manage multiple facilities?",
        answer:
            "Yes, it is designed to handle multi-site operations from a single dashboard.",
    },
    {
        id: "cloud",
        question: "Is FusionEdge cloud-based?",
        answer:
            "Yes, it is a cloud-based platform accessible from anywhere.",
    },
];

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}

function FAQItem({
    faq,
    isOpen,
    onToggle,
}: {
    faq: (typeof FAQS)[0];
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                    ? "border-purple-200 bg-white shadow-md shadow-purple-100/40"
                    : "border-gray-100 bg-white shadow-sm hover:border-purple-100 hover:shadow-md hover:shadow-purple-50/60"
            }`}
        >
            <button
                type="button"
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                aria-expanded={isOpen}
            >
                <span className="text-sm font-bold leading-snug text-gray-900 sm:text-base">
                    {faq.question}
                </span>
                <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 sm:h-9 sm:w-9 ${
                        isOpen
                            ? "bg-[#6B3FA0] text-white"
                            : "bg-[#6B3FA0]/10 text-[#6B3FA0] hover:bg-[#6B3FA0] hover:text-white"
                    }`}
                >
                    <ChevronIcon open={isOpen} />
                </span>
            </button>

            <div
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-gray-500 sm:px-6 sm:pb-6 sm:text-base sm:leading-8">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FAQSection() {
    const [openId, setOpenId] = useState<string>("fm-software");

    const toggle = (id: string) => setOpenId((prev) => (prev === id ? "" : id));

    return (
        <section
            id="faqs"
            className="bg-white py-12 sm:py-16 lg:py-24"
            aria-labelledby="faq-heading"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

                    {/* ── Left: sticky copy ── */}
                    <div className="lg:sticky lg:top-24 lg:self-start">
                        <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50 px-3 py-1.5 text-xs font-semibold text-[#6B3FA0] sm:px-4 sm:py-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#6B3FA0]" />
                            Frequently asked questions
                        </span>

                        <h2
                            id="faq-heading"
                            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl lg:text-5xl xl:text-[3.25rem]"
                        >
                            Got Questions?{" "}
                            <br className="hidden sm:block" />
                            We Have{" "}
                            <span className="text-[#6B3FA0]">Answers.</span>
                        </h2>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500 sm:mt-5 sm:text-base sm:leading-8">
                            Find quick answers about facility management software,
                            multi-site operations, and how FusionEdge can work for your team.
                        </p>

                        <div className="mt-8 hidden h-1 w-16 rounded-full bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF] lg:block" />

                        <a
                            href="#contact"
                            className="mt-8 hidden items-center gap-2 text-sm font-semibold text-[#6B3FA0] underline-offset-4 hover:underline lg:inline-flex"
                        >
                            Still have questions? Contact us
                            <span aria-hidden="true">→</span>
                        </a>
                    </div>

                    {/* ── Right: accordion ── */}
                    <div className="flex flex-col gap-3 sm:gap-4">
                        {FAQS.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                faq={faq}
                                isOpen={openId === faq.id}
                                onToggle={() => toggle(faq.id)}
                            />
                        ))}
                    </div>
                </div>

                {/* mobile contact CTA */}
                <div className="mt-8 text-center lg:hidden">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B3FA0] underline-offset-4 hover:underline"
                    >
                        Still have questions? Contact us
                        <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}