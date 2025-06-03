import './Button.css';

const Button = ({ onClick, label, type }) => {
  return <button type={type} onClick={onClick} className="button">{label}</button>;
};

export default Button;