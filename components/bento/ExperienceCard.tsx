"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Calendar, Building2 } from "lucide-react";
import { useLanguage } from "@/app/context/LanguageContext";

export function ExperienceCard() {
    const { t } = useLanguage();

    return (
        <Card className="col-span-1 md:col-span-3 bg-card border-border p-6 md:p-8">
            <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                {t.experience.title}
            </h3>

            <div className="space-y-10">
                {/* Work Experience Timeline */}
                <div className="relative border-l border-border ml-2 md:ml-4 space-y-10 pb-2">
                    {t.experience.jobs.map((job: any, i: number) => (
                        <div key={i} className="pl-6 md:pl-8 relative">
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                <h4 className="font-bold text-lg text-foreground">{job.role}</h4>
                                <Badge variant="secondary" className="w-fit flex gap-1 items-center text-xs font-normal text-muted-foreground self-start sm:self-auto hover:bg-muted">
                                    <Calendar className="w-3 h-3" />
                                    {job.period}
                                </Badge>
                            </div>

                            <div className="flex items-center gap-2 text-primary font-medium mb-3 text-sm">
                                <Building2 className="w-4 h-4" />
                                {job.company}
                            </div>

                            <ul className="space-y-2 text-muted-foreground text-sm list-disc pl-4 marker:text-primary/50">
                                {job.details.map((detail: string, index: number) => (
                                    <li key={index} className="leading-relaxed">{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="pt-2 border-t border-border/50">
                    <h3 className="text-lg font-bold font-heading mb-4 flex items-center gap-2 mt-6">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        {t.experience.education.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 bg-muted/30 p-4 rounded-lg border border-border/50 hover:border-border transition-colors">
                        <div>
                            <div className="font-semibold text-foreground">{t.experience.education.degree}</div>
                            <div className="text-sm text-muted-foreground mt-1">{t.experience.education.university}</div>
                        </div>
                        <div className="text-right flex flex-col items-end gap-1">
                            <Badge variant="outline" className="text-xs font-normal text-muted-foreground">
                                {t.experience.education.period}
                            </Badge>
                            <div className="text-sm font-medium text-primary whitespace-nowrap">
                                GPA {t.experience.education.gpa}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
}
