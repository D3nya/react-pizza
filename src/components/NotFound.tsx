import React from "react";

interface NotFoundProps {
  className?: string;
  label: string;
}

const NotFound: React.FC<NotFoundProps> = ({ className, label }) => {
  return (
    <div className={`${className} not-found`}>
      <span className="not-found__smile">😕</span>
      <br />
      <h2 className="not-found__title">{`К сожалению ${label} не найдены`}</h2>
    </div>
  );
};

export default NotFound;
