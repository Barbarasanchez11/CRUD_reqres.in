const SubmitButton = ({ onClick, label, type  }) => {
    return <button type={type} onClick={onClick}>{label}</button>;
  };
  
  export default SubmitButton;