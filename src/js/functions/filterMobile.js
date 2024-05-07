export const filterMobile = () => {

  const triggerBtn = document.querySelector(".shops__mobile-filter"),
   filter = document.querySelector(".filter"),
   closeBtn = document.querySelector('.filter__close'),
   body = document.querySelector("body"),
   wrapper = document.querySelector('.wrapper');

  if(filter) {
    const showFilter = () => {
      filter.classList.add('show');

      body.classList.add("lock");
      wrapper.classList.add("catalog-active");
    }

    const hideFilter = () => {
      filter.classList.remove('show');

      body.classList.remove("lock");
      wrapper.classList.remove("catalog-active");
    }

    triggerBtn.addEventListener('click', e => {
      e.stopPropagation();

      showFilter();
    });

    closeBtn.addEventListener('click', e => {
      e.stopPropagation();

      hideFilter();
    })

    document.addEventListener('click', e => {
      const target = e.target;
      const its_filter = target == filter || filter.contains(target);
      const its_trigger = target == triggerBtn;
      const filter_is_show = filter.classList.contains('show');

      if (!its_filter && !its_trigger && filter_is_show) {
        hideFilter();
      }
    });
  }
};