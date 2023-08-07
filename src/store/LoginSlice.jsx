import { createSlice } from "@reduxjs/toolkit";
import { removeCurrentUser } from "../constants/localStorage";

const initialState = {
   userState: "signin",
};

const loginSlice = createSlice({
   name: "login",
   initialState,
   reducers: {
      ON_LOGIN(state) {
         state.userState = "signin";
      },
      ON_SIGNUP(state) {
         state.userState = "signup";
      },
      ON_AUTH(state) {
         state.userState = "auth";
      },
      ON_LOGOUT(state) {
         removeCurrentUser();
         state.userState = "signin";
      },
   },
});

export default loginSlice.reducer;
export const { ON_LOGIN, ON_SIGNUP, ON_AUTH, ON_LOGOUT } = loginSlice.actions;
