import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled = false,
}) => {
  return (
    <button className={className} onClick={() => onClick()} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
