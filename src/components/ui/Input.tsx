import React from "react";

interface InputProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  className,
  placeholder,
  inputRef,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      ref={inputRef}
    />
  );
};

export default Input;
