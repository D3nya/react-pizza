import React from "react";
import { useNavigate } from "react-router-dom";

import shoppingCartSvg from "../assets/img/shopping-cart-black.svg";
import backArrowSvg from "../assets/img/back-arrow.svg";

import Button from "../components/ui/Button";
import TrashCan from "../components/TrashCan";
import CartPizza from "../components/CartPizza";
import EmptyCart from "../components/EmptyCart";

import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { selectCart } from "../store/cart/cartSelectors";
import { uniqueId } from "lodash";
import { clearItems } from "../store/cart/cartSlice";

const Cart: React.FC = () => {
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isCartEmpty = cart.items.length === 0;
  const totalPizza = cart.items.reduce((sum, pizza) => sum + pizza.count, 0);

  const onClickClear = () => {
    if (confirm("Вы уверены, что хотите очистить корзину?")) {
      dispatch(clearItems());
    }
  };

  const onClickPay = () => {
    alert("Оплата произведена успешно!");
    dispatch(clearItems());
    const uuid = uniqueId();
    navigate(`/order/${uuid}`);
  };

  return (
    <div className="cart">
      {isCartEmpty && <EmptyCart />}
      {!isCartEmpty && (
        <>
          <div className="cart__top">
            <div className="cart__title">
              <img src={shoppingCartSvg} alt="shopping cart" />
              <h2>Корзина</h2>
            </div>
            <Button className="cart__clear" onClick={onClickClear}>
              <TrashCan />
              Очистить корзину
            </Button>
          </div>
          <div className="cart__items">
            {cart.items.map((pizzaCart) => (
              <CartPizza
                className="cart__cart-pizza"
                key={uniqueId()}
                pizzaCart={pizzaCart}
              />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__details">
              <span>
                Всего пицц: <b>{totalPizza} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{cart.price} ₽</b>
              </span>
            </div>
            <div className="cart__buttons">
              <Button onClick={() => navigate(-1)} className="cart__link">
                <img src={backArrowSvg} alt="back arrow" />
                Вернуться назад
              </Button>
              <Button onClick={onClickPay} className="cart__buy">
                Оплатить
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
