import { useState } from "react";
import Button from "../../reusableComponent/Button";
import "./SignUpFormOverlay.css";
import PhoneInput from "react-phone-number-input/input";
import useInput from "../hooks/use-input";
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
} from "reactstrap";

const SignUpFormOverlay = (props) => {
  const [valuePhone, setValuePhone] = useState(); //for international input to work

  // FIRST NAME
  const {
    value: firstNameValue,
    classes: firstNameClasses,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    inputBlurHandlder: firstNameBlurHanlder,
    reset: resetFirstNameInput,
  } = useInput((value) => /^[a-z ,.'-]+$/i.test(value));
  // LastName
  const {
    value: lastNameValue,
    classes: lastNameClasses,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    inputBlurHandlder: lastNameBlurHanlder,
    reset: resetLastNameInput,
  } = useInput((value) => /^[a-z ,.'-]+$/i.test(value));

  // EMAIL
  const {
    value: emailValue,
    classes: emailClasses,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    inputBlurHandlder: emailBlurHanlder,
    reset: resetEmailInput,
  } = useInput((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  // Phone
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneInputHasError,
    inputBlurHandlder: phoneBlurHanlder,
    reset: resetPhoneInput,
  } = useInput((value) =>
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(value)
  );
  const phoneClasses = phoneInputHasError
    ? "signUp_inputField form-control invalid"
    : "signUp_inputField form-control";
  // St
  const {
    value: addressValue,
    classes: addressClasses,
    isValid: addressIsValid,
    hasError: addressInputHasError,
    inputBlurHandlder: addressBlurHanlder,
    reset: resetAddressInput,
  } = useInput((value) => /^\s*[0-9a-zA-Z][0-9a-zA-Z '-]*$/.test(value));

  const {
    value: cityValue,
    classes: cityClasses,
    isValid: cityIsValid,
    hasError: cityInputHasError,
    inputBlurHandlder: cityBlurHanlder,
    reset: resetCityInput,
  } = useInput((value) => /[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/.test(value));

  const {
    value: provinceValue,
    classes: provinceClasses,
    isValid: provinceIsValid,
    hasError: provinceInputHasError,
    inputBlurHandlder: provinceBlurHanlder,
    reset: resetProvinceInput,
  } = useInput((value) => /[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/.test(value));

  const {
    value: countryValue,
    classes: countryClasses,
    isValid: countryIsValid,
    hasError: countryInputHasError,
    inputBlurHandlder: countryBlurHanlder,
    reset: resetCountryInput,
  } = useInput((value) => /[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/.test(value));

  // Button disabled function
  let disableLogin = true;

  firstNameValue &&
  lastNameValue &&
  emailValue &&
  phoneValue &&
  addressValue &&
  cityValue &&
  provinceValue &&
  countryValue &&
  !firstNameInputHasError &&
  !lastNameInputHasError &&
  !emailInputHasError &&
  !phoneInputHasError &&
  !addressInputHasError &&
  !cityInputHasError &&
  !provinceInputHasError &&
  !countryInputHasError
    ? (disableLogin = false)
    : (disableLogin = true);

  const resetForm = () => {
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    setValuePhone();
    resetPhoneInput();
    resetAddressInput();
    resetCityInput();
    resetProvinceInput();
    resetCountryInput();
  };
  // Form Submit
  const submitFormHandler = (e) => {
    e.preventDefault();
    if (e) {
      props.onOpenCreatePassword();
      props.toggle();
    }
    const personObject = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      phone: phoneValue,
      address: addressValue,
      city: cityValue,
      province: provinceValue,
      country: countryValue,
    };
    props.setSignupData(personObject);
    resetForm();
  };

  return (
    <Modal
      isOpen={props.modal}
      toggle={props.toggle}
      className="signup_container"
    >
      <ModalHeader toggle={props.toggle} className="signUp_header">
        Welcome to MKTFY!
        <p>
          It’s nice to meet you. At MKTFY you are able to buy, sell and donate
          awesome stuff to a community of awesome people. Please fill out the
          form below to get started.
        </p>
      </ModalHeader>
      <ModalBody className="signUp_modal_body">
        <Form onSubmit={submitFormHandler}>
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
                    onBlur={firstNameBlurHanlder}
                  />
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
                    onBlur={lastNameBlurHanlder}
                  />
                  {/* <span className="signUp_error_message">
  //         Please enter a last name valid
  //       </span> */}
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
                    onBlur={emailBlurHanlder}
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <div className="phoneInput_container">
                    <PhoneInput
                      country="US"
                      international
                      withCountryCallingCode
                      className={phoneClasses}
                      onBlur={phoneBlurHanlder}
                      value={valuePhone}
                      onChange={setValuePhone}
                    />
                    {!valuePhone && (
                      <span className="phone_placeholder">
                        (000) 000 - 0000
                      </span>
                    )}
                  </div>
                </FormGroup>
              </Row>
            </Col>

            {/* RIGHT HALF */}
            <Col lg="6">
              <Row>
                <FormGroup>
                  <Label for="address">Street Address</Label>

                  <Input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Insert your address"
                    className={addressClasses}
                    onBlur={addressBlurHanlder}
                  />
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
                      onBlur={cityBlurHanlder}
                    />
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
                      className={provinceClasses}
                      onBlur={provinceBlurHanlder}
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
                    className={countryClasses}
                    onBlur={countryBlurHanlder}
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Button
                    className="signUp_next_button"
                    // onClick={toggle}
                    disabled={disableLogin}
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
