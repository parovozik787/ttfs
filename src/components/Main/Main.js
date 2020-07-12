export const Main = () => {
  const reportButton = document.querySelector(
    ".user-block__report-toggle-button"
  );
  const reportBlock = document.querySelector(".user-block__report-list");
  reportButton.addEventListener("click", () => {
    reportBlock.classList.toggle("user-block__report-list--open");
  });
};
