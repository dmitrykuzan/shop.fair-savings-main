import { disableScroll } from "./disable-scroll";
import { enableScroll } from "./enable-scroll";

export const catalog = () => {
  const catalogBtn = document.querySelector(".header__catalog-button"),
    catalogListDesk = document.querySelector(".header__full-wrapper"),
    body = document.querySelector("body"),
    wrapper = document.querySelector(".wrapper"),
    menu = document.querySelector(".menu"),
    burger = document.querySelector("[data-burger]"),
    overlay = document.querySelector("[data-overlay]");

  const catalogDeskActive = () => {
    catalogListDesk.classList.toggle("active");
    // body.classList.toggle("lock");
    wrapper.classList.toggle("catalog-active");

    if (catalogListDesk.classList.contains("active")) {
      disableScroll();
      overlay.setAttribute("data-overlay", "true");
    } else {
      enableScroll();
      overlay.setAttribute("data-overlay", "false");
    }
  };

  const burgerOpen = () => {
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Закрыть меню");
    burger.classList.toggle("burger--active");
    overlay.setAttribute("data-overlay", "true");
  };

  const burgerClose = () => {
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Открыть меню");
    overlay.setAttribute("data-overlay", "false");
  };

  //кнопка в хедере
  catalogBtn.addEventListener("click", (e) => {
    if (window.innerWidth > 767) {
      e.currentTarget.classList.toggle("active");
      catalogDeskActive();
    } else {
      menu.classList.toggle("menu--active");
      e.currentTarget.classList.toggle("active");
      burgerOpen();
      body.classList.toggle("lock");

      if (menu.classList.contains("menu--active")) {
        catalogBtnMenu.classList.add("active");
        catalogBtnSpan.innerHTML = "Back to menu";
        menuContent.classList.add("hide");
        menuCatalog.classList.remove("hide");
      } else {
        menuContent.classList.remove("hide");
        burgerClose();
      }
    }
  });

  const catalogBtnMenu = document.querySelector(".menu__item-catalog");
  const menuContent = document.querySelector(".menu__content");
  const menuCatalog = document.querySelector(".menu__catalog-content");
  const catalogBtnSpan = catalogBtnMenu.querySelector(".span-text");

  catalogBtnMenu.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");

    if (e.currentTarget.classList.contains("active")) {
      catalogBtnSpan.innerHTML = "Back to menu";
      // menuContent.style.display = "none";
      // menuCatalog.style.display = "flex";
      menuContent.classList.add("hide");
      menuCatalog.classList.remove("hide");
    } else {
      catalogBtnSpan.innerHTML = "Catalog";
      // menuContent.style.display = "flex";
      // menuCatalog.style.display = "none";
      menuContent.classList.remove("hide");
      menuCatalog.classList.add("hide");
    }
  });

  overlay.addEventListener("click", (e) => {
    if (e.target && e.target.hasAttribute("data-overlay")) {
      menuContent.classList.remove("hide");
      catalogListDesk.classList.remove("active");
      catalogBtn.classList.remove("active");
      wrapper.classList.remove("catalog-active");
    }
  });
};
