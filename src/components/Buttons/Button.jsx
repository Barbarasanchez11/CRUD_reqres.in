import './Button.css';

const SubmitButton = ({ onClick, label, type }) => {
  return <button type={type} onClick={onClick} className="button">{label}</button>;
};

export default SubmitButton;