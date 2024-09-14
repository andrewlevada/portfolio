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
    context: "для ии-инструмента нейрохудожника",
    task: "за 3 часа написал mvp продукта",
    result: "валидировали полезность главной фичи",
    imageSrc: "/content/neuro-artist-mvp.png",
}, {
    context: "в редакторе коллажей mega creator",
    task: "нашёл и починил критические ux’овые проблемы в основном флоу",
    result: "юзабилити тесты перестали фейлиться",
    imageSrc: "/content/mega-creator-ux-fixes.png",
}, {
    context: "в ии-инструменте human generator",
    task: "спроектировал продукт с нуля до 200 000 MAU",
    result: "успешно запустились",
    imageSrc: "/content/human-generator-launch.png",
}, {
    context: "в редакторе коллажей mega creator",
    task: "написал прототип 3D интеракций",
    result: "вдохновил команду на эту фичу и передал контекст по тому, как она должна ощущаться",
    imageSrc: "/content/mega-creator-3d.png",
}, {
    context: "для университета иннополис",
    task: "сделал ux'овый редизайн физического пространства отдела поддержки студентов",
    result: "студенты перестали теряться внутри",
    imageSrc: "/content/319-redesign.png",
}];
