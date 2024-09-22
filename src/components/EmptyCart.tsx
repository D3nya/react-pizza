import React from "react";
import { useNavigate } from "react-router-dom";

import cartEmptyImg from "../assets/img/empty-cart.png";

import Button from "./ui/Button";

const EmptyCart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <h2 className="empty-cart__title">
        Корзина пустая <span>😕</span>
      </h2>
      <p className="empty-cart__text">
        Вероятней всего, вы не добавили пиццу в корзину.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" className="empty-cart__img" />
      <Button onClick={() => navigate(-1)} className="empty-cart__link">
        <span>Вернуться назад</span>
      </Button>
    </div>
  );
};

export default EmptyCart;
