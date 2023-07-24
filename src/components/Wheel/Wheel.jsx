import s from "./wheel.module.css";
import arrow from "../../images/arrow.png";
import wheel from "../../images/wheel.png";
import btnSpin from "../../images/spin.png";
import btn from "../../images/btn1.png";

export default function Wheel() {
  return (
    <div className={s.container}>
      <div className={s.containerWheel}>
        <img className={s.arrow} src={arrow} alt="arrow" />
        <img className={s.wheel} src={wheel} alt="wheel" />
        <img className={s.btnSpin} src={btnSpin} alt="btnSpin" />
      </div>
      <div className={s.containerBtn}>
        <img className={s.btn} src={btn} alt="btn" />
      </div>
    </div>
  );
}
