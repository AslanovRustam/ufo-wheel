import s from "./main.module.css";
import Wheel from "../Wheel/Wheel";
import person from "../../images/man.png";
import ufo from "../../images/ufo.png";
import stars from "../../images/stars.png";

export default function Main() {
  return (
    <section className={s.container}>
      <Wheel />
      <img className={s.ufo} src={ufo} alt="ufo" />
      <img className={s.person} src={person} alt="cowboy" />
      <img className={s.stars} src={stars} alt="stars" />
    </section>
  );
}
