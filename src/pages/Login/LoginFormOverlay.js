import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import useInput from "../hooks/use-input";

import "./LoginFormOverlay.css";
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
import { FaEyeSlash, FaEye } from "react-icons/fa";
import auth0js from "auth0-js";

const LoginFormOverlay = (props) => {
  const webAuth = new auth0js.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  });

  const [passwordValue, setPasswordValue] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState();
  const {
    value: enteredEmailValue,
    classes: emailClasses,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandlder: emailBlurHanlder,
    reset: resetEmailInput,
  } = useInput((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

  const [visible, setVisible] = useState("password");

  const handlePasswordValidation = (e) => {
    const value = e.target.value;
    const regex =
      /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/;
    const isValid = regex.test(value);
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

  const passwordClasses = passwordError
    ? "login_inputField invalid"
    : "login_inputField";

  let disableLogin = true;
  if (
    !passwordError &&
    !emailInputHasError &&
    enteredEmailValue &&
    passwordValue
  ) {
    disableLogin = false;
  }

  // show Password Handler

  const togglePasswordHandler = (e) => {
    e.preventDefault();
    if (visible === "password") {
      setVisible("text");
    } else {
      setVisible("password");
    }
  };

  // Form Submit Handler

  // const formSubmitHandler = (e) => {
  //   e.preventDefault();

  //   webAuth.redirect.loginWithCredentials(
  //     {
  //       connection: process.env.REACT_APP_AUTH0_CONNECTION,
  //       username: emailValue,
  //       password: passwordValue,
  //       redirectUri: window.location.origin + "/login",
  //       responseType: "token",
  //       scope: "openid profile email",
  //     },
  //     (error) => {
  //       setLoginError(
  //         <span className="error_message">{error.description}</span>
  //       );
  //     }
  //   );
  // };

  const forgotPasswordLinkHandler = (e) => {
    if (e) {
      props.onForgetPassword();
      props.toggle();
    }
  };
  return (
    <Modal isOpen={props.modal} toggle={props.toggle} size="lg">
      <ModalHeader toggle={props.toggle} className="login_header">
        Welcome Back!
      </ModalHeader>
      <ModalBody className="login_body">
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>

            <Input
              type="email"
              name="email"
              placeholder="Your email"
              className={emailClasses}
              onChange={emailChangeHandler}
              onBlur={emailBlurHanlder}
            />
            {/* {emailInputHasError} */}
          </FormGroup>
          <FormGroup className="password_form_group">
            <Label for="examplePassword">Password</Label>
            <div className="password_input_field">
              <Input
                type={visible}
                name="password"
                id="examplePassword"
                placeholder="Your password"
                className={passwordClasses}
                onBlur={handlePasswordValidation}
              />
              <button
                className="password_eye_logo"
                onClick={togglePasswordHandler}
              >
                {visible === "password" ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordError}
            {loginError}
          </FormGroup>
          <p
            onClick={forgotPasswordLinkHandler}
            className="forgot_myPassword_link"
          >
            I forgot my password
          </p>
          <div>
            <Button
              disabled={disableLogin}
              // onClick={formSubmitHandler}
              className="login_input_button"
            >
              Login
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default LoginFormOverlay;

// const [emailValue, setEmailValue] = useState();
// const [emailError, setEmailError] = useState();
// const handleEmailValidation = (e) => {
//   const value = e.target.value;
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const isValid = regex.test(value);
//   if (isValid) {
//     setEmailValue(value);
//     setEmailError();
//   } else {
//     setEmailValue();
//     setEmailError(
//       <span className="error_message">Your email is incorrect</span>
//     );
//   }
// };
// const emailClasses = emailInputHasError
//   ? "login_inputField invalid"
//   : "login_inputField";
