import { useState } from "react";
import { useDispatch } from "react-redux";

import { ON_LOGIN } from "../store/LoginSlice";
import { getUserArr, saveUser } from "../constants/localStorage";

function Signup() {
   const [log, setLog] = useState(null);
   const dispatch = useDispatch();
   const handleSubmit = (e) => {
      e.preventDefault();
      const name = document.form.name.value;
      const email = document.form.email.value;
      const password = document.form.password.value;
      const phone = document.form.phone.value;
      if (!name || !email || !password || !phone) {
         setLog("Exist input is empty value!");
         return;
      }
      if (password.length <= 8) {
         setLog("password has less 8 letters!");
         return;
      }
      //check in store userArr about email
      const userArr = getUserArr();
      const hasUsedEmail = userArr.findIndex((user) => {
         return user.email === email;
      });
      if (hasUsedEmail !== -1) {
         setLog("This email was used by other people!");
         return;
      }
      saveUser({
         name,
         email,
         password,
         phone,
      });
      setLog("success");
      dispatch(ON_LOGIN());
      return;
   };
   return (
      <form
         name="form"
         className="card"
         onSubmit={(e) => {
            handleSubmit(e);
         }}
      >
         <h3 className="title">SIGN UP</h3>
         <input type="text" name="name" placeholder="Full Name" />
         <input type="email" name="email" placeholder="Email" />
         <input type="password" name="password" placeholder="Password" />
         <input type="number" name="phone" placeholder="Phone" />
         <button type="submit">sign up</button>
         <p style={{ color: log === "success" ? "green" : "red" }}>{log}</p>
         <p>
            Login?<span onClick={() => dispatch(ON_LOGIN())}>Click</span>
         </p>
      </form>
   );
}

export default Signup;
