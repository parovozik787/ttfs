export const reportToggle = () => {
  const btnMenu = document.querySelector(".user-block__report-toggle-button");
  const menu = document.querySelector(".user-block__report-list");
  const toggleMenu = function () {
    menu.classList.toggle("user-block__report-list--open");
  };

  btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains(
      "user-block__report-list--open"
    );

    if (!its_menu && !its_btnMenu && menu_is_active) {
      toggleMenu();
    }
  });
};
