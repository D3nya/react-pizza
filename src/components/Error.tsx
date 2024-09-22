import React from "react";

interface ErrorProps {
  className?: string;
  label: string;
}

const Error: React.FC<ErrorProps> = ({ className, label }) => {
  return (
    <div className={`${className} error`}>
      <h2>Произошла ошибка 😕</h2>
      <p>
        {`К сожалению, не удалось получить ${label}. Попробуйте повторить попытку
        позже.`}
      </p>
    </div>
  );
};

export default Error;
