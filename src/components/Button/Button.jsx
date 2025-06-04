import './Button.css';

const Button = ({ onClick, label, type, disabled, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;