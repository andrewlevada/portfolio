import Link from "next/link";

const texts = [{
    text: (
        <p>
            я люблю создавать ценность и продукты, которые её приносят. <br className="m:hidden"/>
            для этого я генерирую концепты¹ + раскапываю гипотезы² <br className="m:hidden"/>
            + смотрю на AJTBD³, дальше → дизайню и пишу код ← <br className="m:hidden"/>
            и наблюдаю за использованием этих продуктов ⁎
        </p>
    ),
    label: "как я делаю"
}, {
    text: (
        <p>
            я успел поработать в icons8; <br className="hidden w:block m:!hidden"/>
            создать самое разное (ниже); <br className="m:hidden"/>
            а сейчас с друзьями ⌁ строю gen-ai стартап ⌁ <br className="m:hidden"/>
            и ⁓ ищу следующее место работы ⁓
        </p>
    ),
    label: "что я делаю"
}, {
    text: (
        <p>
            счастья
        </p>
    ),
    label: "что я желаю"
}]

export default function Hero() {
    return (
        <div className="flex flex-col gap-[20px] pt-[3px] pb-[13px]">
            <div className="flex flex-row justify-between h-[26px] text-[#474747] m:flex-col m:h-fit">
                <h1 className="self-center m:self-start">привет! я андрей, продуктовый дизайнер</h1>

                <h1 className="self-center w:hidden">© 2024</h1>

                <Link href="https://t.me/andrewlevada" target="_blank"
                    className="self-center hover:text-[#2F3FD2] m:text-[#474747]/60 m:self-start">
                    <h1>написать мне ↗</h1>
                </Link>
            </div>
            
            <div className="flex flex-row gap-[120px] m:flex-col m:gap-[20px] m:items-start w:gap-[40px]">
                {texts.map((item, i) => (
                    <div className="flex flex-col gap-[21px] min-w-fit min-h-fit h-auto justify-between m:flex-row-reverse m:gap-[10px] m:justify-normal"key={i}>
                        {item.text}

                        <p className="opacity-30 m:min-w-[60px] m:w-[60px]">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}