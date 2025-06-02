import React from 'react';
import './Input.css';

const Input = ({ placeholder, value, onChange, className = "", type = "text" }) => {
  return (
    <input
      type={type}            
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`input ${className}`}
    />
  );
};

export default Input;
