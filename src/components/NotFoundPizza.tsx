import React from "react";
import { Link } from "react-router-dom";

const NotFoundPizza: React.FC = () => {
  return (
    <main className="not-found-pizza">
      <span className="not-found-pizza__smile">😕</span>
      <br />
      <h2 className="not-found-pizza__title">Данная пицца не найдена</h2>
      <Link to="/" className="not-found-pizza__link">
        Вернуться на главную
      </Link>
    </main>
  );
};

export default NotFoundPizza;
