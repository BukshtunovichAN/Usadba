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

  // Установите кнопку "Всё меню" как активную по умолчанию
  filterItems("Всё меню");
  setActiveButton("Всё меню");
});

// Функция для фильтрации элементов
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

// Функция для установки активной кнопки
function setActiveButton(category) {
  document.querySelectorAll(".filter .button").forEach((button) => {
    if (button.innerText.trim() === category) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Обработчик кликов на кнопки
document.querySelectorAll(".filter .button").forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.innerText.trim();
    filterItems(category);
    setActiveButton(category);
  });
});
