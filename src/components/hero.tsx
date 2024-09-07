import ContactButton from "./contact-button";

const jobs = [{
    meta: "new • product designer",
    text: "ищу следующую карьерную возможность ✨"
}, {
    meta: "2024 - now • founding product designer",
    text: "в стартапе croissan studio я первый product person, поэтому помимо обычных дизайн задач, я выстраиваю продуктовую стратегию"
}, {
    meta: "2022 - 2024 • product designer + owner",
    text: "в icons8 я отвечал за пользовательский опыт сразу в нескольких продуктах из одной экосистемы с MAU 1M+, а так же создавалл продукты с нуля"
}]

export default function Hero() {
    return (
        <div className="flex flex-col gap-[20px] pt-[3px] pb-[13px]">
            <div className="flex flex-row justify-between h-[26px] text-[#474747] m:flex-col m:h-fit">
                <h1 className="self-center m:self-start">привет! я андрей, продуктовый дизайнер</h1>

                <h1 className="self-center w:hidden">© 2024</h1>

                <ContactButton />
            </div>

            <div className="flex flex-row gap-[100px] m:flex-col m:items-start w:gap-[50px] m:!gap-[30px]">
                <div className="flex flex-col gap-[2px] min-w-fit min-h-fit h-auto justify-between m:flex-row-reverse m:gap-[10px] m:justify-normal">
                    <div >
                        <p>
                            я люблю создавать ценность и продукты, которые её приносят.
                        </p>

                        <p className="opacity-40 mt-[9px]">
                            чтобы делать это эффективно, я
                        </p>

                        <p>
                            ① изучаю флоу с точки зрения AJTBD <br />
                            ② генерирую концепты и заворачиваю их в проверяемые гипотезы <br />
                            ③ а дальше дизайню, сверяясь с пользовательским фидбеком <br />
                        </p>
                    </div>

                    <p className="italic opacity-40 mt-[17px] m:min-w-[60px] m:w-[60px] m:mt-0">
                        как я создаю
                    </p>
                </div>

                <div className="flex flex-col gap-[4px] min-w-fit min-h-fit h-auto justify-between m:flex-row-reverse m:gap-[10px] m:justify-normal">
                    <div className="flex flex-col gap-[11px]">
                        {jobs.map((job, i) => (
                            <div className="max-w-[480px] w:max-w-[400px]" key={i}>
                                <p className="opacity-40">
                                    {job.meta}
                                </p>

                                <p>
                                    {job.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="italic opacity-40 mt-[17px] m:min-w-[60px] m:w-[60px] m:mt-0">
                        что я делал
                    </p>
                </div>
            </div>
        </div>
    )
}