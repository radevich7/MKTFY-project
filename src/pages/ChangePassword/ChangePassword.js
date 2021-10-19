import { useState } from "react";
import "./ChangePassword.css";
import { Link } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import auth0js from "auth0-js";
import {
  Container,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
} from "reactstrap";
import { FaEyeSlash, FaEye, FaCheckCircle } from "react-icons/fa";

const ChangePassword = (props) => {
  // states for eyeicons
  const [currentPasswordVisible, setCurrentPasswordVisible] =
    useState("password");
  const [passwordVisible, setPasswordVisible] = useState("password");
  const [confirmPasswordVisible, setConfirmPasswordVisible] =
    useState("password");
  const [passwordValue, setPasswordValue] = useState();
  const [confirmPasswordValue, setConfirmPasswordValue] = useState();
  const [confirmPasswordError, setConfirmPasswordError] = useState();
  //Icons to flash
  const [numberValueValidation, setNumberValueValidation] = useState(false);
  const [upperCaseValidation, setUpperCaseValidation] = useState(false);
  const [lengthValueValidation, setLengthValueValidation] = useState(false);

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

  let disableLogin = true;

  if (passwordValue && confirmPasswordValue) {
    disableLogin = false;
  }

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
  // Set error if password doesn't match
  const confirmPasswordClasses = confirmPasswordError
    ? "createPassword_inputField invalid"
    : "createPassword_inputField";

  // Eye icons logic
  const toggleCurrentPassword = (e) => {
    e.preventDefault();
    if (currentPasswordVisible === "password") {
      setCurrentPasswordVisible("text");
    } else {
      setCurrentPasswordVisible("password");
    }
  };
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
  const numberCheckClass = numberValueValidation
    ? "number_check valid"
    : "number_check";

  const upperCaseClass = upperCaseValidation
    ? "uppercase_check valid"
    : "uppercase_check";

  const lengthClass = lengthValueValidation
    ? "characters_check valid"
    : "characters_check";

  const webAuth = new auth0js.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  });
  const formSubmitHanlder = (e) => {
    e.preventDefault();

    webAuth.changePassword(
      {
        connection: "CONNECTION",
        email: "EMAIL",
      },
      function (err, resp) {
        if (err) {
          console.log(err.message);
        } else {
          console.log(resp);
        }
      }
    );
  };
  return (
    <Container fluid className="changePassword_container">
      <Card className="changePassword_card">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>
          <span className="arrow_path">{">"}</span>

          <span>Change password</span>
        </div>
        <CardBody className="changePassword_cardBody">
          <h4>Change Password</h4>
          <Label for="currentPassword">Current Password</Label>
          <div className="password_input_field">
            <Input
              type={currentPasswordVisible}
              name="currentPassword"
              id="currentPassword"
              placeholder="Your password"
              className="createPassword_inputField"
            />
            <button
              className="password_eye_logo"
              onClick={toggleCurrentPassword}
            >
              {currentPasswordVisible === "password" ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          <Form onSubmit={formSubmitHanlder}>
            <FormGroup>
              <p className="changePassword_text">
                The password must have at least 6 characters and must contain 1
                uppercase and 1 number.
              </p>
              <Label for="password">Password</Label>
              <div className="password_input_field">
                <Input
                  type={passwordVisible}
                  name="password"
                  id="password"
                  placeholder="Your password"
                  className="createPassword_inputField"
                  className="createPassword_inputField"
                  onBlur={handlePasswordValidation}
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
          </Form>
          <Link to={`/pickupConfirmation`}>
            <Button className="changePassword_button">Set Password</Button>
          </Link>
        </CardBody>
      </Card>
    </Container>
  );
};

export default ChangePassword;
