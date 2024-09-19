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
    meta: "2024 - now • founding product designer @ croissan studio",
    text: (
        <p>
            спроектировал и собрал первую версию ии инструмента {}
            <Link className="text-link" href="https://neuroartist.ru" target="_blank">neuroartist.ru</Link>. {}
            собрал брендинги и сделал лендинги {}
            <Link className="text-link" href="https://neuroartist.ru" target="_blank">продукта</Link> и {}
            <Link className="text-link" href="https://croissanstudio.ru" target="_blank">команды</Link>.
        </p>
    )
}, {
    meta: "2022 - 2024 • product designer + owner @ icons8",
    text: (
        <p> 
            в библиотеке иллюстраций {}
            <Link className="text-link" href="https://icons8.com/illustrations" target="_blank">ouch</Link> {}
            понизил фрикшен при поиске контента. {}

            вывел user-friendliness онлайн-редактора {}
            <Link className="text-link" href="https://icons8.com/mega-creator" target="_blank">mega creator</Link> {}
            на новый уровень. 

            спроектировал 3 новых продукта — генераторы {}
            <Link className="text-link" href="https://icons8.com/illustration-generator" target="_blank">иллюстраций</Link>, {}
            <Link className="text-link" href="https://generated.photos/human-generator" target="_blank">людей</Link> и {}
            <Link className="text-link" href="https://icons8.com/threedio" target="_blank">сток 3D моделей</Link>. {}

            всего коснулся 1M+ MAU, а ещё мейнтейнил дизайн систему компании.
        </p>
    )
}]