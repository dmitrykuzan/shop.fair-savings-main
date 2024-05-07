import Choices from "choices.js"

export const choices = () => {
  const select = document.querySelector('.shops__select');

  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
  });
}