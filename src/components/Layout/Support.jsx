import { useState } from "react";
import classNames from "classnames/bind";
import avatar from "../../assets/img/avatar.webp";
import PapperClip from "../../assets/icons/PapperClip";
import FaceSmile from "../../assets/icons/FaceSmile";
import PapperAir from "../../assets/icons/PapperAir";
import styles from "./Support.module.css";
import Messenger from "../../assets/icons/Messenger";

const cx = classNames.bind(styles);

const CUS = "customer";
const AD = "admin";

const CONVERSATION = [
   {
      obj: CUS,
      chat: "Xin chào",
   },
   {
      obj: CUS,
      chat: "Làm thế nào để xem các sản phẩm",
   },
   {
      obj: AD,
      chat: "Chào bạn",
   },
   {
      obj: AD,
      chat: "Bạn có thể vào mục Shop để xem các sản phẩm",
   },
];

function Support() {
   const [hide, setHide] = useState(true);
   return (
      <div className={cx("wrapper")}>
         <div className={cx("card", "box", { hide })}>
            <div className={cx("header")}>
               <h6>Customer Support</h6>
               <button type="button">Let's Chat App</button>
            </div>
            <div className={cx("body")}>
               {CONVERSATION.map((people, i) => {
                  if (people.obj === AD) {
                     return (
                        <div className={cx("rower")} key={i}>
                           <div>
                              <img src={avatar} alt="avatar" />
                           </div>
                           <div className={cx("comment")}>
                              <p>{`ADMIN: ${people.chat}`}</p>
                           </div>
                        </div>
                     );
                  }
                  return (
                     <div
                        className={cx("rower", {
                           "rower-right": people.obj === CUS,
                        })}
                        key={i}
                     >
                        <div className={cx("comment")}>{people.chat}</div>
                     </div>
                  );
               })}
            </div>
            <div className={cx("footer")}>
               <div className={cx("left")}>
                  <img src={avatar} alt="avatar" />
               </div>
               <div className={cx("middle")}>
                  <input type="text" placeholder="Enter message!" />
               </div>
               <div className={cx("right")}>
                  <PapperClip />
                  <FaceSmile />
                  <PapperAir />
               </div>
            </div>
         </div>
         <div className={cx("icon")} onClick={() => setHide(!hide)}>
            <Messenger />
         </div>
      </div>
   );
}

export default Support;
