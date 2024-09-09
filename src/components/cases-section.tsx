import { cases } from "@/content/cases";
import Image from "next/image";

export default function CasesSection() {
    return (
        <div className="flex flex-col gap-[20px]">
            <div className="flex flex-row gap-x-[17px] flex-wrap">
                <h1>хайлайты кейсов</h1>
                <h1 className="opacity-20">описание процесса work in progress</h1>  
            </div>
            
            <div className="grid grid-cols-3 gap-x-[8px] gap-y-[40px] w:grid-cols-2 tiny:!grid-cols-1">
                {cases.map((item, index) => (
                    <div key={index} className="flex flex-col gap-[17px] min-h-full justify-between tiny:justify-start tiny:h-fit tiny:min-h-fit">
                        <div className="flex flex-col gap-[3px] mr-[60px] tiny:mr-0">
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