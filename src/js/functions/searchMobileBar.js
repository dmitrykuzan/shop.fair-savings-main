export const searchMobileBar = () => {
  const searchMobileBtn = document.querySelector(
      ".search__header-button--mobile"
    ),
    wrapper = document.querySelector(".wrapper"),
    body = document.querySelector("body"),
    overlay = document.querySelector("[data-overlay]"),
    searchBar = document.querySelector('.search__header-mobile');

  if (window.innerWidth < 575) {
    searchMobileBtn.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("active");
      const searchBtnParent = e.currentTarget.closest("div");
      searchBtnParent.classList.toggle("active");
      wrapper.classList.toggle("search-active");
      body.classList.toggle("lock");
    });
  }

  overlay.addEventListener('click', e => {
    if (e.target && e.target.hasAttribute("data-overlay")) {
      searchMobileBtn.classList.remove('active');
      wrapper.classList.remove("search-active");
      body.classList.remove("lock");
      searchBar.classList.remove("active");
    }
  })

};
