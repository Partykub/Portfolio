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
    className?: string; // Removed theme prop
}

export function ProjectCard({
    title,
    description,
    tags,
    image,
    link = "#",
    className,
}: ProjectCardProps) {

    return (
        <Card
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden transition-all hover:shadow-xl",
                "bg-card border-border text-card-foreground", // Use standard theme colors
                className
            )}
            noPadding
        >
            {/* Content */}
            <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="space-y-2">
                        <h3 className={cn("text-2xl font-bold font-heading", "text-foreground")}>
                            {title}
                        </h3>
                        <p className={cn("text-sm max-w-[200px] md:max-w-xs", "text-muted-foreground")}>
                            {description}
                        </p>
                    </div>
                    <Link
                        href={link}
                        className={cn(
                            "p-2 rounded-full transition-transform group-hover:-translate-y-1 group-hover:translate-x-1",
                            "bg-primary/10 hover:bg-primary/20 text-primary" // Fixed: Removed isDark check
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
                            variant="secondary" // Fixed: Use standard secondary variant
                            className="" // Fixed: Removed manual styling based on isDark
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Image */}
            <div className="relative w-full h-64 md:h-80 mt-auto overflow-hidden">
                {/* Gradient Overlay for better text readability if text overlaps, but design separates them. We add subtle gradient at bottom. */}
                <div className={cn("absolute inset-0 z-10 bg-gradient-to-t from-background/10 to-transparent")} /> {/* Fixed: Removed isDark and used semantic color */}

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
