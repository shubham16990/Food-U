import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: []
  },
  reducers: {
    AddItem: (state, action) => {
      state.item.push(action.payload);
    },

    RemoveItem: (state, action) => {
      state.item = state.item.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { AddItem, RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
