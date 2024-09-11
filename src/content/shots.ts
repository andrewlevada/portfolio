export interface Shot {
    src: string;
    alt: string;
    side: "left" | "right";
    live?: {
        text: string;
        href: string;
        annotation: string;
    };
}

export const shots: Shot[] = [{
    src: "/content/illustration-generator-ui.png",
    alt: "интерфейс генератора иллюстраций",
    side: "left",
    live: {
        text: "illustration generator",
        href: "https://icons8.com/illustration-generator/new",
        annotation: "спроектировал"
    }
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
    src: "/content/mega-creator-ui.png",
    alt: "мокапы интерфейса Мега Криейтора",
    side: "left",
    live: {
        text: "mega creator editor",
        href: "https://icons8.com/mega-creator/new",
        annotation: "мейнтейнил и развивал ux и ui"
    }
}, {
    src: "/content/croissan-landing.png",
    alt: "лендинг Croissan Studio",
    side: "right",
    live: {
        text: "croissan studio landing",
        href: "https://croissanstudio.ru",
        annotation: "задизайнил и сверстал"
    }
}, {
    src: "/content/ouch-illustration-modal.png",
    alt: "концепт страницы иллюстрации на ауче",
    side: "right"
}, {
    src: "/content/cava-cup.png",
    alt: "фото стаканчика для кофе",
    side: "left"
}]
