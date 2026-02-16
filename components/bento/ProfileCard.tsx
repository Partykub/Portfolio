import { Card } from "@/components/ui/card";
import Image from "next/image";

export function ProfileCard() {
    return (
        <Card className="col-span-1 h-full min-h-[300px] overflow-hidden bg-[#FCD34D] border-none relative group" noPadding>
            <div className="absolute inset-0 flex items-end justify-center">
                <div className="relative w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105">
                    <Image
                        src="/profile_background.png"
                        alt="Ratchanon Profile"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>
            </div>
        </Card>
    );
}
