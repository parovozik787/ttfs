import "./Home.scss";
import { Header } from "../../Sections/Header/Header";
import { privacySwitcher } from "../../Components/Privacy-switcher/Privacy-switcher";
import { reportToggle } from "../../Components/User-block/User-block";

document.addEventListener("DOMContentLoaded", (event) => {
  Header();
  privacySwitcher();
  reportToggle();
});
