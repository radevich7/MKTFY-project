import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);

  const hasError = !valueIsValid && isTouched;

  const inputBlurHandlder = (event) => {
    setEnteredValue(event.target.value);
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
    inputBlurHandlder,
    reset,
  };
};

export default useInput;
