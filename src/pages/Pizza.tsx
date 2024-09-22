import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ContentLoader from "react-content-loader";

import NotFoundPizza from "../components/NotFoundPizza.tsx";
import Button from "../components/ui/Button.tsx";
import Plus from "../components/Plus.tsx";
import Select from "../components/Select.tsx";
import Error from "../components/Error.tsx";

import { PizzaCart, pizzaSizes, pizzaTypes } from "../types/index.ts";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux.ts";

import { fetchPizzaById } from "../store/pizza/pizzaAsync.ts";
import { selectPizza } from "../store/pizza/pizzaSelectors.ts";
import { selectAllCartPizzasById } from "../store/cart/cartSelectors.ts";
import { addItem } from "../store/cart/cartSlice.ts";

const pizzaCategories = {
  meat: "Мясная",
  grill: "Гриль",
  spicy: "Острая",
  vegetarian: "Вегетарианская",
};

const Pizza: React.FC = () => {
  // Active size and type pizza
  const [activeType, setActiveType] = useState<pizzaTypes>(
    pizzaTypes.traditional
  );
  const [activeSize, setActiveSize] = useState<pizzaSizes>(pizzaSizes.small);
  // Current pizza id
  const { id } = useParams();
  // Dispatch
  const dispatch = useAppDispatch();
  // Selectors
  const pizza = useAppSelector(selectPizza);
  const allCartPizzas = useAppSelector(selectAllCartPizzasById(Number(id)));

  useEffect(() => {
    dispatch(fetchPizzaById({ id: Number(id) }));
  }, [dispatch, id]);

  const isLoading = pizza.status === "pending";
  const isError = pizza.status === "failed";
  const isNotFound = pizza.items.length === 0;

  if (isLoading) {
    return (
      <main className="pizza">
        <PizzaSkeleton />
      </main>
    );
  }

  if (isError) {
    return (
      <main className="pizza">
        <Error className="pizza__error" label="пиццу" />
      </main>
    );
  }

  if (isNotFound) {
    return <NotFoundPizza />;
  }

  const currentPizza = pizza.items[0];

  const addedCount =
    allCartPizzas.length > 0
      ? allCartPizzas.reduce((count, pizza) => count + pizza.count, 0)
      : 0;

  const sizeToPriceIndex = {
    [pizzaSizes.small]: currentPizza.price[0],
    [pizzaSizes.medium]: currentPizza.price[1],
    [pizzaSizes.big]: currentPizza.price[2],
  };

  const price = sizeToPriceIndex[activeSize];

  const onClickAddPizza = () => {
    const cartPizza: PizzaCart = {
      id: currentPizza.id,
      imageUrl: currentPizza.imageUrl,
      title: currentPizza.title,
      type: activeType,
      size: activeSize,
      count: 0,
      fresh: currentPizza.fresh,
      hit: currentPizza.hit,
      price,
    };

    dispatch(addItem(cartPizza));
  };

  return (
    <main className="pizza">
      <div className="pizza__left">
        <img
          src={currentPizza.imageUrl}
          alt={currentPizza.title}
          className="pizza__image"
        />
      </div>
      <div className="pizza__right">
        <h1 className="pizza__name">{currentPizza.title}</h1>
        {/* Info */}
        <div className="pizza__info">
          {currentPizza.fresh && (
            <span className="pizza__info--fresh">Новинка</span>
          )}
          {currentPizza.hit && <span className="pizza__info--hit">Хит</span>}
          <ul className="pizza__categories">
            {currentPizza.category.map((category, index) => (
              <li key={index} className={category}>
                {pizzaCategories[category as keyof typeof pizzaCategories]}
              </li>
            ))}
          </ul>
          <p className="pizza__rating">{currentPizza.rating}</p>
        </div>
        {/* Composition */}
        <h3 className="pizza__title">Состав</h3>
        <p className="pizza__composition">{currentPizza.composition}</p>
        <Select
          className="pizza__select"
          activeType={activeType}
          setActiveType={setActiveType}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
        />
        {/* Price */}
        <p className="pizza__price">Цена: {price} ₽</p>
        {/* Actions */}
        <div className="pizza__actions">
          <Button className="pizza__button" onClick={onClickAddPizza}>
            <Plus className="pizza__svg" />
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </Button>
          <Link to="/" className="pizza__link">
            Вернуться на главную
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Pizza;

export const PizzaSkeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={2}
      width={1620}
      height={500}
      viewBox="0 0 1620 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="350" cy="250" r="250" />
      <rect x="1050" y="0" rx="0" ry="10" width="300" height="45" />
      <rect x="1000" y="50" rx="30" ry="20" width="80" height="30" />
      <rect x="1100" y="50" rx="30" ry="20" width="80" height="30" />
      <rect x="1200" y="50" rx="30" ry="20" width="80" height="30" />
      <rect x="1300" y="50" rx="30" ry="20" width="80" height="30" />

      <rect x="1150" y="100" rx="10" ry="10" width="70" height="20" />
      <rect x="950" y="125" rx="10" ry="10" width="500" height="40" />

      <rect x="1030" y="180" rx="10" ry="10" width="350" height="90" />
      <rect x="1125" y="280" rx="10" ry="10" width="140" height="30" />

      <rect x="1080" y="325" rx="20" ry="20" width="230" height="50" />
      <rect x="1080" y="390" rx="20" ry="20" width="230" height="50" />
    </ContentLoader>
  );
};
