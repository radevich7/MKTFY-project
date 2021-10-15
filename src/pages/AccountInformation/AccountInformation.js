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

import "./AccountInformation.css";

const AccountInformation = () => {
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
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup>
                    <Label for="phone">Phone</Label>
                    <Input
                      type="text"
                      className="accountInformation_inputField"
                    />
                    {/* <PhoneInput
                      country="US"
                      international
                      withCountryCallingCode
                      className={phoneClasses}
                      onBlur={phoneValidation}

                    />
                    {phoneError} */}
                  </FormGroup>
                </Row>
              </Col>

              {/* RIGHT HALF */}
              <Col lg="6">
                <h5>Address Information</h5>
                <Row>
                  <FormGroup>
                    <Label for="street">Street Address</Label>

                    <Input
                      type="text"
                      name="street"
                      id="street"
                      className="accountInformation_inputField"
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
