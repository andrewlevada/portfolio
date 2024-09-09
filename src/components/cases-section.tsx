import { cases } from "@/content/cases";
import Image from "next/image";

export default function CasesSection() {
    return (
        <div className="flex flex-col gap-[20px]">
            <div className="flex flex-row gap-row-[17px] flex-wrap">
                <h1>хайлайты кейсов</h1>
                <h1 className="opacity-20">описание процесса work in progress</h1>  
            </div>
            
            <div className="grid grid-cols-3 gap-[8px] m:flex m:flex-col m:gap-[33px]">
                {cases.map((item, index) => (
                    <div key={index} className="flex flex-col gap-[24px] min-h-full justify-between">
                        <div className="flex flex-col gap-[24px] mr-[60px]">
                            <div>
                                <p className="opacity-40">{item.context}</p>
                                <h3>{item.task}</h3>
                            </div>

                            <h3>→ {item.result}</h3>
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