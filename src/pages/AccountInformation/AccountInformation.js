import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../store/app-context";
import { Link } from "react-router-dom";

import Button from "..//../reusableComponent/Button";
import PhoneInput from "react-phone-number-input/input";
import "./AccountInformation.css";
import { useState, useRef } from "react";
import { PUT } from "../../api/api";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Card,
  CardBody,
} from "reactstrap";

const AccountInformation = (props) => {
  const history = useHistory();
  const [store, dispatch] = useContext(AppContext);

  const [valuePhone, setValuePhone] = useState(); //for international input to work
  const phoneInputRef = useRef();

  const [firstNameUpdated, setFirstNameUpdated] = useState(
    store.user.firstName
  );
  const [lastNameUpdated, setLastNameUpdated] = useState(store.user.lastName);
  const [emailUpdated, setEmailUpdated] = useState(store.user.email);
  const [phoneUpdated, setPhoneUpdated] = useState(store.user.phone);
  const [defaultPhoneValue, setDefaultPhoneValue] = useState("");
  const [addressUpdated, setAddressUpdated] = useState(
    store.user.streetAddress
  );
  const [cityUpdated, setCityUpdated] = useState(store.user.city);
  const [provinceUpdated, setProvinceUpdated] = useState(store.user.province);
  const [countryUpdated, setCountryUpdated] = useState(store.user.country);

  const phonePlaceholder = store.user.phone && store.user.phone.slice(2);

  const userDataUpdated = {
    id: store.user.id,
    firstName: firstNameUpdated,
    lastName: lastNameUpdated,
    email: emailUpdated,
    phone: !defaultPhoneValue ? phoneUpdated : defaultPhoneValue,
    streetAddress: addressUpdated,
    city: cityUpdated,
    province: provinceUpdated,
    country: countryUpdated,
  };
  const submitFormHandler = (e) => {
    e.preventDefault();
    let url = "/api/profile";
    PUT(url, userDataUpdated).then((res) => {
      dispatch({ type: "SET_USER", user: res.data });
    });
    dispatch({ type: "SET_USER", user: { ...userDataUpdated } });
    history.push("/home");
  };

  return (
    <Container fluid className="accountInformation_container">
      <Card className="border_document_accountInformation">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>
          <span className="arrow_path"> {">"} </span>
          <span>Account information</span>
        </div>
        <CardBody className="accountInformation_card">
          <Form onSubmit={submitFormHandler}>
            <Row>
              {/* LEFT HALF */}
              <Col lg="6">
                <h5>Personal Information</h5>
                <Row>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>

                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Your first name"
                      className="accountInformation_inputField"
                      defaultValue={firstNameUpdated}
                      onChange={(e) => setFirstNameUpdated(e.target.value)}
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
                      className="accountInformation_inputField"
                      defaultValue={lastNameUpdated}
                      onChange={(e) => setLastNameUpdated(e.target.value)}
                    />
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
                      className="accountInformation_inputField"
                      defaultValue={emailUpdated}
                      onChange={(e) => setEmailUpdated(e.target.value)}
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
                        className="accountInformation_inputField phone"
                        value={defaultPhoneValue}
                        onChange={(e) => setDefaultPhoneValue(e)}
                        ref={phoneInputRef}
                      />
                      {!defaultPhoneValue && (
                        <span
                          className="accountInformation_phone_placeholder"
                          onClick={() => phoneInputRef.current.focus()}
                        >
                          {phonePlaceholder}
                        </span>
                      )}
                    </div>
                  </FormGroup>
                </Row>
              </Col>

              {/* RIGHT HALF */}
              <Col lg="6">
                <h5>Address Information</h5>
                <Row>
                  <FormGroup>
                    <Label for="address">Street Address</Label>

                    <Input
                      type="text"
                      name="address"
                      id="address"
                      className="accountInformation_inputField"
                      defaultValue={addressUpdated}
                      onChange={(e) => setAddressUpdated(e.target.value)}
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
                        className="accountInformation_inputField"
                        defaultValue={cityUpdated}
                        onChange={(e) => setCityUpdated(e.target.value)}
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
                        className="accountInformation_inputField"
                        defaultValue={provinceUpdated}
                        onChange={(e) => setProvinceUpdated(e.target.value)}
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
                      className="accountInformation_inputField"
                      defaultValue={countryUpdated}
                      onChange={(e) => setCountryUpdated(e.target.value)}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Button
                      className="accountInformation_button"
                      onClick={submitFormHandler}
                    >
                      Save
                    </Button>
                  </FormGroup>
                </Row>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AccountInformation;
