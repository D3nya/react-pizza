import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContentLoader from "react-content-loader";

import { Pizza, PizzaCart, pizzaSizes, pizzaTypes } from "../types";

import Button from "./ui/Button";
import Plus from "./Plus";
import Select from "./Select";

import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { addItem } from "../store/cart/cartSlice";
import { selectAllCartPizzasById } from "../store/cart/cartSelectors";

interface PizzaProps {
  className?: string;
  pizza: Pizza;
}

const PizzaItem: React.FC<PizzaProps> = ({ className, pizza }) => {
  const [activeType, setActiveType] = useState<pizzaTypes>(
    pizzaTypes.traditional
  );
  const [activeSize, setActiveSize] = useState<pizzaSizes>(pizzaSizes.small);
  const dispatch = useAppDispatch();
  const allCartPizzas = useAppSelector(selectAllCartPizzasById(pizza.id));

  const addedCount =
    allCartPizzas.length > 0
      ? allCartPizzas.reduce((count, pizza) => count + pizza.count, 0)
      : 0;

  const sizeToPriceIndex = {
    [pizzaSizes.small]: pizza.price[0],
    [pizzaSizes.medium]: pizza.price[1],
    [pizzaSizes.big]: pizza.price[2],
  };

  const price = sizeToPriceIndex[activeSize];

  const onClickAddPizza = () => {
    const cartPizza: PizzaCart = {
      id: pizza.id,
      imageUrl: pizza.imageUrl,
      title: pizza.title,
      type: activeType,
      size: activeSize,
      count: 0,
      fresh: pizza.fresh,
      hit: pizza.hit,
      price,
    };

    dispatch(addItem(cartPizza));
  };

  return (
    <div className={`${className} pizza-item`}>
      <div className="pizza-item__top">
        <Link to={`/pizza/${pizza.id}`} className="pizza-item__link">
          <img
            src={pizza.imageUrl}
            alt={`pizza ${pizza.title}`}
            className="pizza-item__image"
          />

          <h3 className={`pizza-item__title`}>
            {pizza.fresh && (
              <span className="pizza-item__title--fresh">Новинка</span>
            )}
            {pizza.hit && <span className="pizza-item__title--hit">Хит</span>}
            {pizza.title}
          </h3>
        </Link>
      </div>

      <Select
        className="pizza-item__select"
        activeType={activeType}
        setActiveType={setActiveType}
        activeSize={activeSize}
        setActiveSize={setActiveSize}
      />

      <div className="pizza-item__bottom">
        <span className="pizza-item__price">{price} ₽</span>
        <Button className="pizza-item__button" onClick={onClickAddPizza}>
          <Plus className="pizza-item__svg" />
          <span>Добавить</span>
          {addedCount > 0 && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
};

export default PizzaItem;

export const PizzaItemSkeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={366}
      height={432}
      viewBox="0 0 366 432"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="160" cy="110" r="110" />
      <rect x="65" y="240" rx="0" ry="0" width="200" height="30" />
      <rect x="215" y="460" rx="30" ry="30" width="120" height="40" />
      <rect x="10" y="456" rx="0" ry="0" width="72" height="26" />
      <rect x="9" y="288" rx="10" ry="10" width="350" height="70" />
      <rect x="4" y="391" rx="0" ry="0" width="72" height="26" />
      <rect x="193" y="386" rx="10" ry="10" width="166" height="40" />
    </ContentLoader>
  );
};
