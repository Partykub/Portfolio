import { BentoGrid } from "@/components/bento/BentoGrid";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center py-10 md:py-20 relative">
      <Navbar />
      <BentoGrid />
    </main>
  );
}
