import Link from "next/link";

const texts = [{
    text: (
        <p>
            я люблю создавать ценность и продукты, которые её приносят. <br/>
            для этого я генерирую концепты¹ + раскапываю гипотезы² <br/>
            + смотрю на AJTBD³, дальше → дизайню и пишу код ← <br/>
            и наблюдаю за использованием этих продуктов ⁎
        </p>
    ),
    label: "как я делаю"
}, {
    text: (
        <p>
            я успел поработать в icons8; создать самое разное (ниже); <br/>
            а сейчас ⌁ строю gen-ai стартап ⌁ с друзьями <br/>
            и ⁓ ищу парт-тайм ⁓
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
            <div className="flex flex-row justify-between h-[26px] text-[#474747]">
                <h1 className="self-center">привет! я андрей, продуктовый дизайнер</h1>

                <h1 className="self-center">© 2024</h1>

                <Link href="https://t.me/andrewlevada" target="_blank"
                    className="self-center hover:text-[#2F3FD2]">
                    <h1>написать мне ↗</h1>
                </Link>
            </div>
            
            <div className="flex flex-row gap-[120px]">
                {texts.map((item, i) => (
                    <div className="flex flex-col gap-[21px] min-h-fit h-auto justify-between" key={i}>
                        {item.text}

                        <p className="opacity-30">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}