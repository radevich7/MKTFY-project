import { useState } from "react";
import Button from "../../reusableComponent/Button";
import "./SignUpFormOverlay.css";

import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const SignUpFormOverlay = (props) => {
  const [firstNameValue, setFirstNameValue] = useState();
  const [firstNameError, setFirstNameError] = useState();
  const [lastNameValue, setLastNameValue] = useState();
  const [lastNameError, setLastNameError] = useState();
  const [emailValue, setEmailValue] = useState();
  const [emailError, setEmailError] = useState();
  const [phoneValue, setPhoneValue] = useState();
  const [phoneError, setPhoneError] = useState();
  const [streetValue, setStreetValue] = useState();
  const [streetError, setStreetError] = useState();
  const [cityValue, setCityValue] = useState();
  const [cityError, setCityError] = useState();

  // FIRST NAME
  const firstNameValidation = (e) => {
    const value = e.target.value;
    const regex = /^[a-z ,.'-]+$/i;
    const isValid = regex.test(value);
    if (isValid) {
      setFirstNameValue(value);
      setFirstNameError();
    } else {
      setFirstNameValue();
      setFirstNameError(
        <span className="signUp_error_message">
          Please enter a valid first name
        </span>
      );
    }
  };
  // LAST NAME
  const lastNameValidation = (e) => {
    const value = e.target.value;
    const regex = /^[a-z ,.'-]+$/i;
    const isValid = regex.test(value);
    if (isValid) {
      setLastNameValue(value);
      setLastNameError();
    } else {
      setLastNameValue();
      setLastNameError(
        <span className="signUp_error_message">
          Please enter a last name valid
        </span>
      );
    }
  };
  // EMAIL
  const EmailValidation = (e) => {
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

  // PHONE
  const phoneValidation = (e) => {
    const value = e.target.value;
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const isValid = regex.test(value);
    if (isValid) {
      setPhoneValue(value);
      setPhoneError();
    } else {
      setPhoneValue();
      setPhoneError(
        <span className="signUp_error_message">
          Please enter a valid phone number
        </span>
      );
    }
  };
  // STREET
  const streetValidation = (e) => {
    const value = e.target.value;
    const regex = /^\s*[0-9a-zA-Z][0-9a-zA-Z '-]*$/;
    const isValid = regex.test(value);
    if (isValid) {
      setStreetValue(value);
      setStreetError();
    } else {
      setStreetValue();
      setStreetError(
        <span className="signUp_error_message">
          Please enter a valid street name
        </span>
      );
    }
  };
  const cityValidation = (e) => {
    const value = e.target.value;
    const regex = /[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/;
    const isValid = regex.test(value);
    if (isValid) {
      setCityValue(value);
      setCityError();
    } else {
      setCityValue();
      setCityError(
        <span className="signUp_error_message">
          Please enter a valid city name
        </span>
      );
    }
  };

  const firstNameClasses = firstNameError
    ? "signUp_inputField invalid"
    : "signUp_inputField";
  const lastNameClasses = lastNameError
    ? "signUp_inputField invalid"
    : "signUp_inputField";
  const emailClasses = emailError
    ? "signUp_inputField invalid"
    : "signUp_inputField";
  const phoneClasses = phoneError
    ? "signUp_inputField invalid"
    : "signUp_inputField";
  const streetClasses = streetError
    ? "signUp_inputField invalid"
    : "signUp_inputField";
  const cityClasses = cityError
    ? "signUp_inputField invalid"
    : "signUp_inputField";

  return (
    <Modal
      isOpen={props.modal}
      toggle={props.toggle}
      className="signup_container"
    >
      <ModalHeader toggle={props.toggle} className="signUp_header">
        <h6>Welcome to MKTFY!</h6>
        <p>
          It’s nice to meet you. At MKTFY you are able to buy, sell and donate
          awesome stuff to a community of awesome people. Please fill out the
          form below to get started.
        </p>
      </ModalHeader>
      <ModalBody className="signUp_modal_body">
        <Form>
          <Row>
            {/* LEFT HALF */}
            <Col lg="6">
              <Row>
                <FormGroup>
                  <Label for="firstName">First Name</Label>

                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Your first name"
                    className={firstNameClasses}
                    onBlur={firstNameValidation}
                  />
                  {firstNameError}
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>

                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Your last name"
                    className={lastNameClasses}
                    onBlur={lastNameValidation}
                  />
                  {lastNameError}
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="email">Email</Label>

                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    className={emailClasses}
                    onBlur={EmailValidation}
                  />
                  {emailError}
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="phone">Phone</Label>

                  <Input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+1 (000) 000-0000 "
                    className={phoneClasses}
                    onBlur={phoneValidation}
                  />
                  {phoneError}
                </FormGroup>
              </Row>
            </Col>

            {/* RIGHT HALF */}
            <Col lg="6">
              <Row>
                <FormGroup>
                  <Label for="street">Street Address</Label>

                  <Input
                    type="text"
                    name="street"
                    id="street"
                    placeholder="Insert your address"
                    className={streetClasses}
                    onBlur={streetValidation}
                  />
                  {streetError}
                </FormGroup>
              </Row>
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <Label for="city">City</Label>

                    <Input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City name"
                      className={cityClasses}
                      onBlur={cityValidation}
                    />
                    {cityError}
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <Label for="province">Province</Label>

                    <Input
                      type="text"
                      name="province"
                      id="province"
                      placeholder="Your province"
                      className="signUp_inputField"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row lg="2">
                <FormGroup>
                  <Label for="country">Country</Label>

                  <Input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Country name"
                    className="signUp_inputField"
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Button
                    className="signUp_next_button"
                    onClick={(e) => e.preventDefault()}
                  >
                    Next
                  </Button>
                </FormGroup>
              </Row>
            </Col>
          </Row>
          <p className="signUp_footer_text">
            At MKTFY we respect your privacy and do not tolerate spam, and will
            never sell, rent, lease or give away your information. We only buy,
            sell or donate your stuff here at MKTFY.
          </p>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default SignUpFormOverlay;
