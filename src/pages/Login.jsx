import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import Banner from "../assets/img/banner1.jpg";
import styles from "./Login.module.css";
import Signup from "../components/Signup";
import Signin from "../components/Signin";

const cx = classNames.bind(styles);

function LoginPage() {
   const userState = useSelector((state) => state.login.userState);
   if (userState === "signin") {
      return (
         <main className={cx("wrapper")}>
            <img className={cx("image")} src={Banner} alt="banner" />
            <div className={cx("form-container")}>
               <Signin />
            </div>
         </main>
      );
   } else if (userState === "signup") {
      return (
         <main className={cx("wrapper")}>
            <img className={cx("image")} src={Banner} alt="banner" />
            <div className={cx("form-container")}>
               <Signup />
            </div>
         </main>
      );
   }
   return <div>Login</div>;
}

export default LoginPage;
