"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

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
    // 3D Tilt Effect Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;

        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            className={cn("h-full perspective-1000", className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className={cn(
                    "group relative flex flex-col justify-between overflow-hidden transition-all hover:shadow-2xl rounded-xl h-full",
                    "bg-card border-border text-card-foreground border"
                )}
            >
                {/* Content */}
                <div className="p-6 relative z-10 bg-card/50 backdrop-blur-sm h-full flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
                    <div>
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
                </div>

                {/* Image */}
                <div className="relative w-full h-64 md:h-80 mt-auto overflow-hidden rounded-b-xl" style={{ transform: "translateZ(10px)" }}>
                    {/* Gradient Overlay for better text readability */}
                    <div className={cn("absolute inset-0 z-10 bg-gradient-to-t from-background/20 to-transparent")} />

                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Shine/Glare Effect */}
                <motion.div
                    className="absolute inset-0 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: useTransform(
                            mouseX,
                            [-0.5, 0.5],
                            [
                                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                                "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)"
                            ]
                        )
                    }}
                />
            </motion.div>
        </motion.div>
    );
}
