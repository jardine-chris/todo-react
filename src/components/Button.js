const Button = ({ text, onAdd }) => {
  return (
    <button className="btn" onClick={onAdd}>
      {text}
    </button>
  );
};

export default Button;
