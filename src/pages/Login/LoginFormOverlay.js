import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginFormOverlay.css";
import {
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import Button from "../../reusableComponent/Button";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const LoginFormOverlay = (props) => {
  const [emailValue, setEmailValue] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordValue, setPasswordValue] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [visible, setVisible] = useState("password");
  const handleEmailValidation = (e) => {
    const value = e.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(value);
    if (isValid) {
      setEmailValue(value);
      setEmailError();
    } else {
      setEmailValue();
      setEmailError(
        <span className="error_message">Your email is incorrect</span>
      );
    }
  };

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
  const emailClasses = emailError
    ? "login_inputField invalid"
    : "login_inputField";

  const passwordClasses = passwordError
    ? "login_inputField invalid"
    : "login_inputField";

  let disableLogin = true;
  if (!passwordError && !emailError && emailValue && passwordValue) {
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

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      isOpen={props.modal}
      toggle={props.toggle}
      size="lg"
      className="login_modal_content"
    >
      <ModalHeader toggle={props.toggle} className="login_header">
        Welcome Back!
      </ModalHeader>
      <ModalBody className="login_body">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>

            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Your email"
              className={emailClasses}
              onBlur={handleEmailValidation}
            />
            {emailError}
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
          </FormGroup>
          <Link to="/" className="forgot_myPassword_link">
            <span>I forgot my password</span>
          </Link>
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
