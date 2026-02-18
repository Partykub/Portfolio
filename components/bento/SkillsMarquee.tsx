import { cn } from "@/lib/utils";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiFramer, SiFigma, SiRadixui, SiCss3,
    SiHtml5, SiGit, SiNodedotjs, SiPostgresql
} from "react-icons/si";

const skills = [
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-neutral-900 dark:text-white" }, // Adaptive color
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "Git", icon: SiGit, color: "text-red-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" }
];

const SkillList = ({ keyPrefix }: { keyPrefix: string }) => (
    <>
        {skills.map((skill, i) => (
            <div
                key={`${keyPrefix}-${i}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/20 transition-all duration-300 select-none cursor-pointer hover:scale-110 hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]"
            >
                <skill.icon className={cn("w-5 h-5 transition-transform", skill.color)} />
                <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {skill.name}
                </span>
            </div>
        ))}
    </>
);

export function SkillsMarquee() {
    return (
        <div className="relative flex overflow-hidden bg-background border border-border rounded-2xl p-4 md:p-6 w-full items-center">
            {/* Gradient masks for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Seamless Marquee Container */}
            <div className="flex w-full overflow-hidden mask-linear-gradient select-none group">
                <div className="flex animate-marquee flex-shrink-0 whitespace-nowrap gap-8 items-center min-w-full justify-start pr-8 group-hover:[animation-play-state:paused]">
                    <SkillList keyPrefix="skill" />
                </div>
                <div className="flex animate-marquee flex-shrink-0 whitespace-nowrap gap-8 items-center min-w-full justify-start pr-8 group-hover:[animation-play-state:paused]" aria-hidden="true">
                    <SkillList keyPrefix="skill-dup" />
                </div>
            </div>
        </div>
    )
}
