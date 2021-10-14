import "./CreatePassword.css";
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

const CreatePassword = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

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
  const [numberValue, setNumberValue] = useState();

  const handlePasswordValidation = (e) => {
    const value = e.target.value;
    // const regex =
    //   /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{6,20}$/;

    const numberRegex = /^(?=.*\d)/;
    const isValidNumber = numberRegex.test(value);
    if (!isValidNumber) {
      setNumberValue(true);
    }

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

  const numberCheckClass = numberValue ? "number_check valid" : "number_check";

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

  const passwordClasses = passwordError
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
  const checkboxHandler = (e) => {
    if (checkboxValue === true) {
      setCheckboxValue(false);
    } else {
      setCheckboxValue(true);
    }
  };
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Hello
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle} className="createPassword_header">
          Create Password
        </ModalHeader>
        <ModalBody className="createPassword_body">
          <p className="createPassword_header_text">
            The password must have at least 6 characters and must contain 1
            uppercase and 1 number.
          </p>
          <Form>
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
                  className="createPassword_inputField"
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
              <div className="uppercase_check">
                <FaCheckCircle />
                <span> 1 Uppercase</span>
              </div>
              <div className="number_check">
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
    </div>
  );
};

export default CreatePassword;
