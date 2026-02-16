import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Download } from "lucide-react";
import Link from "next/link"; // Import Link for Next.js navigation

export function HeroCard() {
    return (
        <Card className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-500/10 to-orange-500/10 border-none relative overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />

            <CardContent className="flex flex-col h-full justify-between p-6 md:p-8">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-blue-500 mb-6 opacity-80 blur-xl absolute -top-2 -left-2" />

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground relative z-10">
                        Hey, I’m Ratchanon.
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium text-muted-foreground max-w-lg">
                        A Software Developer who bridges complex Backend logic with Pixel-Perfect Frontend.
                    </h2>

                    <p className="text-base text-muted-foreground/80 max-w-md pt-2">
                        Specialized in Next.js, AI Integration, and building scalable web applications.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-8">
                    <Button className="rounded-full font-medium" size="lg">
                        <Download className="mr-2 h-4 w-4" />
                        Download Resume
                    </Button>

                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full" asChild>
                            <Link href="https://github.com" target="_blank" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full" asChild>
                            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
