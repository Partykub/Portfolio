"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowUpRight, Check, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export function ContactCard() {
    const { t } = useLanguage();
    const email = "ratchanonn.kub@gmail.com";

    return (
        <Card className="col-span-1 md:col-span-3 bg-card border-border p-8 md:p-12 flex flex-col items-center text-center justify-center gap-8">
            <div className="space-y-3 max-w-2xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                    {t.contact.title}
                </h3>
                <p className="text-muted-foreground text-lg md:text-xl font-medium">
                    {t.contact.cta}
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full py-4">
                {/* Email Text Link */}
                <Link
                    href={`mailto:${email}`}
                    className="group flex items-center gap-3 text-lg md:text-xl font-semibold text-foreground hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-muted/50"
                >
                    <Mail className="w-6 h-6 text-primary" />
                    {email}
                </Link>

                <div className="hidden md:block w-px h-8 bg-border" />

                {/* Primary Resume Button */}
                <Button size="lg" className="rounded-full px-8 text-base shadow-md hover:shadow-lg transition-all font-semibold" asChild>
                    <Link href="/Resume_Ratchanon_Kunyodying.pdf" target="_blank" className="flex items-center">
                        <Download className="mr-2 h-5 w-5" />
                        {t.contact.resume}
                    </Link>
                </Button>
            </div>

            {/* Footer Grid - Contact Methods */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 w-full max-w-5xl mx-auto">

                {/* Location Card */}
                <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-secondary/30 transition-colors gap-3 group">
                    <div className="p-3 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors">
                        <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium text-muted-foreground mb-1">{t.contact.location}</p>
                        <p className="text-base font-semibold text-foreground">Bangkok</p>
                    </div>
                </div>

                {/* Phone Card (Clickable) */}
                <Link
                    href="tel:+66903244616"
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-secondary/30 hover:border-primary/30 transition-all gap-3 group cursor-pointer"
                >
                    <div className="p-3 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium text-muted-foreground mb-1">{t.contact.phone}</p>
                        <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">090-324-4616</p>
                    </div>
                </Link>

                {/* LinkedIn Card */}
                <Link
                    href="https://linkedin.com/in/ratchanon-kunyodying"
                    target="_blank"
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 transition-all gap-3 group cursor-pointer"
                >
                    <div className="p-3 rounded-full bg-background border border-border group-hover:border-[#0077b5]/50 transition-colors">
                        <Linkedin className="w-5 h-5 text-foreground group-hover:text-[#0077b5] transition-colors" />
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium text-muted-foreground mb-1 flex items-center justify-center gap-1">
                            LinkedIn <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </p>
                        <p className="text-base font-semibold text-foreground group-hover:text-[#0077b5] transition-colors">Connect</p>
                    </div>
                </Link>

                {/* GitHub Card */}
                <Link
                    href="https://github.com/Partykub"
                    target="_blank"
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:bg-foreground/5 hover:border-foreground/30 transition-all gap-3 group cursor-pointer"
                >
                    <div className="p-3 rounded-full bg-background border border-border group-hover:border-foreground/50 transition-colors">
                        <Github className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium text-muted-foreground mb-1 flex items-center justify-center gap-1">
                            GitHub <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </p>
                        <p className="text-base font-semibold text-foreground group-hover:text-foreground transition-colors">Follow</p>
                    </div>
                </Link>

            </div>
        </Card>
    );
}
