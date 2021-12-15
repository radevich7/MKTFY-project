import { useState } from "react";
import { useHistory } from "react-router-dom";
import auth0js from "auth0-js";
import {
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
} from "reactstrap";

import { FaArrowLeft } from "react-icons/fa";
import "./ForgetPasswordModal.css";
import Button from "../../reusableComponent/Button";

const ForgetPasswordModal = (props) => {
  // AUTHO
  const webAuth = new auth0js.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  });
  const [emailValue, setEmailValue] = useState();
  const [emailError, setEmailError] = useState();
  let history = useHistory();

  // EMAIL VALIDATION
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
        <span className="error_message">
          Please enter a proper login format 'test@test.com'
        </span>
      );
    }
  };
  const emailClasses = emailError
    ? "login_inputField invalid"
    : "login_inputField";

  let disableLogin = true;
  if (!emailError && emailValue) {
    disableLogin = false;
  }

  // SUBMITING REQUEST TO AUTH0 TO CHANGE PASSWORD
  const formSubmitHandler = (e) => {
    e.preventDefault();

    webAuth.changePassword(
      {
        connection: process.env.REACT_APP_AUTH0_CONNECTION,
        email: emailValue,
      },
      function (err, resp) {
        if (err) {
          history.push(`/success/error`);
        } else {
          if (resp) {
            setEmailValue();
            setEmailError();
            history.push(`/success/reset`);
          }
        }
      }
    );
  };

  return (
    <Modal isOpen={props.modal} toggle={props.toggle} size="lg">
      <ModalHeader toggle={props.toggle} className="forgetPassword_header">
        Forgot Your Password?
      </ModalHeader>
      <div
        className="backArrow"
        onClick={(e) => {
          props.toggle();
          props.loginToggle();
        }}
      >
        <FaArrowLeft />
      </div>

      <ModalBody className="forgetPassword_body">
        <Form onSubmit={formSubmitHandler}>
          <p className="forgotPassword_text">
            It’s okay, these things happen. Please enter your email in the field
            below. We will send you an email to reset your password.
          </p>
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
          <Button
            disabled={disableLogin}
            className="forgetPassword_input_button"
          >
            Login
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ForgetPasswordModal;
