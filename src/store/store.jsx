import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popupSlice.jsx";
import cateShopReducer from "./cateShop.jsx";
import loginReducer from "./LoginSlice.jsx";
import cartReducer from "./listCart.jsx";

const store = configureStore({
   reducer: {
      popup: popupReducer,
      cateShop: cateShopReducer,
      login: loginReducer,
      cart: cartReducer,
   },
});

export default store;
