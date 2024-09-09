export interface Case {
    context: string;
    task: string;
    result: string;
    imageSrc: string;
}

export const cases: Case[] = [{
    context: "в библиотеке иллюстраций ouch",
    task: "улучшил пейвол и флоу вокруг него",
    result: "на 30% увеличилось число новых подписок / месяц",
    imageSrc: "/content/ouch-paywall-upgrade.png",
}, {
    context: "в редакторе коллажей mega creator",
    task: "нашёл и починил критические ux’овые проблемы в основном флоу",
    result: "юзабилити тесты перестали фейлиться",
    imageSrc: "/content/mega-creator-ux-fixes.png",
}];
