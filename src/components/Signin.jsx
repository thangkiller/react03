import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ON_AUTH, ON_SIGNUP } from "../store/LoginSlice";
import { useDispatch } from "react-redux";
import { getUserArr, saveCurrentUser } from "../constants/localStorage";

function Signin() {
   const [log, setLog] = useState(null);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const handleSubmit = (e) => {
      e.preventDefault();
      const email = document.form.email.value;
      const password = document.form.password.value;
      if (!email || !password) {
         setLog("Exist input is empty value!");
         return;
      }
      //check in store userArr about email and password
      const userArr = getUserArr();
      const hasUser = getUserArr().findIndex((user) => {
         return user.email === email && user.password === password;
      });
      if (hasUser === -1) {
         setLog("Email or password fill wrong!");
         document.form.password.value = "";
         return;
      }
      setLog("success");
      dispatch(ON_AUTH());
      saveCurrentUser(userArr[hasUser]);
      navigate("/");
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
         <h3 className="title">SIGN IN</h3>
         <input type="email" name="email" placeholder="Email" />
         <input type="password" name="password" placeholder="Password" />
         <button type="submit">sign in</button>
         <p style={{ color: log === "success" ? "green" : "red" }}>{log}</p>
         <p>
            Create an account?
            <span onClick={() => dispatch(ON_SIGNUP())}>Sign up</span>
         </p>
      </form>
   );
}

export default Signin;
