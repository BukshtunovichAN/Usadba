document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuContainer = document.querySelector("[data-menu]");
  const closeButton = document.querySelector("[data-menu-close]");
  const menuLinks = document.querySelectorAll(
    ".mobile-pages a, .mobile-contacts a, .mobile-social a"
  );

  function closeMenu() {
    menuContainer.classList.remove("is-open");
  }

  closeButton.addEventListener("click", closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});

// function filterItems(category) {
//   const items = document.querySelectorAll(".flex-element");

//   items.forEach((item) => {
//     const itemCategory = item.querySelector("p").innerText;

//     if (category === "Всё меню" || itemCategory === category) {
//       item.classList.add("show");
//     } else {
//       item.classList.remove("show");
//     }
//   });
// }

window.filterItems = function (category) {
  const items = document.querySelectorAll(".flex-element");

  items.forEach((item) => {
    const itemCategory = item.querySelector("p").innerText;

    if (category === "Всё меню" || itemCategory === category) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
