import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllPizzasParams,
  fetchAllPizzasResponse,
  fetchPizzaByIdParams,
  fetchPizzaByIdResponse,
} from "../../types";
import { pizzas } from "../../db/pizzas";

export const fetchAllPizzas = createAsyncThunk<
  fetchAllPizzasResponse,
  fetchAllPizzasParams,
  { rejectValue: string }
>(
  "pizza/fetchAll",
  async ({ page, limit, category, sort, search }, thunkAPI) => {
    try {
      // Имитация задержки запроса
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Имитация ошибки
      // throw new Error("Ошибка");

      // Фильтрация данных по параметру категорий
      const categorizedPizzas =
        category === "all"
          ? pizzas
          : pizzas.filter((pizza) => pizza.category.includes(category));

      // Фильтрация данных по параметру сортировки
      const sortedPizzas = [...categorizedPizzas];

      if (sort === "popularity") {
        sortedPizzas.sort((a, b) => {
          // Если оба объекта имеют одинаковое значение hit, сортировка не изменится
          if (a.hit === b.hit) {
            return 0;
          }
          // Если hit объекта a равен true, он должен идти перед объектом b
          if (a.hit) {
            return -1;
          }
          // Если hit объекта b равен true, он должен идти перед объектом a
          return 1;
        });
      }

      if (sort === "rating") {
        sortedPizzas.sort((a, b) => b.rating - a.rating);
      }

      if (sort === "+price") {
        sortedPizzas.sort((a, b) => a.price[0] - b.price[0]);
      }

      if (sort === "-price") {
        sortedPizzas.sort((a, b) => b.price[0] - a.price[0]);
      }

      // Фильтрация данных по поисковому запросу
      const searchedPizzas = sortedPizzas.filter((pizza) =>
        pizza.title.toLowerCase().includes(search.toLowerCase())
      );

      // Фильтрация данных по параметрам пагинации
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedPizzas = searchedPizzas.slice(startIndex, endIndex);

      // Возвращаем данные из "бэкенда"
      return {
        pizza: paginatedPizzas,
        total: searchedPizzas.length,
      };
    } catch {
      return thunkAPI.rejectWithValue("Ошибка при запросе всех пицц");
    }
  }
);

export const fetchPizzaById = createAsyncThunk<
  fetchPizzaByIdResponse,
  fetchPizzaByIdParams,
  { rejectValue: string }
>("pizza/fetchById", async ({ id }, thunkAPI) => {
  try {
    // Имитация задержки запроса
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Имитация ошибки
    // throw new Error("Ошибка");

    const findedPizza = pizzas.find((pizza) => id === pizza.id);

    if (!findedPizza) {
      return {
        pizza: [],
        total: 0,
      };
    }

    return {
      pizza: [findedPizza],
      total: 1,
    };
  } catch {
    return thunkAPI.rejectWithValue(`Ошибка при запросе пиццы с ID: ${id}`);
  }
});
