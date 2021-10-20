import "./ForgetPasswordModal.css";
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
import { FaArrowLeft } from "react-icons/fa";

import Button from "../../reusableComponent/Button";
import auth0js from "auth0-js";
const ForgetPasswordModal = (props) => {
  const webAuth = new auth0js.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  });

  const [emailValue, setEmailValue] = useState();
  const [emailError, setEmailError] = useState();
  const [isSuccess, setIsSuccess] = useState(false);

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

  const formSubmitHandler = (e) => {
    e.preventDefault();

    webAuth.changePassword(
      {
        connection: process.env.REACT_APP_AUTH0_CONNECTION,
        email: emailValue,
      },
      function (err, resp) {
        if (err) {
          console.log(err);
        } else {
          if (resp) {
            setIsSuccess(true);
          }
        }
      }
    );
  };

  const confirmationHandler = (e) => {
    setIsSuccess(false);
    setEmailValue();
    setEmailError();
    props.toggle();
  };
  const confirmationMessage = (
    <div className="confirmation_card">
      <p className="confirmation_text">
        Please check your email inbox for a password recovery link. Don't forget
        to check your spam folder.
      </p>
      <Button className="confirmation_button" onClick={confirmationHandler}>
        OK
      </Button>
    </div>
  );

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
      {isSuccess ? (
        confirmationMessage
      ) : (
        <ModalBody className="forgetPassword_body">
          <Form onSubmit={formSubmitHandler}>
            <p className="forgotPassword_text">
              It’s okay, these things happen. Please enter your email in the
              field below. We will send you an email to reset your password.
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
      )}
    </Modal>
  );
};

export default ForgetPasswordModal;
