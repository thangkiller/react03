import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import { priceToString } from "../constants/constants";
import styles from "./Checkout.module.css";
import { getListCart } from "../constants/localStorage";

const cx = classNames.bind(styles);

function Checkout() {
   const productList = useSelector((state) => state.cart.listCart);
   const getTotal = () => {
      const productList = getListCart();
      return productList.reduce((total, product) => {
         return total + product.price * product.quantity;
      }, 0);
   };
   return (
      <section className={cx("billing", "container")}>
         <div className="row">
            <h3>Billing Details</h3>
         </div>
         <div className="row">
            <div className="col-8">
               <form action="" className={cx("form")}>
                  <div className={cx("form-group")}>
                     <label htmlFor="name">FULL NAME:</label>
                     <input
                        type="text"
                        id="name"
                        placeholder="Enter You Full Name Here!"
                        name="name"
                     />
                  </div>
                  <div className={cx("form-group")}>
                     <label htmlFor="email">EMAIL:</label>
                     <input
                        type="email"
                        id="email"
                        placeholder="Enter Your Email Here!"
                        name="email"
                     />
                  </div>
                  <div className={cx("form-group")}>
                     <label htmlFor="phone">PHONE NUMBER:</label>
                     <input
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Enter Your Phone Number Here!"
                     />
                  </div>
                  <div className={cx("form-group")}>
                     <label htmlFor="address">ADDRESS:</label>
                     <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Enter Your Address Here!"
                     />
                  </div>
                  <div className={cx("form-action")}>
                     <button type="submit">Place order</button>
                  </div>
               </form>
            </div>
            <div className="col-4">
               <div className={cx("card-container")}>
                  <h3>You order</h3>
                  {productList.map((product) => {
                     return (
                        <div
                           className={cx("card-content")}
                           key={product._id.$oid}
                        >
                           <p>{product.name}</p>
                           <p>{`${priceToString(product.price)} VND x ${
                              product.quantity
                           }`}</p>
                        </div>
                     );
                  })}
                  <div className={cx("card-content")}>
                     <p>total</p>
                     <p>{`${priceToString(getTotal())} VND`}</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Checkout;
