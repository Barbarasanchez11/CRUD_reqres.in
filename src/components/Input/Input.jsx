import React from "react";
import "./Input.css";

const Input = ({
  placeholder,
  value,
  onChange,
  className = "",
  type = "text",
  error,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input ${className}`}
      />
      {error && <p className="input-error">{error}</p>}
    </>
  );
};

export default Input;
