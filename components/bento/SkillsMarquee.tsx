import { cn } from "@/lib/utils";

const skills = [
    "Next.js", "React", "Tailwind CSS", "TypeScript",
    "Python", "Docker", "NestJS", "PostgreSQL",
    "GraphQL", "AWS", "Figma", "Git"
];

export function SkillsMarquee() {
    return (
        <div className="relative flex overflow-hidden bg-background border border-border rounded-2xl p-4 md:p-6 col-span-1 md:col-span-2 lg:col-span-3 items-center">
            {/* Gradient masks for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
                {skills.map((skill, i) => (
                    <span key={`skill-${i}`} className="text-xl md:text-2xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors cursor-default select-none">
                        {skill}
                    </span>
                ))}
                {/* Duplicate for infinite loop */}
                {skills.map((skill, i) => (
                    <span key={`skill-dup-${i}`} className="text-xl md:text-2xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors cursor-default select-none">
                        {skill}
                    </span>
                ))}
                {/* Triplicate for wider screens to ensure loop no matter the screen width */}
                {skills.map((skill, i) => (
                    <span key={`skill-trip-${i}`} className="text-xl md:text-2xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors cursor-default select-none">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}
