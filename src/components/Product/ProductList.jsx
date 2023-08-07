import classNames from "classnames/bind";
import styles from "./ProductList.module.css";
import ProductItem from "./ProductItem";

const cx = classNames.bind(styles);
function ProductList({ list, highlight, click }) {
   return (
      <div className={cx("content", "row")}>
         {list.map((product, index) => {
            if (index < 9) {
               return (
                  <ProductItem
                     product={product}
                     highlight={highlight}
                     click={click}
                     key={product?._id?.$oid}
                  />
               );
            }
            return null;
         })}
      </div>
   );
}

export default ProductList;
