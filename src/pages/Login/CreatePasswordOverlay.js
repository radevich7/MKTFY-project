import "./CreatePasswordOverlay.css";
import { useState } from "react";
import {
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
} from "reactstrap";
import Button from "../../reusableComponent/Button";
import { FaEyeSlash, FaEye, FaCheckCircle } from "react-icons/fa";

const CreatePasswordOverlay = (props) => {
  const [passwordVisible, setPasswordVisible] = useState("password");
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState("password");
  const [passwordValue, setPasswordValue] = useState();
  const [passwordError, setPasswordError] = useState();
  const [checkboxValue, setCheckboxValue] = useState(true);
  const [confirmPasswordValue, setConfirmPasswordValue] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();

  const [charactersValue, setCharactersValue] = useState();
  const [upperCaseValue, setUpperCaseValue] = useState();
  const [numberValueValidation, setNumberValueValidation] = useState(false);
  const [upperCaseValidation, setUpperCaseValidation] = useState(false);
  const [lengthValueValidation, setLengthValueValidation] = useState(false);

  let handlePasswordValidation = (e) => {
    const value = e.target.value;
    const regex =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/g;
    const isValid = regex.test(value);
    console.log(isValid);
    if (isValid) {
      setPasswordValue(value);
      setPasswordError();
    } else {
      setPasswordValue();
      setPasswordError(
        <span className="error_message">Your password is incorrect</span>
      );
    }
  };

  const handleConfirmPasswordValidation = (e) => {
    const value = e.target.value;
    if (value === passwordValue) {
      setConfirmPasswordValue(value);
      setConfirmPasswordError();
    } else {
      setConfirmPasswordValue();
      setConfirmPasswordError(
        <span className="error_message">Your password does not match</span>
      );
    }
  };

  // Set error and red border
  const passwordClasses = passwordError
    ? "createPassword_inputField invalid"
    : "createPassword_inputField";
  const confirmPasswordClasses = confirmPasswordError
    ? "createPassword_inputField invalid"
    : "createPassword_inputField";

  const togglePasswordHandler = (e) => {
    e.preventDefault();
    if (passwordVisible === "password") {
      setPasswordVisible("text");
    } else {
      setPasswordVisible("password");
    }
  };
  const toggleConfirmPasswordHandler = (e) => {
    e.preventDefault();
    if (confirmPasswordVisible === "password") {
      setConfirmPasswordVisible("text");
    } else {
      setConfirmPasswordVisible("password");
    }
  };

  // CheckBox
  const checkboxHandler = (e) => {
    if (checkboxValue === true) {
      setCheckboxValue(false);
    } else {
      setCheckboxValue(true);
    }
  };

  const formSubmitHanlder = (e) => {
    e.preventDefault();

    return props.data({
      password: passwordValue,
    });
  };

  // test PASSWORD ICON VALIDATION

  // handlePasswordValidation = (e) => {
  //   const value = e.target.value;

  //   // const regex =
  //   //   /^(?=.*\d)  (?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/;
  //   // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
  //   const numberRegex = /^(?=.*\d)/g;
  //   const isValidNumber = numberRegex.test(value);
  //   const upperCaseRegex = /(?=.*[A-Z])/g;
  //   const upperCaseIsvalid = upperCaseRegex.test(value);

  //   if (value.length === 0) {
  //     setPasswordValue();
  //     setNumberValueValidation();
  //     setUpperCaseValidation();
  //     setPasswordError(
  //       <span className="error_message">Your password is incorrect</span>
  //     );
  //   } else if (upperCaseIsvalid) {
  //     setUpperCaseValidation(true);
  //   } else if (!upperCaseIsvalid) {
  //     setUpperCaseValidation(false);
  //   } else if (isValidNumber) {
  //     setNumberValueValidation(true);
  //   } else if (!isValidNumber) {
  //     setNumberValueValidation(false);
  //   }

  //   // if (isValid) {
  //   //   setPasswordValue(value);
  //   //   setPasswordError();
  //   // } else {
  //   //   setPasswordValue();
  //   //   setPasswordError(
  //   //     <span className="error_message">Your password is incorrect</span>
  //   //   );
  //   // }
  // };

  const numberCheckClass = numberValueValidation
    ? "number_check valid"
    : "number_check";

  const upperCaseClass = upperCaseValidation
    ? "uppercase_check valid"
    : "uppercase_check";
  return (
    <Modal isOpen={props.modal} toggle={props.toggle} size="lg">
      <ModalHeader toggle={props.toggle} className="createPassword_header">
        Create Password
      </ModalHeader>
      <ModalBody className="createPassword_body">
        <p className="createPassword_header_text">
          The password must have at least 6 characters and must contain 1
          uppercase and 1 number.
        </p>
        <Form onSubmit={formSubmitHanlder}>
          <FormGroup>
            <Label for="password">Password</Label>
            <div className="password_input_field">
              <Input
                type={passwordVisible}
                name="password"
                id="password"
                placeholder="Your password"
                className={passwordClasses}
                onBlur={handlePasswordValidation}
              />

              <button
                className="password_eye_logo"
                onClick={togglePasswordHandler}
              >
                {passwordVisible === "password" ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordError}
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <div className="password_input_field">
              <Input
                type={confirmPasswordVisible}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Your password"
                className={confirmPasswordClasses}
                onBlur={handleConfirmPasswordValidation}
              />
              <button
                className="password_eye_logo"
                onClick={toggleConfirmPasswordHandler}
              >
                {confirmPasswordVisible === "password" ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
            {confirmPasswordError}
          </FormGroup>

          <div className="validation_checkmark">
            <div className="characters_check">
              <FaCheckCircle /> <span>At least 6 characters</span>
            </div>
            <div className={upperCaseClass}>
              <FaCheckCircle />
              <span> 1 Uppercase</span>
            </div>
            <div className={numberCheckClass}>
              <FaCheckCircle />
              <span> 1 Number</span>
            </div>
          </div>

          <FormGroup className="checkbox_form_group">
            <Input
              type="checkbox"
              checked={checkboxValue}
              onChange={checkboxHandler}
              className="createPassword_checkbox"
            />
            <Label>
              By checking this box, you agree to our Terms of service and our
              Privacy Policy
            </Label>
          </FormGroup>
          <div>
            <Button
              // disabled={disableLogin}
              // onClick={formSubmitHandler}
              className="createPassword_input_button"
            >
              Login
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
  // </div>
  // );
};

export default CreatePasswordOverlay;
