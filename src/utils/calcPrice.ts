import { PizzaCart } from "../types";

/**
 * Вычисляет общую стоимость всех элементов в корзине.
 * @param {PizzaCart[]} pizzas - Массив объектов типа CartItem.
 * @returns {number} - Общая стоимость всех элементов в корзине.
 */
export const calcPrice = (pizzas: PizzaCart[]): number => {
  if (pizzas.length === 0) {
    return 0;
  }

  return pizzas.reduce((sum, { price, count }) => sum + price * count, 0);
};
