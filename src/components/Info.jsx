import classNames from "classnames/bind";
import styles from "./Info.module.css";

const cx = classNames.bind(styles);

function Info() {
   return (
      <div className={cx("container mt-5", "info")}>
         <div className={cx("row", "row1")}>
            <div className="col">
               <h1>Free ship</h1>
               <p>Free ship worldwide</p>
            </div>
            <div className="col">
               <h1>24 x 7 service</h1>
               <p>Free ship worldwide</p>
            </div>
            <div className="col">
               <h1>festival offer</h1>
               <p>Free ship worldwide</p>
            </div>
         </div>
         <div className={cx("row my-3", "row2")}>
            <div className="col">
               <h1>Let's be friends!</h1>
               <p>Nisi nisi tempor consequat labons sini.</p>
            </div>
            <form className={cx("col", "col_input")} method="POST">
               <input
                  type="email"
                  placeholder="Enter your email address"
                  className={cx("info-input")}
               />
               <button type="submit" className={cx("button")}>
                  Subscribe
               </button>
            </form>
         </div>
      </div>
   );
}

export default Info;
