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

import { Link } from "react-router-dom";
import Button from "..//../reusableComponent/Button";
import PhoneInput from "react-phone-number-input/input";

import "./AccountInformation.css";
import { useState, useRef } from "react";
import axios from "axios";

const AccountInformation = (props) => {
  const [userData, setUserData] = useState(props.store.userData);
  const [firstNameUpdated, setFirstNameUpdated] = useState(
    props.store.userData.firstName
  );
  const [lastNameUpdated, setLastNameUpdated] = useState(
    props.store.userData.lastName
  );
  const [emailUpdated, setEmailUpdated] = useState(props.store.userData.email);
  const [phoneUpdated, setPhoneUpdated] = useState(props.store.userData.phone);
  const [defaultPhoneValue, setDefaultPhoneValue] = useState("");
  const [addressUpdated, setAddressUpdated] = useState(
    props.store.userData.address
  );
  const [cityUpdated, setCityUpdated] = useState(props.store.userData.city);
  const [provinceUpdated, setProvinceUpdated] = useState(
    props.store.userData.province
  );
  const [countryUpdated, setCountryUpdated] = useState(
    props.store.userData.country
  );
  const phonePlaceholder = `(${phoneUpdated.slice(2, 5)}) ${phoneUpdated.slice(
    5,
    8
  )} - ${phoneUpdated.slice(8)}`;

  const userDataUpdated = {
    firstName: firstNameUpdated,
    lastName: lastNameUpdated,
    email: emailUpdated,
    phone: !defaultPhoneValue ? phoneUpdated : defaultPhoneValue,
    address: addressUpdated,
    city: cityUpdated,
    province: provinceUpdated,
    country: countryUpdated,
  };
  console.log(userDataUpdated);

  const submitFormHandler = (e) => {
    e.preventDefault();

    axios
      .put("url", userDataUpdated)
      .then((res) => {
        props.store.setStore((prevState) => ({
          ...prevState,
          userData: userDataUpdated,
        }));
      })
      .catch((err) => alert(err));
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
                      defaultValue={userData.lastName}
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
                      defaultValue={userData.email}
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
                      />
                      {!defaultPhoneValue && (
                        <span className="accountInformation_phone_placeholder">
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
                      defaultValue={userData.address}
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
                        defaultValue={userData.city}
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
                        defaultValue={userData.province}
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
                      defaultValue={userData.country}
                      onChange={(e) => setCountryUpdated(e.target.value)}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Button className="accountInformation_button">Save</Button>
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
