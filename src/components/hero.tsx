import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";

export default function Hero() {
    return (
        <div className="flex flex-col gap-[32px] pt-[120px] pb-[60px] justify-center items-center">
            <div className="flex flex-col items-center">
                <h1>привет!</h1>
                <h1>я андрей
                    <span className="inline-flex pl-[8px] relative top-[5px]">
                        <Image className="w-[36px] h-[36px] rounded-full" src="/me.png"
                        alt="моё фото" width={36} height={36}></Image>
                    </span>
                , продуктовый дизайнер</h1>
            </div>
            
            <div className="flex flex-row gap-[8px] p-[8px] pl-[16px] items-center bg-[#F2E3D5] border border-[#684A2F] rounded-[16px] text-[16px]">
                <p><span className="opacity-60">new:</span> сейчас я открыт к парт-тайму</p>

                <Link href="https://t.me/andrewlevada" target="_blank">
                    <Button>
                        <p>Написать</p>
                    </Button>
                </Link>
            </div>
        </div>
    )
}