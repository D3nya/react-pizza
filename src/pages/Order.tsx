import React from "react";
import { Link, useParams } from "react-router-dom";

const Order: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="order">
      <h2>Спасибо за ваш заказ!</h2>
      <p>Ваш заказ успешно оформлен.</p>
      <p>
        Номер вашего заказа: <strong>{id}</strong>
      </p>
      <Link to="/" className="order__link">
        Вернуться на главную страницу
      </Link>
    </div>
  );
};

export default Order;
