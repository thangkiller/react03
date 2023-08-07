import { useState } from "react";
import { json, useLoaderData, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import { ADD_CART, UPDATE_CART } from "../store/listCart";
import { getListCart } from "../constants/localStorage";
import URL, { priceToString } from "../constants/constants";
import ProductList from "../components/Product/ProductList";
import styles from "./DetailPage.module.css";

const cx = classNames.bind(styles);

function DetailPage() {
   const [quantity, setQuantity] = useState(1);
   const { product, relatedProducts } = useLoaderData();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const desc = product.long_desc.split("\n");
   const handlerAddCart = () => {
      const newProduct = { ...product, quantity };
      console.log(newProduct);
      const isOldProduct = getListCart().some(
         (cart) => cart._id.$oid === newProduct._id.$oid
      );
      if (isOldProduct) {
         dispatch(
            UPDATE_CART({ type: newProduct._id.$oid, update: { quantity } })
         );
      } else {
         dispatch(ADD_CART(newProduct));
      }
      navigate("/cart");
   };
   return (
      <div className={cx("container", "detail")}>
         <div className="row">
            <div className="col-2">
               <img
                  className={cx("image", "image-small")}
                  src={product.img1}
                  alt="detail"
               />
               <img
                  className={cx("image", "image-small")}
                  src={product.img2}
                  alt="detail"
               />
               <img
                  className={cx("image", "image-small")}
                  src={product.img3}
                  alt="detail"
               />
               <img
                  className={cx("image", "image-small")}
                  src={product.img4}
                  alt="detail"
               />
            </div>
            <div className="col-4">
               <img className={cx("image")} src={product.img1} alt="detail" />
            </div>
            <div className="col-6">
               <h1 className={cx("title")}>{product.name}</h1>
               <p className={cx("price")}>
                  {priceToString(product.price) + " VND"}
               </p>
               <p className={cx("desc")}>{product.short_desc}</p>
               <p>
                  CATEGORY: <span>{product.category}</span>
               </p>
               <div className="btn-group" style={{ marginTop: "1rem" }}>
                  <button
                     className="btn btn-outline-secondary"
                     style={{ borderRight: "none" }}
                     disabled
                  >
                     QUANTITY
                  </button>
                  <button
                     className="btn btn-outline-secondary"
                     style={{ borderLeft: "none", borderRight: "none" }}
                     onClick={() =>
                        setQuantity(quantity === 1 ? 1 : quantity - 1)
                     }
                  >
                     {"<"}
                  </button>
                  <button
                     className="btn btn-outline-secondary"
                     style={{ borderLeft: "none", borderRight: "none" }}
                  >
                     {quantity}
                  </button>
                  <button
                     className="btn btn-outline-secondary"
                     style={{ borderLeft: "none" }}
                     onClick={() => setQuantity(quantity + 1)}
                  >
                     {">"}
                  </button>
                  <button
                     className="btn btn-dark"
                     onClick={() => handlerAddCart()}
                  >
                     Add to cart
                  </button>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col">
               <p className={cx("long-desc")}>DESCRIPTION</p>
               <h5 style={{ marginTop: "0.5rem" }}>PRODUCT DESCRIPTION</h5>
               <div className={cx("text")}>
                  {desc.map((line, i) => {
                     return <p key={i}>{line}</p>;
                  })}
               </div>
            </div>
         </div>
         <div className="row" style={{ marginTop: "3rem" }}>
            <h5>RELATED PRODUCTS</h5>
            <ProductList
               list={relatedProducts}
               click={(productId) => navigate("/shop/" + productId)}
            />
         </div>
      </div>
   );
}

export default DetailPage;
export async function loader({ params }) {
   const id = params.productId;
   const res = await fetch(URL);
   const data = await res.json();
   if (data.error) {
      throw json({ message: data.error.message }, { status: data.error.code });
   }
   if (!res.ok) {
      throw json({ message: "could not fetch event!" }, { status: 401 });
   }
   const product = data.find((item) => {
      return item._id.$oid === id;
   });
   const relatedProducts = data.filter((item) => {
      if (item._id.$oid === id) return false;
      return item.category === product.category;
   });
   return { product, relatedProducts };
}
