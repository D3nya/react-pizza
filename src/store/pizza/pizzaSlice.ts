import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { FetchStatus, Pizza, PizzaState } from "../../types";
import { fetchAllPizzas, fetchPizzaById } from "./pizzaAsync";

const initialState: PizzaState = {
  items: [],
  total: 0,
  status: FetchStatus.Idle,
  error: "",
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // All
    builder.addCase(fetchAllPizzas.pending, (state) => {
      state.items = [];
      state.status = FetchStatus.Pending;
      state.error = "";
    });
    builder.addCase(
      fetchAllPizzas.fulfilled,
      (state, action: PayloadAction<{ pizza: Pizza[]; total: number }>) => {
        state.items = action.payload.pizza;
        state.total = action.payload.total;
        state.status = FetchStatus.Succeeded;
      }
    );
    builder.addCase(
      fetchAllPizzas.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.items = [];
        state.status = FetchStatus.Failed;
        state.error = action.payload || "Неизвестная ошибка";
      }
    );
    // By Id
    builder.addCase(fetchPizzaById.pending, (state) => {
      state.items = [];
      state.status = FetchStatus.Pending;
      state.error = "";
    });
    builder.addCase(
      fetchPizzaById.fulfilled,
      (state, action: PayloadAction<{ pizza: Pizza[]; total: number }>) => {
        state.items = action.payload.pizza;
        state.total = action.payload.total;
        state.status = FetchStatus.Succeeded;
      }
    );
    builder.addCase(
      fetchPizzaById.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.items = [];
        state.status = FetchStatus.Failed;
        state.error = action.payload || "Неизвестная ошибка";
      }
    );
  },
});

// export const {} = pizzaSlice.actions;

export default pizzaSlice.reducer;
