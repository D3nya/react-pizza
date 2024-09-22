import React from "react";
import { Link } from "react-router-dom";

import shoppingCart from "../assets/img/shopping-cart.svg";

interface CartInfoProps {
  className?: string;
  totalPizza: number;
  totalPrice: number;
}

const CartInfo: React.FC<CartInfoProps> = ({
  className,
  totalPizza,
  totalPrice,
}) => {
  return (
    <div className={`cart-info ${className}`}>
      <Link to="/cart" className="cart-info__link">
        <span className="cart-info__total">{totalPrice} ₽</span>
        <img src={shoppingCart} alt="cart" className="cart-info__img" />
        <span className="cart-info__count">{totalPizza}</span>
      </Link>
    </div>
  );
};

export default CartInfo;
