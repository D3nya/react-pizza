import React from "react";

import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { selectFilter } from "../store/filter/filterSelectors";
import { setCategory, setPage } from "../store/filter/filterSlice";

interface CategoriesProps {
  className?: string;
}

const categories = [
  { category: "Все", value: "all" },
  { category: "Мясные", value: "meat" },
  { category: "Вегетарианские", value: "vegetarian" },
  { category: "Гриль", value: "grill" },
  { category: "Острые", value: "spicy" },
];

const Categories: React.FC<CategoriesProps> = ({ className }) => {
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const onClickCategory = (value: string) => {
    dispatch(setCategory(value));
    dispatch(setPage(1));
  };

  return (
    <div className={`${className} categories`}>
      <ul className="categories__list">
        {categories.map((item, index) => (
          <li
            key={index}
            className={`categories__item ${
              item.value === filter.category ? "active" : ""
            }`}
            onClick={() => onClickCategory(item.value)}
          >
            {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
