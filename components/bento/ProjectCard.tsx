import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link?: string;
    theme?: "dark" | "light";
    className?: string;
}

export function ProjectCard({
    title,
    description,
    tags,
    image,
    link = "#",
    theme = "light",
    className,
}: ProjectCardProps) {
    const isDark = theme === "dark";

    return (
        <Card
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden transition-all hover:shadow-xl",
                isDark ? "bg-[#0A0A0A] border-border/10 text-white" : "bg-card border-border text-card-foreground",
                className
            )}
            noPadding
        >
            {/* Content */}
            <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="space-y-2">
                        <h3 className={cn("text-2xl font-bold font-heading", isDark ? "text-white" : "text-foreground")}>
                            {title}
                        </h3>
                        <p className={cn("text-sm max-w-[200px] md:max-w-xs", isDark ? "text-gray-400" : "text-muted-foreground")}>
                            {description}
                        </p>
                    </div>
                    <Link
                        href={link}
                        className={cn(
                            "p-2 rounded-full transition-transform group-hover:-translate-y-1 group-hover:translate-x-1",
                            isDark ? "bg-white/10 hover:bg-white/20 text-white" : "bg-primary/10 hover:bg-primary/20 text-primary"
                        )}
                        aria-label={`View ${title}`}
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <Badge
                            key={tag}
                            variant={isDark ? "outline" : "secondary"}
                            className={cn(isDark ? "border-white/20 text-white/80" : "")}
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Image */}
            <div className="relative w-full h-64 md:h-80 mt-auto overflow-hidden">
                {/* Gradient Overlay for better text readability if text overlaps, but design separates them. We add subtle gradient at bottom. */}
                <div className={cn("absolute inset-0 z-10 bg-gradient-to-t", isDark ? "from-[#0A0A0A]/80 to-transparent" : "from-white/20 to-transparent")} />

                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </Card>
    );
}
