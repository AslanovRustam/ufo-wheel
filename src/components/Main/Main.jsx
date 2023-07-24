import s from "./main.module.css";
import person from "../../images/man.png";
import ufo from "../../images/ufo.png";
import Wheel from "../Wheel/Wheel";

export default function Main() {
  return (
    <section className={s.container}>
      <Wheel />
      <img className={s.ufo} src={ufo} alt="ufo" />
      <img className={s.person} src={person} alt="cowboy" />
    </section>
  );
}
