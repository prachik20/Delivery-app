import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const { item, restDetails } = action.payload;

      const itemIdToAdd = item.info.id;

      const existingItem = state.items.find(
        (cartItem) => cartItem?.item?.info.id === itemIdToAdd
      );

      console.log(state.count);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({ item, count: 1, restDetails });
      }
    },
    removeItem: (state, action) => {
      const itemidToRemove = action.payload.info.id;

      const itemToRemoveIndex = state.items.findIndex(
        (cartItem) => cartItem?.item?.info.id === itemidToRemove
      );

      if (itemToRemoveIndex !== -1) {
        const itemToRemove = state.items[itemToRemoveIndex];

        if (itemToRemove.count > 1) {
          itemToRemove.count -= 1;
        } else {
          state.items.splice(itemToRemoveIndex, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
