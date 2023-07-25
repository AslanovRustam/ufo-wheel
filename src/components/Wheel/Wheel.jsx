import s from "./wheel.module.css";
import arrow from "../../images/arrow.png";
import wheel from "../../images/wheel.png";
import btnSpin from "../../images/spin.png";
import btn from "../../images/btn1.png";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

export default function Wheel() {
  const [count, setCount] = useState(2);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (count === 1) {
      setTimeout(() => togleModal(), 5000);
    }
    if (count === 0) {
      setTimeout(() => togleModal(), 7000);
    }
  }, [count]);
  function togleModal() {
    return setShowModal(!showModal);
  }
  console.log(count);

  return (
    <>
      <div className={s.container}>
        <div className={s.containerWheel}>
          <img className={s.arrow} src={arrow} alt="arrow" />
          <img
            className={`${s.wheel}   ${count === 1 && s.wheel_1_spin}
          ${count === 0 && s.wheel_2_spin}`}
            src={wheel}
            alt="wheel"
          />
          <img
            className={s.btnSpin}
            src={btnSpin}
            alt="btnSpin"
            onClick={() => setCount(count - 1)}
          />
        </div>
        <div className={s.containerBtn}>
          <img
            className={s.btn}
            src={btn}
            alt="btn"
            onClick={() => setCount(count - 1)}
          />
        </div>
      </div>
      <Modal
        onClose={togleModal}
        count={count}
        setCount={setCount}
        showModal={showModal}
      />
    </>
  );
}
