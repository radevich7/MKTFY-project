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
import auth0js from "auth0-js";
import { Link } from "react-router-dom";

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

  if (passwordValue && confirmPasswordValue && checkboxValue) {
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
  const finalData = { ...props.signupData, password: passwordValue };

  const formSubmitHanlder = (e) => {
    e.preventDefault();
    webAuth.signup(
      {
        connection: process.env.REACT_APP_AUTH0_CONNECTION,
        email: finalData.email,
        password: finalData.password,
      },
      (err) => {
        if (err) return alert("Something went wrong: ");
        if (err) {
          console.log(err);
        }
        if (!err) {
          webAuth.login(
            {
              email: finalData.email,
              password: finalData.password,
              realm: "Username-Password-Authentication",
              responseType: "token",
              redirectUri: window.location.origin + "/login",
              audience: "http://mktfy.com",
            },
            (error) => {
              return alert("Something went wrong");
              // setLoginError(
              //   <span className="error_message">{error.description}</span>
              // );
            }
          );
        }
        // if (!err) {
        //   webAuth.redirect.loginWithCredentials(
        //     {
        //       connection: process.env.REACT_APP_AUTH0_CONNECTION,
        //       username: finalData.email,
        //       password: finalData.password,
        //       redirectUri: window.location.origin + "/login",
        //       responseType: "token",
        //       scope: "openid profile email",
        //     },
        //     (error) => {
        //       return alert("Something went wrong");
        //       // setLoginError(
        //       //   <span className="error_message">{error.description}</span>
        //       // );
        //     }
        //   );
        // }
      }
    );
  };
  // if err{
  //   show err
  // }else{}
  //AXIOS CALL to our backend for the remaining data
  // axios.post('url', finalData).then(res=>{
  //   console.log(res);
  // })
  //   }
  // );

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
              // onClick={formSubmitHandler}
              className="createPassword_input_button"
            >
              Create Account
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
