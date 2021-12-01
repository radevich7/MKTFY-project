import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import {
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
} from "reactstrap";
import { FaEyeSlash, FaEye, FaCheckCircle } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import auth0js from "auth0-js";
import "./CreatePasswordOverlay.css";

const CreatePasswordOverlay = (props) => {
  // AUTH0
  const webAuth = new auth0js.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  });

  // states for eyeicons
  const [passwordVisible, setPasswordVisible] = useState("password");
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState("password");

  //states for validation of the password
  const [passwordValue, setPasswordValue] = useState();
  const [confirmPasswordValue, setConfirmPasswordValue] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();

  //Checkbox state
  const [checkboxValue, setCheckboxValue] = useState(true);

  // Icons to flash
  const [numberValueValidation, setNumberValueValidation] = useState(false);
  const [upperCaseValidation, setUpperCaseValidation] = useState(false);
  const [lengthValueValidation, setLengthValueValidation] = useState(false);

  // Password validation
  let handlePasswordValidation = (e) => {
    const value = e.target.value;
    const regexNumber = /\d/i;
    const numberPresent = regexNumber.test(value);
    const regexUpperCase = /[A-Z]/g;
    const upperCasePresent = regexUpperCase.test(value);
    const regexLength = /^.{6,17}$/i;
    const minLengthPresent = regexLength.test(value);
    if (value.length === 0) {
      return;
    } else {
      if (numberPresent) {
        setNumberValueValidation(true);
      } else {
        setNumberValueValidation(false);
      }
      if (upperCasePresent) {
        setUpperCaseValidation(true);
      } else {
        setUpperCaseValidation(false);
      }
      if (minLengthPresent) {
        setLengthValueValidation(true);
      } else {
        setLengthValueValidation(false);
      }
    }

    if (numberPresent && upperCasePresent && minLengthPresent) {
      setPasswordValue(value);
    }
  };

  // Confirm password validation
  const handleConfirmPasswordValidation = (e) => {
    const value = e.target.value;
    setConfirmPasswordValue(value);
  };

  // Cheking  if two password inputs are the same
  useEffect(() => {
    if (confirmPasswordValue !== passwordValue) {
      setConfirmPasswordError(
        <span className="error_message">Your password does not match</span>
      );
    } else {
      setConfirmPasswordError();
    }
    if (!confirmPasswordValue) {
      setConfirmPasswordError();
    }
  }, [confirmPasswordValue, passwordValue]);

  // Set error if password doesn't match
  const confirmPasswordClasses = confirmPasswordError
    ? "createPassword_inputField invalid"
    : "createPassword_inputField";

  // Disabling the button
  let disableLogin = true;

  if (passwordValue && confirmPasswordValue && checkboxValue) {
    disableLogin = false;
  }
  //

  // Eye icons logic
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

  //Final DATA
  const signupData = props.signupData;

  const finalData = { ...signupData, password: passwordValue };

  const formSubmitHanlder = (e) => {
    e.preventDefault();

    localStorage.setItem("signupData", JSON.stringify(signupData));

    webAuth.signup(
      {
        connection: process.env.REACT_APP_AUTH0_CONNECTION,
        email: finalData.email,
        password: finalData.password,
      },
      (err) => {
        if (err) return alert("Something went wrong: ");

        if (!err) {
          webAuth.login(
            {
              email: finalData.email,
              password: finalData.password,
              realm: "Username-Password-Authentication",
              responseType: "token",
              redirectUri: window.location.origin + "/signup",
              audience: "http://mktfy.com",
            },
            (error) => {
              return alert("Something went wrong");
            }
          );
        }
      }
    );
  };

  // Classes
  const numberCheckClass = numberValueValidation
    ? "number_check valid"
    : "number_check";

  const upperCaseClass = upperCaseValidation
    ? "uppercase_check valid"
    : "uppercase_check";

  const lengthClass = lengthValueValidation
    ? "characters_check valid"
    : "characters_check";

  const password_weak_class =
    numberValueValidation || upperCaseValidation || lengthValueValidation
      ? "weak"
      : false;
  const password_strong_class =
    numberValueValidation && upperCaseValidation && lengthValueValidation
      ? "strong"
      : false;

  // reset of the form function
  const resetForm = () => {
    setPasswordValue();
    setConfirmPasswordValue();
    setConfirmPasswordError();
    setNumberValueValidation(false);
    setUpperCaseValidation(false);
    setLengthValueValidation(false);
    setCheckboxValue(true);
  };
  // close button on the modal handler
  const closeModalHandler = (e) => {
    resetForm();
    props.toggle();
  };
  // back button on the modal handler
  const backHandler = () => {
    resetForm();
    props.toggle();
    props.toggleSignUp();
  };

  return (
    <Modal
      isOpen={props.modal}
      toggle={props.toggle}
      className="modal-lg modal-fullscreen-md-down"
    >
      <ModalHeader
        toggle={props.toggle}
        className="createPassword_header"
        close={
          <button className="close" onClick={closeModalHandler}>
            ×
          </button>
        }
      >
        <button className="back_button" onClick={backHandler}>
          <AiOutlineArrowLeft />
        </button>
        Create Password
      </ModalHeader>
      <ModalBody className="createPassword_body">
        <p className="createPassword_header_text">
          The password must have at least 6 characters and must contain 1
          uppercase and 1 number.
        </p>
        <Form onSubmit={formSubmitHanlder}>
          <FormGroup>
            <Label for="password">
              Password
              <span
                className={`password_strength ${password_weak_class} ${password_strong_class}`}
              >
                {password_weak_class && !password_strong_class && "Weak"}
                {password_strong_class && "Strong"}
              </span>
            </Label>

            <div className="password_input_field">
              <Input
                type={passwordVisible}
                name="password"
                id="password"
                placeholder="Your password"
                className="createPassword_inputField"
                onChange={handlePasswordValidation}
              />

              <button
                className="password_eye_logo"
                onClick={togglePasswordHandler}
              >
                {passwordVisible === "password" ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
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
                onChange={handleConfirmPasswordValidation}
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
            <div className={lengthClass}>
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
              By checking this box, you agree to our{" "}
              <Link
                className="policy_link"
                target="_blank"
                to="/terms&services"
              >
                {" "}
                Terms of service{" "}
              </Link>
              and our{" "}
              <Link className="policy_link" target="_blank" to="/privacy">
                Privacy Policy
              </Link>
            </Label>
          </FormGroup>
          <div>
            <Button
              disabled={disableLogin}
              className="createPassword_input_button"
            >
              Create Account
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default CreatePasswordOverlay;
