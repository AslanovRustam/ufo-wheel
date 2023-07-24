import s from "./header.module.css";
import logo from "../../images/logo.png";

export default function Header() {
  return (
    <header>
      <img className={s.logo} src={logo} alt="logo twin" />
    </header>
  );
}
