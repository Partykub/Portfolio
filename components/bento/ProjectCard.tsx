"use client";

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
        <Link href={link} className="block">
            <motion.div
                className={cn("perspective-1000", className)}
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
                        "group relative flex flex-col overflow-hidden transition-all hover:shadow-2xl rounded-xl",
                        "bg-card border-border text-card-foreground border"
                    )}
                >
                    {/* Content Section */}
                    <div className="p-6 relative z-10 bg-card" style={{ transform: "translateZ(20px)" }}>
                        <div className="flex justify-between items-start mb-4">
                            <div className="space-y-2 flex-1">
                                <h3 className="text-2xl font-bold font-heading text-foreground">
                                    {title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {description}
                                </p>
                            </div>
                            <div
                                className={cn(
                                    "p-2 rounded-full transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 flex-shrink-0",
                                    "bg-primary/10 hover:bg-primary/20 text-primary"
                                )}
                                aria-label={`View ${title}`}
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-xs"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Image Section - Aspect ratio based on content */}
                    <div className="relative w-full aspect-video overflow-hidden bg-muted/20" style={{ transform: "translateZ(10px)" }}>
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
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
        </Link>
    );
}
