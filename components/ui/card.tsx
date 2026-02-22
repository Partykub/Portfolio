import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    noPadding?: boolean;
}

export function Card({ className, children, noPadding = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:ring-1 dark:ring-white/[0.03]",
                !noPadding && "p-6",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> { }

export function CardTitle({ className, children, ...props }: CardTitleProps) {
    return (
        <h3
            className={cn(
                "font-heading text-2xl font-semibold leading-none tracking-tight",
                className
            )}
            {...props}
        >
            {children}
        </h3>
    );
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> { }

export function CardDescription({ className, children, ...props }: CardDescriptionProps) {
    return (
        <p
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        >
            {children}
        </p>
    );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> { }

export function CardContent({ className, children, ...props }: CardContentProps) {
    return (
        <div className={cn("mt-2", className)} {...props}>
            {children}
        </div>
    );
}
