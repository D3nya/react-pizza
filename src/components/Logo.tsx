import React from "react";
import { Link } from "react-router-dom";

import pizzaSvg from "../assets/img/pizza.svg";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`${className} logo`}>
      <img className="logo__img" src={pizzaSvg} />
      <div>
        <h1 className="logo__title">react пицца</h1>
        <p className="logo__subtitle">сеть №1 в России</p>
        <p className="logo__text">по количеству пиццерий</p>
      </div>
    </Link>
  );
};

export default Logo;
