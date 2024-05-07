export const loggedDropdown = () => {
  const loggedBtn = document.querySelector(".header__logged-button");

  loggedBtn.addEventListener("click", (e) => {
    const loggedBtnParent = e.currentTarget.closest("div");
    loggedBtnParent.classList.toggle("active");
  });


  window.addEventListener("click", (e) => {
    const clickedEl = e.target;
    if (!clickedEl.closest(".header__logged")) {
      const activeBtn = document.querySelector(".header__logged.active");
      if (activeBtn) {
        activeBtn.classList.remove("active");
      }
    }
  });
};
