import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { setCateShop } from "../store/cateShop";
import styles from "./Menu.module.css";

const cx = classNames.bind(styles);

const CATE = [
   {
      title: "apple",
      list: ["all"],
   },
   {
      title: "iphone & mac",
      list: ["Iphone", "Ipad", "Macbook"],
   },
   {
      title: "wireless",
      list: ["Ipod", "Watch"],
   },
   {
      title: "other",
      list: ["Mouse", "Keyboard", "Other"],
   },
];

function Menu() {
   const cate = useSelector((state) => state.cateShop.cate);
   const dispatch = useDispatch();
   return (
      <aside className={cx("sidebar")}>
         <h3 className={cx("header")}>categories</h3>
         {CATE.map((type, i) => {
            return (
               <div key={i} className={cx("group")}>
                  <h5 className={cx("title")}>{type.title}</h5>
                  {type.list.map((item, i) => {
                     let styles = {};
                     if (cate === item.toLowerCase()) {
                        styles = { color: "var(--content-color)" };
                     }
                     return (
                        <p
                           key={i}
                           onClick={() => dispatch(setCateShop(item))}
                           style={styles}
                        >
                           {item}
                        </p>
                     );
                  })}
               </div>
            );
         })}
      </aside>
   );
}

export default Menu;
