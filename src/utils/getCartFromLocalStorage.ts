import { CartState, PizzaCart } from "../types";
import { calcPrice } from "./calcPrice";

/**
 * Получает состояние корзины из локального хранилища браузера и возвращает его.
 *
 * @returns {CartState} Объект, содержащий список пицц в корзине и общую стоимость.
 */
export const getCartFromLocalStorage = () => {
  const data = localStorage.getItem("pizzaCart");
  const pizzas: PizzaCart[] = data ? JSON.parse(data) : [];
  const price = calcPrice(pizzas);

  const initialState: CartState = {
    items: pizzas,
    price,
  };

  return initialState;
};
