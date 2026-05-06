"use client";

import { useEffect, useState } from "react";

const SOLUTIONS = [
    {
        title: "Asset Management",
        id: "asset-management",
        imageNote: "Asset tracking dashboard / QR scanning",
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80&fit=crop&crop=center",
        description:
            "Track, manage, and optimize all your physical and digital assets from acquisition to decommissioning.",
        bullets: [
            "Centralized asset register",
            "Lifecycle tracking & audit logs",
            "QR, barcode, RFID tracking",
            "Performance & utilization insights",
        ],
        cta: "Explore Asset Management",
    },
    {
        title: "Work Order Management",
        id: "work-order-management",
        imageNote: "Ticket / work order dashboard",
        imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=600&q=80&fit=crop&crop=center",
        description:
            "Create, assign, and track every task with complete visibility and accountability.",
        bullets: [
            "Real-time task tracking",
            "Role-based assignment",
            "Automated alerts & updates",
            "Structured workflows",
        ],
        cta: "Explore Work Order Management",
    },
    {
        title: "Maintenance Scheduling",
        id: "maintenance-scheduling",
        imageNote: "Maintenance calendar / alerts dashboard",
        imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80&fit=crop&crop=center",
        description:
            "Stay ahead of breakdowns with proactive and predictive maintenance planning.",
        bullets: [
            "Scheduled preventive maintenance",
            "Condition-based tracking",
            "Predictive maintenance insights",
            "Reduced downtime & failures",
        ],
        cta: "Explore Maintenance Scheduling",
    },
    {
        title: "Inventory Management",
        id: "inventory-management",
        imageNote: "Inventory dashboard / stock alerts",
        imageUrl: "https://images.unsplash.com/photo-1586528116493-42c197a00cd8?w=600&q=80&fit=crop&crop=center",
        description:
            "Maintain optimal stock levels and ensure availability of critical parts.",
        bullets: [
            "Real-time inventory tracking",
            "Automated low-stock alerts",
            "Vendor & procurement management",
            "Barcode-based tracking",
        ],
        cta: "Explore Inventory Management",
    },
    {
        title: "Visitor Management",
        id: "visitor-management",
        imageNote: "Visitor check-in system",
        imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80&fit=crop&crop=center",
        description:
            "Manage visitor access efficiently while ensuring security and compliance.",
        bullets: [
            "Digital visitor check-in",
            "Access control & approvals",
            "Visitor logs & reporting",
            "Improved workplace security",
        ],
        cta: "Explore Visitor Management",
    },
    {
        title: "Analytics & Reporting",
        id: "analytics-reporting",
        imageNote: "Analytics dashboard with graphs",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop&crop=center",
        description:
            "Turn operational data into actionable insights for better decision-making.",
        bullets: [
            "Real-time dashboards",
            "Performance tracking",
            "Cost & utilization insights",
            "Custom reports",
        ],
        cta: "Explore Analytics and Reporting",
    },
    {
        title: "Also Explore Our Helpdesk",
        id: "helpdesk",
        imageNote: "Helpdesk dashboard",
        imageUrl: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=600&q=80&fit=crop&crop=center",
        description:
            "Centralize all service requests across facilities into one trackable system.",
        bullets: [
            "Ticket-based issue management",
            "SLA tracking",
            "Role-based assignment",
            "Real-time status updates",
        ],
        cta: "Explore Helpdesk",
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// Polished widget components
// ─────────────────────────────────────────────────────────────────────────────

/* Asset Visibility — Donut chart + legend */
function AssetVisibilityWidget() {
    const r = 28;
    const circ = 2 * Math.PI * r;
    const slices = [
        { pct: 62, color: "#6B3FA0" },
        { pct: 24, color: "#2DD4BF" },
        { pct: 14, color: "#E5E7EB" },
    ];
    let offset = 0;
    return (
        <div className="flex items-center gap-3">
            <svg width="72" height="72" viewBox="0 0 72 72" style={{ flexShrink: 0 }}>
                {slices.map((s, i) => {
                    const dash = (s.pct / 100) * circ;
                    const el = (
                        <circle
                            key={i}
                            cx="36" cy="36" r={r}
                            fill="none"
                            stroke={s.color}
                            strokeWidth="9"
                            strokeDasharray={`${dash} ${circ - dash}`}
                            strokeDashoffset={-((offset / 100) * circ)}
                            style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
                        />
                    );
                    offset += s.pct;
                    return el;
                })}
                <text x="36" y="40" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1f2937">62%</text>
            </svg>
            <div className="flex flex-col gap-1.5 min-w-0">
                {[
                    { label: "Active", pct: "62%", color: "#6B3FA0" },
                    { label: "Idle", pct: "24%", color: "#2DD4BF" },
                    { label: "Offline", pct: "14%", color: "#D1D5DB" },
                ].map(({ label, pct, color }) => (
                    <div key={label} className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: color }} />
                        <span className="text-[10px] text-gray-500 leading-none">{label}</span>
                        <span className="ml-auto text-[10px] font-bold text-gray-700 leading-none pl-2">{pct}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* Team Operations — Horizontal bar chart */
function TeamOperationsWidget() {
    const rows = [
        { name: "Floor A", val: 87, color: "#6B3FA0" },
        { name: "Floor B", val: 64, color: "#2DD4BF" },
        { name: "Floor C", val: 91, color: "#6B3FA0" },
    ];
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-bold text-gray-700">Task completion</span>
                <span className="text-[10px] font-bold text-[#6B3FA0]">↑ 12%</span>
            </div>
            {rows.map(({ name, val, color }) => (
                <div key={name} className="flex items-center gap-2">
                    <span className="text-[9px] text-gray-400 w-10 flex-shrink-0">{name}</span>
                    <div className="flex-1 h-2.5 rounded-full bg-gray-100 overflow-hidden">
                        <div
                            className="h-full rounded-full"
                            style={{ width: `${val}%`, background: `linear-gradient(90deg, ${color}, ${color}99)` }}
                        />
                    </div>
                    <span className="text-[9px] font-bold text-gray-600 w-6 text-right">{val}%</span>
                </div>
            ))}
        </div>
    );
}

/* Facility Dashboard — KPI tiles + sparkline */
function FacilityDashboardWidget() {
    const pts = [18, 32, 24, 40, 36, 52, 48, 60, 55, 70];
    const points = pts.map((y, x) => `${x * 11},${70 - y}`).join(" ");
    return (
        <div className="flex flex-col gap-2">
            <div className="grid grid-cols-3 gap-1.5">
                {[
                    { label: "Assets", val: "1,248", color: "#6B3FA0" },
                    { label: "Open WO", val: "34", color: "#2DD4BF" },
                    { label: "Uptime", val: "99.1%", color: "#6B3FA0" },
                ].map(({ label, val, color }) => (
                    <div key={label} className="rounded-lg p-1.5" style={{ background: `${color}0d`, border: `1px solid ${color}22` }}>
                        <p className="text-[8px] text-gray-400 leading-none mb-0.5">{label}</p>
                        <p className="text-[11px] font-bold leading-none" style={{ color }}>{val}</p>
                    </div>
                ))}
            </div>
            <div className="rounded-lg bg-gray-50 px-2 pt-1.5 pb-1" style={{ border: "1px solid #f3f4f6" }}>
                <p className="text-[8px] text-gray-400 mb-1">Monthly efficiency trend</p>
                <svg width="100%" height="36" viewBox="0 -4 99 78" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6B3FA0" stopOpacity="0.18" />
                            <stop offset="100%" stopColor="#6B3FA0" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <polygon points={`0,70 ${points} 99,70`} fill="url(#spark)" />
                    <polyline points={points} fill="none" stroke="#6B3FA0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="99" cy="0" r="3" fill="#6B3FA0" />
                </svg>
            </div>
        </div>
    );
}

/* Maintenance Workflow — Status task list */
function MaintenanceWorkflowWidget() {
    const tasks = [
        { label: "HVAC Inspection", status: "Done", color: "#2DD4BF" },
        { label: "Generator Check", status: "In Progress", color: "#6B3FA0" },
        { label: "Plumbing Audit", status: "Pending", color: "#D1D5DB" },
    ];
    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between mb-0.5">
                <span className="text-[10px] font-bold text-gray-700">Scheduled tasks</span>
                <span className="rounded-full px-1.5 py-0.5 text-[8px] font-bold text-white" style={{ background: "#6B3FA0" }}>3 active</span>
            </div>
            {tasks.map(({ label, status, color }) => (
                <div key={label} className="flex items-center gap-2 rounded-lg bg-gray-50 px-2 py-1.5" style={{ border: "1px solid #f0f0f0" }}>
                    <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: color }} />
                    <span className="text-[9px] text-gray-600 flex-1 truncate">{label}</span>
                    <span className="text-[8px] font-semibold" style={{ color }}>{status}</span>
                </div>
            ))}
            <div className="mt-1 flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: "67%", background: "linear-gradient(90deg, #6B3FA0, #2DD4BF)" }} />
                </div>
                <span className="text-[8px] text-gray-400">67% complete</span>
            </div>
        </div>
    );
}

/* Reporting — Vertical bar chart */
function ReportingWidget() {
    const bars = [
        { label: "Jan", val: 55, color: "#6B3FA0" },
        { label: "Feb", val: 72, color: "#2DD4BF" },
        { label: "Mar", val: 61, color: "#6B3FA0" },
        { label: "Apr", val: 88, color: "#2DD4BF" },
        { label: "May", val: 78, color: "#6B3FA0" },
    ];
    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex items-end gap-1.5 h-16 px-0.5">
                {bars.map(({ label, val, color }) => (
                    <div key={label} className="flex flex-col items-center gap-1 flex-1">
                        <div
                            className="w-full rounded-t-sm"
                            style={{ height: `${(val / 100) * 52}px`, background: `linear-gradient(180deg, ${color}, ${color}88)` }}
                        />
                        <span className="text-[7px] text-gray-400">{label}</span>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between pt-0.5 border-t border-gray-100">
                <span className="text-[9px] text-gray-400">Cost efficiency reports</span>
                <span className="text-[9px] font-bold text-[#2DD4BF]">↑ 23%</span>
            </div>
        </div>
    );
}

// Widget lookup by label
const WIDGET_MAP: Record<string, React.ReactNode> = {
    "Asset visibility": <AssetVisibilityWidget />,
    "Team operations": <TeamOperationsWidget />,
    "Facility dashboard": <FacilityDashboardWidget />,
    "Maintenance workflow": <MaintenanceWorkflowWidget />,
    "Reporting": <ReportingWidget />,
};

/* ── Collage card (desktop only) ── */
function CollageCard({ className, label }: { className: string; label: string }) {
    return (
        <div className={`overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl shadow-gray-200/70 ${className}`}>
            <div className="h-full p-3.5 flex flex-col">
                <div className="mb-3 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#6B3FA0]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2DD4BF]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
                </div>
                <div className="flex-1 min-h-0">
                    {WIDGET_MAP[label] ?? <div className="h-full rounded-lg bg-gray-50" />}
                </div>
                <p className="mt-3 text-[9px] font-bold uppercase tracking-widest text-gray-400">{label}</p>
            </div>
        </div>
    );
}

/* ── Mini collage card (mobile grid) ── */
function MiniCollageCard({ label }: { label: string }) {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <div className="p-3 flex flex-col">
                <div className="mb-2 flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#6B3FA0]" />
                    <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
                    <span className="h-2 w-2 rounded-full bg-gray-200" />
                </div>
                <div className="transform scale-[0.85] origin-top-left" style={{ width: "117%" }}>
                    {WIDGET_MAP[label] ?? <div className="h-12 rounded-lg bg-gray-50" />}
                </div>
                <p className="mt-2.5 text-[9px] font-bold uppercase tracking-widest text-gray-400">{label}</p>
            </div>
        </div>
    );
}

/* ── Solution visual with real Unsplash image ── */
function SolutionVisual({ label, imageUrl }: { label: string; imageUrl: string }) {
    return (
        <div className="rounded-xl bg-gray-100 p-3 sm:rounded-2xl sm:p-4">
            <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-normal text-gray-500 sm:text-xs">
                    Insert image
                </span>
                <span className="h-6 w-6 rounded-md bg-gradient-to-br from-[#6B3FA0] to-[#2DD4BF] sm:h-8 sm:w-8 sm:rounded-lg" />
            </div>
            <div className="h-24 rounded-lg overflow-hidden shadow-sm sm:h-32 sm:rounded-xl">
                <img
                    src={imageUrl}
                    alt={label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <p className="mt-2 text-[10px] font-medium leading-4 text-gray-500 sm:mt-3 sm:text-xs sm:leading-5">
                {label}
            </p>
        </div>
    );
}

/* ── Modal popup ── */
function SolutionModal({
    solution,
    onClose,
}: {
    solution: (typeof SOLUTIONS)[0];
    onClose: () => void;
}) {
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handler);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handler);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4 lg:p-8"
            style={{ backgroundColor: "rgba(0,0,0,0.50)" }}
            onClick={onClose}
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
        >
            <div
                className="
                    relative w-full overflow-y-auto bg-white
                    rounded-t-[1.5rem] max-h-[92vh]
                    sm:rounded-[1.75rem] sm:max-h-[88vh] sm:max-w-xl
                    md:max-w-2xl
                "
                style={{ animation: "modalIn 0.26s cubic-bezier(0.34,1.4,0.64,1) both" }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="h-1 w-full bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF]" />

                <div className="flex justify-center pt-3 sm:hidden">
                    <div className="h-1 w-10 rounded-full bg-gray-200" />
                </div>

                <div className="p-5 sm:p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <span className="text-xs font-semibold uppercase tracking-normal text-[#6B3FA0]">
                                Solution Details
                            </span>
                            <h4
                                id="modal-title"
                                className="mt-1.5 text-xl font-bold leading-tight tracking-normal text-gray-950 sm:text-2xl lg:text-3xl"
                            >
                                {solution.title}
                            </h4>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-base font-bold text-gray-500 transition-colors hover:bg-purple-50 hover:text-[#6B3FA0] sm:h-9 sm:w-9 sm:text-lg"
                            aria-label="Close"
                        >
                            ×
                        </button>
                    </div>

                    <div className="mt-4 sm:mt-5">
                        <SolutionVisual label={solution.imageNote} imageUrl={solution.imageUrl} />
                    </div>

                    <p className="mt-4 text-sm leading-7 text-gray-600 sm:mt-5 sm:text-base sm:leading-8">
                        {solution.description}
                    </p>

                    <ul className="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-2 sm:gap-3">
                        {solution.bullets.map((bullet) => (
                            <li
                                key={bullet}
                                className="flex items-start gap-2.5 rounded-xl bg-gray-50 p-3 text-xs font-semibold leading-5 text-gray-700 sm:gap-3 sm:text-sm sm:leading-6"
                            >
                                <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF]" />
                                {bullet}
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contact"
                        className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#6B3FA0] to-[#2DD4BF] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-purple-100 transition-all duration-200 hover:shadow-lg active:scale-[0.98] sm:mt-6 sm:w-fit"
                    >
                        {solution.cta}
                    </a>
                </div>
            </div>
        </div>
    );
}

/* ── Main section ── */
export default function FacilityManagementSolutionsSection() {
    const [activeSolutionId, setActiveSolutionId] = useState<string | null>(null);
    const activeSolution = SOLUTIONS.find((s) => s.id === activeSolutionId);

    return (
        <>
            <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(14px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        @media (max-width: 639px) {
          @keyframes modalIn {
            from { opacity: 0; transform: translateY(60px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>

            {activeSolution && (
                <SolutionModal
                    solution={activeSolution}
                    onClose={() => setActiveSolutionId(null)}
                />
            )}

            <section
                id="what-is-fm"
                className="bg-white py-10 sm:py-16 lg:py-24"
                aria-labelledby="facility-management-heading"
            >
                {/* ── What is FM ── */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">

                        {/* Copy */}
                        <div>
                            <span className="inline-flex rounded-full border border-purple-100 bg-purple-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-normal text-[#6B3FA0] sm:px-4 sm:py-2">
                                Facility Management
                            </span>

                            <h2
                                id="facility-management-heading"
                                className="mt-4 text-2xl font-bold leading-tight tracking-tight text-gray-950 sm:text-3xl lg:text-4xl xl:text-5xl"
                            >
                                What is Facility Management?
                            </h2>

                            <div className="mt-4 space-y-3 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8">
                                <p>
                                    Facility management is the coordination of operations,
                                    maintenance, and services within a building or workspace.
                                </p>
                                <p>
                                    From managing assets and maintenance schedules to handling
                                    work orders and inventory, it ensures that facilities run
                                    safely, efficiently, and without disruption.
                                </p>
                                <p className="font-semibold text-gray-900">
                                    FusionEdge transforms traditional facility management into
                                    a connected, data-driven system — giving teams full control
                                    and visibility.
                                </p>
                            </div>
                        </div>

                        {/* Mobile / tablet grid */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
                            {["Asset visibility", "Team operations", "Facility dashboard", "Maintenance workflow", "Reporting"].map((label) => (
                                <MiniCollageCard key={label} label={label} />
                            ))}
                            <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50/60" />
                        </div>

                        {/* Desktop collage */}
                        <div className="relative hidden min-h-[430px] lg:block xl:min-h-[500px]">
                            <CollageCard label="Asset visibility"      className="absolute left-0 top-16 h-44 w-[42%] xl:h-56" />
                            <CollageCard label="Team operations"       className="absolute left-[30%] top-28 h-40 w-[40%] xl:h-48" />
                            <CollageCard label="Facility dashboard"    className="absolute right-[12%] top-0 h-52 w-[34%] xl:h-64" />
                            <CollageCard label="Maintenance workflow"  className="absolute bottom-12 left-[28%] h-40 w-[42%] xl:h-48" />
                            <CollageCard label="Reporting"             className="absolute bottom-20 right-0 h-36 w-[34%] xl:h-44" />
                        </div>
                    </div>
                </div>

                {/* ── Solutions modules ── */}
                <div
                    id="features"
                    className="mt-12 bg-gray-50 px-4 py-10 sm:mt-16 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
                >
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex rounded-full border border-teal-100 bg-teal-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-normal text-[#0F9F8F] sm:px-4 sm:py-2">
                            Integrated Modules
                        </span>

                        <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-gray-950 sm:mt-5 sm:text-3xl lg:text-4xl xl:text-5xl">
                            Explore Our Facility Management Solutions
                        </h3>

                        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:mt-4 sm:text-base sm:leading-8">
                            Discover how FusionEdge simplifies complex facility operations
                            through integrated modules.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:mt-10 lg:grid-cols-4 lg:items-start lg:gap-6">
                        {SOLUTIONS.map((solution, index) => (
                            <article
                                key={solution.id}
                                id={solution.id}
                                className={`
                                    rounded-2xl border border-gray-100 bg-white p-4 shadow-lg shadow-gray-200/60
                                    transition-all duration-200
                                    hover:-translate-y-1 hover:border-purple-100 hover:shadow-xl hover:shadow-purple-100/30
                                    ${activeSolutionId === solution.id ? "ring-2 ring-[#6B3FA0]" : ""}
                                    ${index === 1 || index === 5 ? "lg:mt-12" : ""}
                                    ${index === 2 || index === 6 ? "lg:mt-5" : ""}
                                    ${index === 3 ? "lg:mt-16" : ""}
                                `}
                            >
                                <SolutionVisual label={solution.imageNote} imageUrl={solution.imageUrl} />

                                <div className="mt-3 sm:mt-4">
                                    <h4 className="text-base font-bold leading-snug tracking-normal text-gray-950 sm:text-lg">
                                        {solution.title}
                                    </h4>

                                    <p className="mt-1.5 line-clamp-3 text-xs leading-5 text-gray-600 sm:mt-2 sm:text-sm sm:leading-6">
                                        {solution.description}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => setActiveSolutionId(solution.id)}
                                        className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-gray-950 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#6B3FA0] active:scale-[0.98] sm:mt-5 sm:text-sm"
                                        aria-expanded={activeSolutionId === solution.id}
                                    >
                                        Learn More
                                        <span aria-hidden="true">→</span>
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}