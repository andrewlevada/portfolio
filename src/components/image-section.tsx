import Image from "next/image";
import Link from "next/link";
import { Shot, shots } from "@/content/shots";

function Item({ item } : { item: Shot }) {
    return (
        <div className="relative">
            <Image className="w-full h-auto rounded-[16px]" src={item.src} alt={item.alt} width={586} height={586} />

            {item.link ? (
                <Link href={item.link} target="_blank">
                    <div className="w-[40px] h-[40px] rounded-[8px] flex justify-center items-center absolute bottom-[8px] right-[8px] 
                    bg-[#202020] hover:bg-[#303030] active:bg-[#404040]">
                        <Image className="opacity-90" src="/arrow.svg" width={24} height={24} alt="стрелочка"/>
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