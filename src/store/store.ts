import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizza/pizzaSlice";
import filterReducer from "./filter/filterSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
