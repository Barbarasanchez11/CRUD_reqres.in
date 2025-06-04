import './Button.css';

const Button = ({ onClick, label, type ,disabled,className}) => {
  return <button type={type} onClick={onClick} className={className} disabled={disabled}>{label}</button>;
};

export default Button;