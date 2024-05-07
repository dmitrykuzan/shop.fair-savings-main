import Choices from "choices.js";

export const customSelect = () => {
  const selects = document.querySelectorAll(".custom-select");

  if (!selects?.length) return;

  selects.forEach((select) => {
    const noResultsText = select.getAttribute("data-no-results");
    const noChoicesText = select.getAttribute("data-no-choices");

    console.log(noResultsText);

    const choice = new Choices(select, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: "",
      placeholder: true,
      noResultsText: noResultsText || "No results found",
      noChoicesText: noChoicesText || "No choices to choose from",
    });
  });
};
