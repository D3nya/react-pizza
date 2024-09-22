import React from "react";

import { PizzaCart } from "../types";
import { useAppDispatch } from "../hooks/useRedux";
import { addItem, deleteItem, removeItem } from "../store/cart/cartSlice";

import Button from "./ui/Button";

import minusSvg from "../assets/img/minus.svg";
import plusSvg from "../assets/img/plus.svg";
import deleteSvg from "../assets/img/close.svg";

interface CartPizzaProps {
  className?: string;
  pizzaCart: PizzaCart;
}

const CartPizza: React.FC<CartPizzaProps> = ({ className, pizzaCart }) => {
  const dispatch = useAppDispatch();

  const onClickMinus = () => {
    dispatch(removeItem(pizzaCart));
  };

  const onClickPlus = () => {
    dispatch(addItem(pizzaCart));
  };

  const onClickDelete = () => {
    if (confirm("Вы уверены, что хотите удалить данный товар?")) {
      dispatch(deleteItem(pizzaCart));
    }
  };

  return (
    <div className={`${className} cart-pizza`}>
      <div className="cart-pizza__left">
        <div className="cart-pizza__image">
          <img src={pizzaCart.imageUrl} alt={pizzaCart.title} />
        </div>
        <div className="cart-pizza__info">
          <h3>
            {pizzaCart.fresh && (
              <span className="cart-pizza__fresh">Новинка</span>
            )}
            {pizzaCart.hit && <span className="cart-pizza__hit">Хит</span>}
            {pizzaCart.title}
          </h3>
          <p>{`${pizzaCart.type} тесто. ${pizzaCart.size}`}</p>
        </div>
      </div>
      <div className="cart-pizza__middle">
        <div className="cart-pizza__count">
          <Button
            className="cart-pizza__minus"
            onClick={onClickMinus}
            disabled={pizzaCart.count === 1}
          >
            <img src={minusSvg} alt="minus" />
          </Button>
          <b className="cart-pizza__total">{pizzaCart.count}</b>
          <Button className="cart-pizza__plus" onClick={onClickPlus}>
            <img src={plusSvg} alt="plus" />
          </Button>
        </div>
        <div className="cart-pizza__price">
          <b>{pizzaCart.price * pizzaCart.count}</b>
        </div>
      </div>
      <Button className="cart-pizza__delete" onClick={onClickDelete}>
        <img src={deleteSvg} alt="delete" />
      </Button>
    </div>
  );
};

export default CartPizza;
