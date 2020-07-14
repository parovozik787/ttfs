export const privacySwitcher = () => {
  const privacySwitcherButton = document.querySelector(
    ".privacy-switcher__button"
  );

  privacySwitcherButton.addEventListener("click", () => {
    privacySwitcherButton.classList.toggle("privacy-switcher__button--private");
  });
};
