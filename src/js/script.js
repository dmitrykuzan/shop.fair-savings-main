"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import {
  burger,
  dynamicAdaptive,
  mobileCheck,
  catalog,
  loggedDropdown,
  searchMobileBar,
  filterDropDown,
  filterMobile,
  accordion,
  customSelect,
  modals,
  tabs,
  copy,
} from "./functions/";

// Components
import {
  bannersSlider,
  popularSlider,
  newsSlider,
  newCashbackSlider,
  newDiscountSlider,
  similarSlider,
  choices,
} from "./components/";


window.addEventListener("DOMContentLoaded", () => {
  dynamicAdaptive();
  mobileCheck();
  burger();
  bannersSlider();
  popularSlider();
  catalog();
  loggedDropdown();
  searchMobileBar();
  newsSlider();
  similarSlider();
  filterDropDown(
    ".filter__list",
    "filter__item-btn",
    ".filter__item",
    "active"
  );

  filterMobile();
  newCashbackSlider();
  newDiscountSlider();
  tabs(
    ".ticket__tabs",
    ".ticket__tabs-navigation-btn",
    ".ticket__tabs-content",
    "active"
  );
  accordion(
    ".profile-accordion--questions",
    "profile-accordion__item-head",
    ".profile-accordion__item",
    "active"
  );
  customSelect();
  modals();
  copy();
  choices()
});
