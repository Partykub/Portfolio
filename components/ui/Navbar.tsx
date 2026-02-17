"use client";

import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Navbar() {
    return (
        <nav className="fixed top-4 right-4 z-50 flex items-center gap-2 p-2 rounded-full bg-background/50 backdrop-blur-md border border-border shadow-sm">
            <LanguageToggle />
            <ModeToggle />
        </nav>
    );
}
