import { disableScroll } from "./disable-scroll";
import { enableScroll } from "./enable-scroll";

export const burger = () => {
  const burger = document?.querySelector("[data-burger]"),
    menu = document?.querySelector("[data-menu]"),
    overlay = document?.querySelector("[data-overlay]");

  //Menu clasess
  const menuContent = document.querySelector(".menu__content");
  const menuCatalog = document.querySelector(".menu__catalog-content");
  const catalogBtnMenu = document.querySelector(".menu__item-catalog");
  const catalogBtnSpan = catalogBtnMenu.querySelector(".span-text");
  const catalogBtn = document.querySelector(".header__catalog-button");
  const menuClose = document.querySelector(".menu__close");

  menuClose.addEventListener("click", (e) => {
    // Setting aria attributes
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");

    // Change overlay activness
    overlay?.setAttribute("data-overlay", "false");

    // Enabling scroll
    enableScroll();

    catalogBtn.classList.remove("active");

    menu.classList.remove("menu--active");

    menuContent.classList.remove('hide');
    // menuCatalog.classList.remove('hide');
  });

  burger?.addEventListener("click", () => {
    // Change classess
    burger?.classList.add("burger--active");
    menu?.classList.add("menu--active");

    if (menu?.classList.contains("menu--active")) {
      // Setting aria attributes
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");

      // Change overlay activness
      overlay?.setAttribute("data-overlay", "true");

      // First Level Menu
      catalogBtnSpan.innerHTML = "Catalog";
      // menuContent.style.display = "flex";
      // menuCatalog.style.display = "none";
      // menuContent.classList.add('hide');
      menuCatalog.classList.add('hide');
      catalogBtnMenu.classList.remove("active");

      // Disabling scroll
      disableScroll();
    } else {
      // Setting aria attributes
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");

      // Change overlay activness
      overlay?.setAttribute("data-overlay", "false");

      // Enabling scroll
      enableScroll();

      catalogBtn.classList.remove("active");
    }
  });

  overlay?.addEventListener("click", (e) => {
    if (e.target && e.target.hasAttribute("data-overlay")) {
      // Setting aria attributes
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");

      // Change overlay activness
      overlay?.setAttribute("data-overlay", "false");

      // Change classess
      burger?.classList.remove("burger--active");
      menu?.classList.remove("menu--active");

      // Enabling scroll
      enableScroll();
    }
  });
};
