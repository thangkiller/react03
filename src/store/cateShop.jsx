import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cate: "",
};

const cateShopSlice = createSlice({
   name: "cateShop",
   initialState,
   reducers: {
      setCateShop(state, action) {
         state.cate = action.payload.toLowerCase();
      },
   },
});

export default cateShopSlice.reducer;
export const { setCateShop } = cateShopSlice.actions;
