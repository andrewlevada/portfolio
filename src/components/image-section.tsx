import { ImageShowcase } from "@/content/ui-and-graphics";
import Image from "next/image";

export interface ImageSectionProps {
    images: ImageShowcase[];
}

export default function ImageSection({ images }: ImageSectionProps) {
    return (
        <div className="flex flex-row gap-[8px]">
            {["left", "right"].map(side => (
                <div className="flex flex-col gap-[8px] tiny:hidden" key={side}>
                    {images.filter(item => item.side === side).map(item => (
                        <div key={item.src}>
                            <Image className="w-full h-auto rounded-[16px]" src={item.src} alt={item.alt} width={586} height={586} />
                        </div>
                    ))}
                </div>
            ))}

            <div className="hidden tiny:flex flex-col gap-[8px] ">
                {images.map(item => (
                    <div key={item.src}>
                        <Image className="w-full h-auto rounded-[16px]" src={item.src} alt={item.alt} width={586} height={586} />
                    </div>
                ))}
            </div>
        </div>
    );
}