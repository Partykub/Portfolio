import { cn } from "@/lib/utils";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiFramer, SiFigma, SiRadixui, SiCss3,
    SiHtml5, SiGit, SiNodedotjs, SiPostgresql,
    SiJquery, SiPhp, SiWordpress
} from "react-icons/si";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Zap, Layout, Search, Layers, Activity } from "lucide-react";

// 1. Static Tech Stack (Tools)
const skills = [
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "bg-black text-white rounded-full p-0.5" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "jQuery", icon: SiJquery, color: "text-blue-700" },
    { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
    { name: "WordPress", icon: SiWordpress, color: "text-blue-600" },
    { name: "Git", icon: SiGit, color: "text-red-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" }
];

// 2. Marquee Items (Outcomes/Capabilities) - Idea A
const capabilities = [
    { text: "Responsive Web Apps", icon: Layout },
    { text: "Real-time Dashboards", icon: Activity },
    { text: "Pixel-perfect UI", icon: Layers },
    { text: "High Performance", icon: Zap },
    { text: "SEO Optimized", icon: Search },
    { text: "Modern UX/UI", icon: Sparkles },
];

const CapabilityList = ({ keyPrefix }: { keyPrefix: string }) => (
    <>
        {capabilities.map((item, i) => (
            <div
                key={`${keyPrefix}-${i}`}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm whitespace-nowrap"
            >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground/90 tracking-wide uppercase">
                    {item.text}
                </span>
            </div>
        ))}
    </>
);

export function SkillsMarquee() {
    return (
        <div className="flex flex-col gap-8 w-full">
            {/* 1. Static Skills Grid (Clear & Scannable) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
                {skills.map((skill, i) => (
                    <div
                        key={`static-${i}`}
                        className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                        <skill.icon className={cn("w-8 h-8 transition-transform duration-300 group-hover:-translate-y-1", skill.color)} />
                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* 2. Marquee Section (Dynamic & Alive - Idea A) */}
            <div className="relative flex overflow-hidden w-full items-center py-2 opacity-80 hover:opacity-100 transition-opacity">
                {/* Gradient masks */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                {/* Seamless Marquee */}
                <div className="flex w-full overflow-hidden mask-linear-gradient select-none">
                    <div className="flex animate-marquee flex-shrink-0 whitespace-nowrap gap-6 items-center min-w-full justify-start pr-6">
                        <CapabilityList keyPrefix="cap" />
                    </div>
                    <div className="flex animate-marquee flex-shrink-0 whitespace-nowrap gap-6 items-center min-w-full justify-start pr-6" aria-hidden="true">
                        <CapabilityList keyPrefix="cap-dup" />
                    </div>
                </div>
            </div>
        </div>
    )
}
