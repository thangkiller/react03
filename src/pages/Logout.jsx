import { redirect } from "react-router-dom";
import store from "../store/store";
import { removeCurrentUser, removeListCart } from "../constants/localStorage";
import { ON_LOGOUT } from "../store/LoginSlice";
import { DELETE_LIST } from "../store/listCart";

export async function loader() {
   removeCurrentUser();
   removeListCart();
   store.dispatch(ON_LOGOUT());
   store.dispatch(DELETE_LIST());
   return redirect("/login");
}
