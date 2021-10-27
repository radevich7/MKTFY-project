import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  console.log(validateValue);

  const hasError = !valueIsValid && isTouched;
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandlder = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };
  const classes = hasError ? "login_inputField invalid" : "login_inputField";

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    classes,
    valueChangeHandler,
    inputBlurHandlder,
    reset,
  };
};

export default useInput;
