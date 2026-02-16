import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DesignSystemPage() {
    return (
        <div className="container mx-auto py-10 space-y-10">
            <div>
                <h1 className="text-4xl font-heading font-bold mb-4">Design System</h1>
                <p className="text-muted-foreground">
                    A collection of design tokens and reusable components.
                </p>
            </div>

            {/* Typography */}
            <section className="space-y-4">
                <h2 className="text-2xl font-heading font-semibold border-b pb-2">Typography</h2>
                <div className="space-y-2">
                    <h1 className="text-4xl font-heading font-bold">Heading 1 (Outfit)</h1>
                    <h2 className="text-3xl font-heading font-semibold">Heading 2 (Outfit)</h2>
                    <h3 className="text-2xl font-heading font-medium">Heading 3 (Outfit)</h3>
                    <p className="text-base text-foreground">
                        Body text using Inter font. The quick brown fox jumps over the lazy dog.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Muted text for descriptions and secondary information.
                    </p>
                </div>
            </section>

            {/* Colors */}
            <section className="space-y-4">
                <h2 className="text-2xl font-heading font-semibold border-b pb-2">Colors</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                        <div className="h-20 w-full rounded-md bg-background border border-border"></div>
                        <p className="text-sm font-medium">Background</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 w-full rounded-md bg-foreground"></div>
                        <p className="text-sm font-medium">Foreground</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 w-full rounded-md bg-primary"></div>
                        <p className="text-sm font-medium">Primary</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 w-full rounded-md bg-secondary"></div>
                        <p className="text-sm font-medium">Secondary</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 w-full rounded-md bg-accent"></div>
                        <p className="text-sm font-medium">Accent</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 w-full rounded-md bg-muted"></div>
                        <p className="text-sm font-medium">Muted</p>
                    </div>
                    <div className="space-y-2">
                        <div className="h-20 w-full rounded-md bg-destructive"></div>
                        <p className="text-sm font-medium">Destructive</p>
                    </div>
                </div>
            </section>

            {/* Components */}
            <section className="space-y-4">
                <h2 className="text-2xl font-heading font-semibold border-b pb-2">Components</h2>

                {/* Buttons */}
                <div className="space-y-2">
                    <h3 className="text-lg font-medium">Buttons</h3>
                    <div className="flex flex-wrap gap-4">
                        <Button>Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="link">Link</Button>
                    </div>
                </div>

                {/* Badges */}
                <div className="space-y-2">
                    <h3 className="text-lg font-medium">Badges</h3>
                    <div className="flex flex-wrap gap-4">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                    </div>
                </div>

                {/* Cards */}
                <div className="space-y-2">
                    <h3 className="text-lg font-medium">Cards</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description goes here.</CardDescription>
                            <CardContent>
                                This is the content of the card. It has a nice hover effect and rounded corners.
                            </CardContent>
                        </Card>

                        <Card className="bg-primary text-primary-foreground">
                            <CardTitle className="text-primary-foreground">Primary Card</CardTitle>
                            <CardDescription className="text-primary-foreground/80">Description</CardDescription>
                            <CardContent>
                                A card with the primary color theme.
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
