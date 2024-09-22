import { RootState } from "../store";

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart;

export const selectAllCartPizzasById = (id: number) => (state: RootState) =>
  state.cart.items.filter((cartPizza) => cartPizza.id === id);
