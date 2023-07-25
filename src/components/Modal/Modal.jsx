import s from "./modal.module.css";
import firstPopup from "../../images/loose.png";
import secondPopup from "../../images/win.png";
import { createPortal } from "react-dom";
import { useEffect } from "react";
const modalRoot = document.querySelector("#modal");

export default function Modal({ onClose, count, setCount, showModal }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);
  function CloseAndSpin() {
    if (count === 0) {
      return;
    }
    onClose();
    setCount(count - 1);
  }

  return createPortal(
    <div
      className={`${s.modalBackDrop} ${showModal ? s.show : ""}`}
      onClick={() => CloseAndSpin()}
    >
      <div className={s.container}>
        {count === 1 && <img className={s.popUp} src={firstPopup} alt="lose" />}
        {count === 0 && <img className={s.popUp} src={secondPopup} alt="win" />}
      </div>
    </div>,
    modalRoot
  );
}
