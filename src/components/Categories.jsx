import { img1, img2, img3, img4, img5 } from "../assets/img";
import classNames from "classnames/bind";
import styles from "./Categories.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Categories() {
   return (
      <div className={cx("category", "container")}>
         <div className={cx("header", "row")}>
            <h5>Carefully created collections</h5>
            <h1>Browse our categories</h1>
         </div>
         <div className={cx("collection", "row")}>
            <div className="row">
               <div className="col">
                  <Link to="/shop">
                     <img src={img1} alt="apple" />
                  </Link>
               </div>
               <div className="col">
                  <Link to="/shop">
                     <img src={img2} alt="apple" />
                  </Link>
               </div>
            </div>
            <div className="row">
               <div className="col">
                  <Link to="/shop">
                     <img src={img3} alt="apple" />
                  </Link>
               </div>
               <div className="col">
                  <Link to="/shop">
                     <img src={img4} alt="apple" />
                  </Link>
               </div>
               <div className="col">
                  <Link to="/shop">
                     <img src={img5} alt="apple" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Categories;
