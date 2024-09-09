import { cases } from "@/content/cases";
import Image from "next/image";

export default function CasesSection() {
    return (
        <div className="flex flex-col gap-[20px]">
            <div className="flex flex-row gap-x-[17px] flex-wrap">
                <h1>хайлайты кейсов</h1>
                <h1 className="opacity-20">описание процесса work in progress</h1>  
            </div>
            
            <div className="grid grid-cols-3 gap-[8px] m:flex m:flex-col m:gap-[33px]">
                {cases.map((item, index) => (
                    <div key={index} className="flex flex-col gap-[17px] min-h-full justify-between">
                        <div className="flex flex-col gap-[3px] mr-[60px]">
                            <p className="opacity-40">{item.context}</p>
                            <p>{item.task} → {item.result}</p>
                        </div>

                        <Image
                            src={item.imageSrc}
                            alt={`Case study image for ${item.context}`}
                            width={400}
                            height={400}
                            className="w-full h-auto rounded-[16px]"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}