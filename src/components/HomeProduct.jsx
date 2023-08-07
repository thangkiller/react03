import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";

import useHttps from "../hooks/useHttps";
import Popup from "./UI/Popup";
import ProductList from "./Product/ProductList";
import URL, { priceToString } from "../constants/constants";
import Cart from "../assets/icons/Cart";
import styles from "./HomeProducts.module.css";

const cx = classNames.bind(styles);

function Productions() {
   const [productPopup, setProductPopup] = useState(null);
   const [products, setProducts] = useState([]);
   const isShow = useSelector((state) => state.popup.isShow);
   const transformData = (data) => setProducts(data);
   const highlightProduct = (product) => setProductPopup(product);
   const { sendRequest } = useHttps(
      {
         url: URL,
      },
      transformData
   );

   useEffect(() => {
      sendRequest();
   }, []);
   return (
      <div className={cx("container", "product")}>
         <div className={cx("header", "row")}>
            <h5>made the hard way</h5>
            <h1>top trending products</h1>
         </div>
         <ProductList list={products} highlight={highlightProduct} />
         {productPopup && isShow && (
            <Popup>
               <div className={cx("highlight_product")}>
                  <div className={cx("highlight_img")}>
                     <img src={productPopup.img1} alt={productPopup.name} />
                  </div>
                  <div className={cx("highlight_info")}>
                     <h6 className={cx("highlight_name")}>
                        {productPopup.name}
                     </h6>
                     <p className={cx("highlight_price")}>
                        {priceToString(productPopup.price) + " VND"}
                     </p>
                     <p className={cx("highlight_desc")}>
                        {productPopup.short_desc}
                     </p>
                     <button>
                        <Link to={`/shop/${productPopup._id.$oid}`}>
                           <Cart />
                           <span>View Detail</span>
                        </Link>
                     </button>
                  </div>
               </div>
            </Popup>
         )}
      </div>
   );
}

export default Productions;
