import { NavLink, useLoaderData } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Navbar.module.css";
import Cart from "../../assets/icons/Cart";
import Login from "../../assets/icons/Login";
import Down from "../../assets/icons/Down";

const cx = classNames.bind(styles);

function Navbar() {
   const { name } = useLoaderData();
   return (
      <header className="container">
         <nav className={cx("navbar")}>
            <div className={cx("navbar-group")}>
               <ul className={cx("list")}>
                  <li className={cx("item")}>
                     <NavLink
                        to="/"
                        className={({ isActive }) =>
                           cx({ highlight: isActive })
                        }
                     >
                        Home
                     </NavLink>
                  </li>
                  <li className={cx("item")}>
                     <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                           cx({ highlight: isActive })
                        }
                     >
                        Shop
                     </NavLink>
                  </li>
               </ul>
            </div>
            <div className={cx("logo")}>
               <NavLink to="/">
                  <h1>boutique</h1>
               </NavLink>
            </div>
            <div className={cx("navbar_right")}>
               <ul className={cx("list")}>
                  <li className={cx("item")}>
                     <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                           cx({ highlight: isActive }, "navbar-link")
                        }
                     >
                        <Cart />
                        <p>Cart</p>
                     </NavLink>
                  </li>
                  <li className={cx("item")}>
                     <NavLink
                        to="/logout"
                        className={({ isActive }) =>
                           cx({ highlight: isActive }, "navbar-link")
                        }
                     >
                        <Login />
                        <div>
                           <span>{name}</span>
                           <Down />
                           <span>(Logout)</span>
                        </div>
                     </NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      </header>
   );
}

export default Navbar;
