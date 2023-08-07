import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { priceToString } from "../constants/constants";
import { DELETE_CART, UPDATE_CART } from "../store/listCart";
import Trash from "../assets/icons/Trash";
import Gift from "../assets/icons/Gift";
import ArrowLeft from "../assets/icons/ArrowLeft";
import ArrowRight from "../assets/icons/ArrowRight";
import ChevronLeft from "../assets/icons/ChevronLeft";
import ChevronRight from "../assets/icons/ChevronRight";
import styles from "./Cart.module.css";

const cx = classNames.bind(styles);

function Cart() {
   const productList = useSelector((state) => state.cart.listCart);
   const dispatch = useDispatch();

   const handlerRemove = (id) => {
      dispatch(DELETE_CART(id));
   };
   const getTotal = () => {
      return productList.reduce((total, product) => {
         return total + product.price * product.quantity;
      }, 0);
   };
   return (
      <section className={cx("cart", "container")}>
         <div className="row">
            <h3>Shopping Cart</h3>
         </div>
         <div className="row">
            <div className="col-9">
               <div className="row">
                  <table className={cx("table", "cart-table")}>
                     <thead className={cx("thead")}>
                        <tr>
                           <th scope="col">image</th>
                           <th scope="col" className={cx("product")}>
                              product
                           </th>
                           <th scope="col">price</th>
                           <th scope="col">quality</th>
                           <th scope="col">total</th>
                           <th scope="col">remove</th>
                        </tr>
                     </thead>
                     <tbody className={cx("tbody")}>
                        {productList.map((product) => {
                           return (
                              <tr key={product._id.$oid}>
                                 <th scope="row">
                                    <div className={cx("cell")}>
                                       <img
                                          src={product.img1}
                                          alt="product in cart"
                                       />
                                    </div>
                                 </th>
                                 <td>
                                    <div className={cx("cell")}>
                                       <span>{product.name}</span>
                                    </div>
                                 </td>
                                 <td>
                                    <div className={cx("cell")}>
                                       <span>
                                          {priceToString(product.price)}
                                          <br />
                                          VND
                                       </span>
                                    </div>
                                 </td>
                                 <td>
                                    <div className={cx("cell")}>
                                       <button
                                          type="button"
                                          onClick={() => {
                                             dispatch(
                                                UPDATE_CART({
                                                   type: product._id.$oid,
                                                   update: {
                                                      quantity:
                                                         product.quantity === 1
                                                            ? 1
                                                            : product.quantity -
                                                              1,
                                                   },
                                                })
                                             );
                                          }}
                                       >
                                          <ChevronLeft />
                                       </button>
                                       <span>{product.quantity}</span>
                                       <button
                                          type="button"
                                          onClick={() => {
                                             dispatch(
                                                UPDATE_CART({
                                                   type: product._id.$oid,
                                                   update: {
                                                      quantity:
                                                         product.quantity + 1,
                                                   },
                                                })
                                             );
                                          }}
                                       >
                                          <ChevronRight />
                                       </button>
                                    </div>
                                 </td>
                                 <td>
                                    <div className={cx("cell")}>
                                       <span>
                                          {priceToString(
                                             product.price * product.quantity
                                          )}
                                          <br />
                                          VND
                                       </span>
                                    </div>
                                 </td>
                                 <td>
                                    <button
                                       onClick={() =>
                                          handlerRemove(product._id.$oid)
                                       }
                                    >
                                       <Trash />
                                    </button>
                                 </td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               </div>
               <div className={cx("row", "table-down")}>
                  <button
                     type="button"
                     className={cx("col-3", "btn", "table-down-button")}
                  >
                     <Link to="/shop">
                        <ArrowLeft />
                        <span>Continue Shopping</span>
                     </Link>
                  </button>
                  <div className="col-6"></div>
                  <button
                     type="button"
                     className={cx(
                        "col-3",
                        "btn",
                        "table-down-button",
                        "table-down-button_right"
                     )}
                  >
                     <Link to="/checkout">
                        <span>Proceed to checkout</span>
                        <ArrowRight />
                     </Link>
                  </button>
               </div>
            </div>
            <div className="col-3">
               <div className={cx("card-container")}>
                  <h3>Cart total</h3>
                  <div className={cx("card-content")}>
                     <p>subtotal</p>
                     <p>{`${priceToString(getTotal())} VND`}</p>
                  </div>
                  <div className={cx("card-content")}>
                     <p>total</p>
                     <p>{`${priceToString(getTotal())} VND`}</p>
                  </div>
                  <div className={cx("card-actions")}>
                     <input type="text" placeholder="Enter you coupon" />
                     <button type="button">
                        <Gift />
                        <span>Apply coupon</span>
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Cart;
