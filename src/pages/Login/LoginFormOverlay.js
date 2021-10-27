import { useState } from "react";
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
  const [loginError, setLoginError] = useState(); // auth0 error
  const [visible, setVisible] = useState("password");

  // Used custom hook for validation
  const {
    value: enteredEmailValue,
    classes: emailClasses,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputBlurHandlder: emailBlurHanlder,
    reset: resetEmailInput,
  } = useInput((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));

  const {
    value: enteredPasswordValue,
    classes: passwordClasses,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    inputBlurHandlder: passwordBlurHanlder,
    reset: resetPasswordInput,
  } = useInput((value) =>
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/.test(
      value
    )
  );

  const togglePasswordHandler = (e) => {
    e.preventDefault();
    return visible === "password" ? setVisible("text") : setVisible("password");
  };

  let disableLogin = true;
  enteredPasswordIsValid &&
  enteredEmailIsValid &&
  !emailInputHasError &&
  !passwordInputHasError
    ? (disableLogin = false)
    : (disableLogin = true);

  // Form Submit Handler

  const formSubmitHandler = (e) => {
    e.preventDefault();

    webAuth.redirect.loginWithCredentials(
      {
        connection: process.env.REACT_APP_AUTH0_CONNECTION,
        username: enteredEmailValue,
        password: enteredPasswordValue,
        redirectUri: window.location.origin + "/login",
        responseType: "token",
        scope: "openid profile email",
      },
      (error) => {
        setLoginError(
          <span className="error_message">{error.description}</span>
        );
      }
    );
    resetPasswordInput();
    resetEmailInput();
  };

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
              onBlur={emailBlurHanlder}
            />
            {emailInputHasError && (
              <span className="error_message">Please enter a valid email</span>
            )}
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
                onBlur={passwordBlurHanlder}
              />

              <button
                className="password_eye_logo"
                onClick={togglePasswordHandler}
              >
                {visible === "password" ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordInputHasError && (
              <span className="error_message">
                Please enter a valid password (At least 6 characters, 1
                upperCase, 1 Number)
              </span>
            )}
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
              onClick={formSubmitHandler}
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
