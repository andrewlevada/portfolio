import Image from "next/image";
import Link from "next/link";
import { Shot, shots } from "@/content/shots";

function Item({ item } : { item: Shot }) {
    return (
        <div className="flex flex-col gap-[10px] relative">
            <Image className="w-full h-auto rounded-[16px]" src={item.src} alt={item.alt} width={586} height={586} />

            {item.live ? (
                <Link href={item.live.href} target="_blank">
                    <div className="flex flex-row gap-[10px] justify-center w-full mb-[12px] hover:text-[#2F3FD2]">
                        <p className="text-inherit">
                            {item.live.text} ↗
                        </p>
                        
                        <p className="opacity-50 text-black">
                            {item.live.annotation}
                        </p>
                    </div>
                </Link>
            ) : ""}
        </div>
    )
}

export default function ImageSection() {
    return (
        <div className="flex flex-row gap-[8px]">
            {["left", "right"].map(side => (
                <div className="flex flex-col gap-[8px] w-[calc((100vw-48px)/2)] tiny:hidden" key={side}>
                    {shots.filter(item => item.side === side).map(item => (
                        <Item item={item} key={item.src} />
                    ))}
                </div>
            ))}

            <div className="hidden tiny:flex flex-col gap-[8px] ">
                {shots.map(item => (
                    <Item item={item} key={item.src} />
                ))}
            </div>
        </div>
    );
}