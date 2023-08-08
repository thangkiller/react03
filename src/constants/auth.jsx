import { redirect } from "react-router-dom";
import getCurrentUser from "./localStorage";

export default async function auth() {
   const currentUser = getCurrentUser();
   if (!currentUser) {
      return redirect("/react03/login");
   }
   return currentUser;
}
