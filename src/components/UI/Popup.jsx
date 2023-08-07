import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { hidePopup } from "../../store/popupSlice";
import styles from "./Popup.module.css";
import XMark from "../../assets/icons/XMark";

const cx = classNames.bind(styles);

function Popup({ children }) {
   const [exitClick, setExitClick] = useState(false);
   const [bodyClick, setBodyClick] = useState(false);
   const [containerClick, setContainerClick] = useState(false);
   const dispatch = useDispatch();

   useEffect(() => {
      setExitClick(false);
      setBodyClick(false);
      setContainerClick(false);
      if (exitClick || (containerClick && !bodyClick && !exitClick)) {
         dispatch(hidePopup());
      }
   }, [containerClick]);
   return (
      <div className={cx("popup")} onClick={() => setContainerClick(true)}>
         <div className={cx("popup--body")} onClick={() => setBodyClick(true)}>
            {children}
            <button className={cx("exit")} onClick={() => setExitClick(true)}>
               <XMark />
            </button>
         </div>
      </div>
   );
}

export default Popup;
