import "./Button.css";

const Button = (props) => {
  return (
    <button className={`reusable_button ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
