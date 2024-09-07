export interface ImageShowcase {
    src: string;
    alt: string;
    link?: string;
    side: "left" | "right";
}

export const uiAndGraphics: ImageShowcase[] = [{
    src: "/content/illustration-generator-ui.png",
    alt: "интерфейс генератора иллюстраций",
    link: "https://icons8.com/illustration-generator/new",
    side: "left"
}, {
    src: "/content/neuroartist-gravity-email.png",
    alt: "иллюстрация для рассылки НейроХудожника",
    side: "right"
}, {
    src: "/content/whiteboard-widget.png",
    alt: "концепт виджета, тренирующего дизайнеров для whiteboard челленджа",
    side: "right"
}, {
    src: "/content/origami-poster.png",
    alt: "постер оригами фактори: магазина наборов бумаги из Кореи и Японии",
    side: "right"
}, {
    src: "/content/neuroartist-tags-concept.png",
    alt: "мокап концепта интерфейса НейроХудожника",
    side: "left"
}, {
    src: "/content/mega-creator-ui.png",
    alt: "мокапы интерфейса Мега Криейтора",
    link: "https://icons8.com/mega-creator/new",
    side: "left"
}, {
    src: "/content/croissan-landing.png",
    alt: "лендинг Croissan Studio",
    link: "https://croissanstudio.ru",
    side: "right"
}, {
    src: "/content/ouch-illustration-modal.png",
    alt: "концепт страницы иллюстрации на ауче",
    side: "right"
}, {
    src: "/content/cava-cup.png",
    alt: "фото стаканчика для кофе",
    side: "left"
}]
