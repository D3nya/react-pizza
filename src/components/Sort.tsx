import React, { useRef, useState } from "react";

import dropdownSvg from "../assets/img/dropdown.svg";

import useClickOutside from "../hooks/useClickOutside";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { selectFilter } from "../store/filter/filterSelectors";
import { setPage, setSort } from "../store/filter/filterSlice";

interface SortProps {
  className?: string;
}

const sortOptions = [
  { key: "по умолчанию", type: "default" },
  { key: "по популярности", type: "popularity" },
  { key: "по рейтингу", type: "rating" },
  { key: "по возрастанию цены", type: "+price" },
  { key: "по убыванию цены", type: "-price" },
];

const Sort: React.FC<SortProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const divRef = useRef<HTMLSpanElement>(null);

  const handleClickInside = (type: string) => {
    dispatch(setSort(type));
    setOpen(false);
    dispatch(setPage(1));
  };

  useClickOutside(divRef, () => {
    if (open === true) setOpen(false);
  });

  return (
    <div className="sort">
      <div className="sort__label">
        <div className="sort__text">
          <img src={dropdownSvg} alt="dropdown" className="sort__img" />
          <b className="sort__bold">Сортировать:</b>
        </div>
        <span
          ref={divRef}
          className="sort__type"
          onClick={() => setOpen(!open)}
        >
          {sortOptions.find((sort) => sort.type === filter.sort)?.key}
        </span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul className="sort__list">
            {sortOptions.map((sort, index) => (
              <li
                key={index}
                className={`sort__item ${
                  sort.type === filter.sort ? "active" : ""
                }`}
                onClick={() => handleClickInside(sort.type)}
              >
                {sort.key}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
