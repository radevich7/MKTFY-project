import "./Button.css";

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={`reusable_button ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
