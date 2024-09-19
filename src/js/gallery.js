import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    perPage: 2,
    gap: "1.5rem",
    padding: "3rem",
    type: "loop",
    pagination: true,
    // autoplay: true,
    autoScroll: {
      speed: 1,
    },
    drag: "free",
    snap: true,
    breakpoints: {
      768: {
        perPage: 2,
        gap: ".7rem",
        padding: "1.5rem",
      },
      480: {
        perPage: 1,
        gap: ".7rem",
        pagination: false,
      },
    },
  }).mount({ AutoScroll });
});
