import copyClipboard from "copy-to-clipboard";

export const copy = () => {
  const copyBtns = document.querySelectorAll(".copy[data-copy-text]");

  if (!copyBtns?.length) return;

  copyBtns.forEach((copyBtn) => {
    const initialText = copyBtn.textContent;

    copyBtn.addEventListener("click", (e) => {
      const text = e.currentTarget.getAttribute("data-copy-text");
      const afterText = e.currentTarget.getAttribute("data-after-copy");

      copyClipboard(text);

      e.target.textContent = afterText;

      setTimeout(() => {
        e.target.textContent = initialText;
      }, 3000);
    });
  });
};
