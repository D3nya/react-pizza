import React from "react";

import { pizzaSizes, pizzaTypes } from "../types";

interface SelectProps {
  className?: string;
  activeType: pizzaTypes;
  activeSize: pizzaSizes;
  setActiveType: (type: pizzaTypes) => void;
  setActiveSize: (size: pizzaSizes) => void;
}

const types: pizzaTypes[] = [pizzaTypes.traditional, pizzaTypes.thiny];

const sizes: pizzaSizes[] = [
  pizzaSizes.small,
  pizzaSizes.medium,
  pizzaSizes.big,
];

const Select: React.FC<SelectProps> = ({
  className,
  activeSize,
  activeType,
  setActiveType,
  setActiveSize,
}) => {
  return (
    <div className={`${className} select`}>
      <ul className="select__types">
        {types.map((type, index) => (
          <li
            key={index}
            className={`select__type ${type === activeType ? "active" : ""}`}
            onClick={() => setActiveType(type)}
          >
            {type}
          </li>
        ))}
      </ul>
      <ul className="select__sizes">
        {sizes.map((size, index) => (
          <li
            key={index}
            className={`select__size ${size === activeSize ? "active" : ""}`}
            onClick={() => setActiveSize(size)}
          >
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
