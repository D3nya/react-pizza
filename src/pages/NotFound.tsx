import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <main className="error">
      <div className="error__block">
        <span className="error__smile">😕</span>
        <br />
        <h1 className="error__title">Ничего не найдено</h1>
      </div>
      <p className="error__text">К сожалению данная страница отсутствует</p>
      <Link to="/" className="error__link">
        Вернуться на главную
      </Link>
    </main>
  );
};

export default NotFound;
