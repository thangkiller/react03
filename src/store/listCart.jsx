import { createSlice } from "@reduxjs/toolkit";
import { getListCart, saveListCart } from "../constants/localStorage";

const initialState = {
   listCart: getListCart(),
};

const listCartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      ADD_CART(state, action) {
         const listCart = getListCart();
         const updateListCart = [...listCart, action.payload];
         saveListCart(updateListCart);
         state.listCart = updateListCart;
      },
      UPDATE_CART(state, action) {
         const listCart = getListCart();
         const updateListCart = listCart.map((cart) => {
            if (action.payload.type === cart._id.$oid) {
               return {
                  ...cart,
                  ...action.payload.update,
               };
            }
            return cart;
         });
         saveListCart(updateListCart);
         state.listCart = updateListCart;
      },
      DELETE_CART(state, action) {
         const listCart = getListCart();
         const updateListCart = listCart.filter((cart) => {
            return cart._id.$oid !== action.payload;
         });
         saveListCart(updateListCart);
         state.listCart = updateListCart;
      },
      DELETE_LIST(state) {
         state.listCart = [];
      },
   },
});

export default listCartSlice.reducer;
export const { ADD_CART, UPDATE_CART, DELETE_CART, DELETE_LIST } =
   listCartSlice.actions;
