import { ImageShowcase } from "@/content/ui-and-graphics";
import Image from "next/image";

export interface ImageSectionProps {
    title: string;
    images: ImageShowcase[];
}

export default function ImageSection({ title, images }: ImageSectionProps) {
    return (
        <div className="flex flex-col gap-[32px] items-center w-full">
            <h1>{title} <span className="opacity-60">{images.length}</span></h1>

            <div className="flex flex-row gap-[8px]">
                {["left", "right"].map(side => (
                    <div className="flex flex-col gap-[8px]" key={side}>
                    {images.filter(item => item.side === side).map(item => (
                        <div key={item.src}>
                            <Image className="w-full h-auto rounded-[16px]" src={item.src} alt={item.alt} width={586} height={586} />
                        </div>
                    ))}
                </div>
                ))}
            </div>
        </div>
    );
}