import classNames from "classnames/bind";
import bannerImg from "../assets/img/banner1.jpg";
import styles from "./Banner.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Banner() {
   return (
      <div className={cx("banner", "container")}>
         <div className={cx("image")}>
            <img src={bannerImg} alt="banner main" />
         </div>
         <div className={cx("content")}>
            <h6 className={cx("title")}>New inspiration 2020</h6>
            <h1 className={cx("sale")}>
               20% off on new
               <br />
               season
            </h1>
            <button className={cx("action")}>
               <Link to="/shop">Browse collections</Link>
            </button>
         </div>
      </div>
   );
}

export default Banner;
