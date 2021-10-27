const Button = ({ text, onAdd }) => {
  return (
    <button class="btn" onClick={onAdd}>
      {text}
    </button>
  );
};
export default Button;
