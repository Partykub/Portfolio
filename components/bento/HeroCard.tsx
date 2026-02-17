"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

export function HeroCard() {
    const { t } = useLanguage();

    return (
        <Card className="col-span-1 md:col-span-3 bg-gradient-to-br from-blue-500/5 to-orange-500/5 border-none relative overflow-visible h-full flex flex-col justify-center min-h-[400px]">
            {/* Background Grid */}
            <div className="absolute top-0 left-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02] -z-10 rounded-xl" />

            <CardContent className="flex flex-col-reverse md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 gap-8 md:gap-12 max-w-6xl mx-auto w-full">

                {/* Left: Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 flex-1 z-10 w-full">
                    <div className="space-y-4 w-full">
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20 mx-auto md:mx-0">
                            Available for work
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-tight text-foreground -ml-0.5">
                            {t.hero.greeting}
                        </h1>

                        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground max-w-xl mx-auto md:mx-0">
                            {t.hero.role}
                        </h2>

                        <p className="text-base md:text-lg text-muted-foreground/80 max-w-lg leading-relaxed mx-auto md:mx-0">
                            {t.hero.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start w-full">
                        <Button className="rounded-full font-medium h-12 px-6 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" size="lg" asChild>
                            <Link href="/Resume_Ratchanon_Kunyodying.pdf" target="_blank" download className="flex items-center">
                                <Download className="mr-2 h-5 w-5" />
                                {t.hero.downloadResume}
                            </Link>
                        </Button>

                        <Button variant="outline" className="rounded-full h-12 px-6 text-base hover:bg-muted/50 transition-all" asChild>
                            <Link href="https://github.com/Partykub" target="_blank" className="flex items-center">
                                <Github className="mr-2 h-5 w-5" />
                                GitHub
                            </Link>
                        </Button>

                        <Button variant="outline" className="rounded-full h-12 px-6 text-base hover:bg-muted/50 transition-all" asChild>
                            <Link href="https://linkedin.com/in/ratchanon-kunyodying" target="_blank" className="flex items-center">
                                <Linkedin className="mr-2 h-5 w-5" />
                                LinkedIn
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Right: Profile Image */}
                <div className="relative flex-shrink-0 group">
                    <div className="w-48 h-48 md:w-72 md:h-72 rounded-3xl border-4 border-background shadow-2xl overflow-hidden relative z-10 transition-transform duration-500 hover:scale-105 bg-muted rotate-3 hover:rotate-0">
                        <Image
                            src="/profile_background.png"
                            alt="Ratchanon Profile"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 192px, 288px"
                            priority
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                        />
                    </div>
                    {/* Decorative Elements around image */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl -z-10 animate-pulse" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl -z-10 animate-pulse delay-75" />
                </div>

            </CardContent>
        </Card>
    );
}
