import Link from "next/link";

export interface Job {
    meta: string;
    text: JSX.Element;
}

export const jobs: Job[] = [{
    meta: "new • product designer",
    text: (
        <p>ищу следующую карьерную возможность ✨</p>
    )
}, {
    meta: "2024 - now • founding product designer",
    text: (
        <p>
            в стартапе {}
            <Link className="text-link" href="https://croissanstudio.ru" target="_blank">croissan studio</Link> {}
            я первый product person, поэтому помимо обычных дизайн задач, я выстраиваю продуктовую стратегию
        </p>
    )
}, {
    meta: "2022 - 2024 • product designer + owner",
    text: (
        <p>
            в {}
            <Link className="text-link" href="https://icons8.com" target="_blank">icons8</Link> {}
            я отвечал за пользовательский опыт сразу в нескольких продуктах из одной экосистемы с MAU 1M+, а так же создавалл продукты с нуля
        </p>
    )
}]