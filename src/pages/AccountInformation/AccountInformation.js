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
import { useState } from "react";

const AccountInformation = () => {
  const [phonevalue, setPhoneValue] = useState();
  const [account, setAccount] = [
    {
      firstName: "Julian",
      lastName: "Radevych",
      address: "20 Mahogany Ave",
      city: "Calgary",
      province: "AB",
      country: "Canada",
      email: "test@test.com",
      phone: "4034034040",
    },
  ];
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
          <Form>
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
                      value={account.firstName}
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
                      value={account.lastName}
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
                      value={account.email}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label for="phone">Phone</Label>
                    {/* <Input
                      type="text"
                      className="accountInformation_inputField"
                      value={account.phone}
                    /> */}
                    <PhoneInput
                      country="US"
                      international
                      withCountryCallingCode
                      className="accountInformation_inputField phone"
                      value={account.phone}
                      // onChange={setValuePhone}
                    />
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
                      value={account.address}
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
                        value={account.city}
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
                        value={account.province}
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
                      value={account.country}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Button
                      className="accountInformation_button"
                      // onClick={toggle}
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
