import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isShow: false,
};

const popupSlice = createSlice({
   name: "popup",
   initialState,
   reducers: {
      showPopup(state) {
         state.isShow = true;
      },
      hidePopup(state) {
         state.isShow = false;
      },
   },
});

export default popupSlice.reducer;
export const { showPopup, hidePopup } = popupSlice.actions;
