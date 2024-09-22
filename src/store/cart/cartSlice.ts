import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartState, PizzaCart } from "../../types";
import { getCartFromLocalStorage } from "../../utils/getCartFromLocalStorage";
import { calcPrice } from "../../utils/calcPrice";

const initialState: CartState = getCartFromLocalStorage();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<PizzaCart>) => {
      const findCartPizza = state.items.find(
        (cartPizza) =>
          cartPizza.id === action.payload.id &&
          cartPizza.size === action.payload.size &&
          cartPizza.type === action.payload.type
      );

      if (findCartPizza) {
        findCartPizza.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.price = calcPrice(state.items);
    },
    removeItem: (state, action: PayloadAction<PizzaCart>) => {
      const findCartPizza = state.items.find(
        (cartPizza) =>
          cartPizza.id === action.payload.id &&
          cartPizza.size === action.payload.size &&
          cartPizza.type === action.payload.type
      );

      if (findCartPizza && findCartPizza.count > 1) {
        findCartPizza.count--;
      }

      state.price = calcPrice(state.items);
    },
    deleteItem: (state, action: PayloadAction<PizzaCart>) => {
      state.items = state.items.filter(
        (cartPizza) =>
          !(
            cartPizza.id === action.payload.id &&
            cartPizza.size === action.payload.size &&
            cartPizza.type === action.payload.type
          )
      );

      state.price = calcPrice(state.items);
    },
    clearItems: (state) => {
      state.items = [];
      state.price = calcPrice(state.items);
    },
  },
});

export const { addItem, clearItems, deleteItem, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
