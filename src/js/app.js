import "./parts/sliders.js";
import "./parts/tabs.js";
import "./parts/popup.js";
import "./parts/menu.js";
import "./parts/search.js";
import { Fancybox } from "@fancyapps/ui";
import { stickyHeader } from "./parts/header.js";

stickyHeader();

Fancybox.bind("[data-fancybox]", {
    Carousel: {
        Panzoom: {
        },
    },
});
