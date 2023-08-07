import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import { showPopup } from "../../store/popupSlice";
import styles from "./ProductItem.module.css";
import { priceToString } from "../../constants/constants";

const cx = classNames.bind(styles);

function ProductItem({ product, highlight, click }) {
   const dispatch = useDispatch();
   return (
      <div
         className={cx("col-3", "item")}
         onClick={() => {
            if (highlight) {
               highlight(product);
               dispatch(showPopup());
               return;
            }
            if (click) {
               click(product?._id?.$oid);
               return;
            }
         }}
      >
         <div className={cx("image")}>
            <img src={product.img1} alt={product.name} />
         </div>
         <div className={cx("info")}>
            <p className={cx("name")}>{product.name}</p>
            <p className={cx("price")}>
               {priceToString(product.price) + " VND"}
            </p>
         </div>
      </div>
   );
}

export default ProductItem;
