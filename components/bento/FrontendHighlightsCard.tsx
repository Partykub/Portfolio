"use client";

import { Card } from "@/components/ui/card";
import { useLanguage } from "@/app/context/LanguageContext";
import { Palette, LineChart, Blocks, ArrowRight } from "lucide-react";

export function TechnicalExpertiseCard() {
    const { t } = useLanguage();

    const items = [
        {
            icon: Palette,
            title: t.expertise.items.design.title,
            desc: t.expertise.items.design.desc,
            gradient: "from-pink-500/10 to-rose-500/10",
            border: "group-hover:border-pink-500/30",
            iconColor: "text-pink-500"
        },
        {
            icon: LineChart,
            title: t.expertise.items.interactive.title,
            desc: t.expertise.items.interactive.desc,
            gradient: "from-blue-500/10 to-cyan-500/10",
            border: "group-hover:border-blue-500/30",
            iconColor: "text-blue-500"
        },
        {
            icon: Blocks,
            title: t.expertise.items.architecture.title,
            desc: t.expertise.items.architecture.desc,
            gradient: "from-violet-500/10 to-purple-500/10",
            border: "group-hover:border-violet-500/30",
            iconColor: "text-violet-500"
        }
    ];

    return (
        <Card className="col-span-1 md:col-span-3 bg-transparent border-none shadow-none p-0 overflow-visible">
            <div className="flex items-center gap-3 mb-6 px-2">
                <div className="h-8 w-1 bg-primary rounded-full" />
                <h3 className="text-2xl font-bold font-heading text-foreground">
                    {t.expertise.title}
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`group relative p-6 rounded-2xl border border-border bg-card hover:bg-card transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-xl ${item.border} flex flex-col justify-between h-full`}
                    >
                        {/* Decorative Gradient Background */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.gradient} rounded-2xl -z-10`} />

                        {/* <div className="space-y-4">
                            <div className={`w-12 h-12 rounded-xl bg-background border border-border/50 flex items-center justify-center shadow-sm ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className="w-6 h-6" />
                            </div>

                            <div>
                                <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div> */}

                        <div className="mt-6 pt-4 border-t border-border/50 flex justify-end">
                            <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
