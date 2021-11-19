import { useState, useRef } from "react";
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
import AppContext from "../../store/app-context";
import { useContext } from "react";

const SignUpFormOverlay = (props) => {
  const [store, dispatch] = useContext(AppContext);

  const [valuePhone, setValuePhone] = useState(); //for international input to work
  const phoneInputRef = useRef();

  // FIRST NAME
  const {
    value: firstNameValue,
    classes: firstNameClasses,
    hasError: firstNameInputHasError,
    inputBlurHandlder: firstNameBlurHanlder,
    reset: resetFirstNameInput,
  } = useInput((value) => /^[a-z ,.'-]+$/i.test(value));
  // LastName
  const {
    value: lastNameValue,
    classes: lastNameClasses,
    hasError: lastNameInputHasError,
    inputBlurHandlder: lastNameBlurHanlder,
    reset: resetLastNameInput,
  } = useInput((value) => /^[a-z ,.'-]+$/i.test(value));

  // EMAIL
  const {
    value: emailValue,
    classes: emailClasses,
    hasError: emailInputHasError,
    inputBlurHandlder: emailBlurHanlder,
    reset: resetEmailInput,
  } = useInput((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  // Phone
  const {
    value: phoneValue,
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
    hasError: addressInputHasError,
    inputBlurHandlder: addressBlurHanlder,
    reset: resetAddressInput,
  } = useInput((value) => /^\s*[0-9a-zA-Z][0-9a-zA-Z '-]*$/.test(value));

  const {
    value: cityValue,
    classes: cityClasses,
    hasError: cityInputHasError,
    inputBlurHandlder: cityBlurHanlder,
    reset: resetCityInput,
  } = useInput((value) => /[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/.test(value));

  const {
    value: provinceValue,
    classes: provinceClasses,
    hasError: provinceInputHasError,
    inputBlurHandlder: provinceBlurHanlder,
    reset: resetProvinceInput,
  } = useInput((value) => /[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/.test(value));

  const {
    value: countryValue,
    classes: countryClasses,
    hasError: countryInputHasError,
    inputBlurHandlder: countryBlurHanlder,
    reset: resetCountryInput,
  } = useInput((value) => /[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/.test(value));

  const errorMessage = (text) => {
    return <span className="signUp_error_message">{text}</span>;
  };
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
    // phoneUpdated.substring(2)
    const personObject = {
      // id: `${(Math.random() + 1).toString(36).substring(7)}`,
      email: emailValue,
      firstName: firstNameValue,
      lastName: lastNameValue,
      phone: phoneValue.replace(/\s/g, "").slice(2),
      streetAddress: addressValue,
      city: cityValue,
      province: provinceValue,
      country: countryValue,
    };

    // dispatch({ type: "SET_SIGNUPDATA", signUpData: personObject });

    props.setSignupData(personObject);
    resetForm();
    // console.log(personObject.id);
  };
  const closeModalHandler = () => {
    props.toggle();
    dispatch({ type: "SET_SIGNUPDATA", signUpData: [] });
    setValuePhone();
  };

  return (
    <Modal
      isOpen={props.modal}
      toggle={props.toggle}
      className="signup_container modal-fullscreen-lg-down "
    >
      <ModalHeader
        toggle={props.toggle}
        className="signUp_header"
        close={
          <button className="close" onClick={closeModalHandler}>
            ×
          </button>
        }
      >
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
                  {firstNameInputHasError &&
                    errorMessage("Please enter valid first name")}
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
                  {lastNameInputHasError &&
                    errorMessage("Please enter valid last name")}
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
                  {emailInputHasError &&
                    errorMessage(
                      "Please enter valid email (example@example.example)"
                    )}
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
                      ref={phoneInputRef}
                    />
                    {!valuePhone && (
                      <span
                        className="phone_placeholder"
                        onClick={() => phoneInputRef.current.focus()}
                      >
                        (000) 000 - 0000
                      </span>
                    )}
                  </div>
                  {phoneInputHasError &&
                    errorMessage(
                      "Please enter valid phone number ( 000-000-0000)"
                    )}
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
                  {addressInputHasError &&
                    errorMessage("Please enter street address")}
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
                    {cityInputHasError && errorMessage("Please enter city")}
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
                    {provinceInputHasError &&
                      errorMessage("Please enter province")}
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
                  {countryInputHasError && errorMessage("Please enter country")}
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
