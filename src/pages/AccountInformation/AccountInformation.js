import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../store/app-context";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "../../reusableComponent/Spinner";
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
  const [store, dispatch] = useContext(AppContext);
  const [user, setUser] = useState(null);
  const history = useHistory();
  useEffect(() => {
    if (!store.loading) {
      setUser(store.user);
    }
  }, [store.loading]);

  const phoneInputRef = useRef();
  const [firstNameUpdated, setFirstNameUpdated] = useState();
  const [lastNameUpdated, setLastNameUpdated] = useState();

  const [defaultPhoneValue, setDefaultPhoneValue] = useState();
  const [addressUpdated, setAddressUpdated] = useState();
  const [cityUpdated, setCityUpdated] = useState();
  const [provinceUpdated, setProvinceUpdated] = useState();
  const [countryUpdated, setCountryUpdated] = useState();

  const phonePlaceholder = user
    ? `(${user.phone.slice(0, 3)}) ${user.phone.slice(
        3,
        6
      )} - ${user.phone.slice(6)}`
    : ``;
  console.log(defaultPhoneValue);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const userDataUpdated = {
      id: user.id,
      firstName: firstNameUpdated ? firstNameUpdated : user.firstName,
      lastName: lastNameUpdated ? lastNameUpdated : user.lastName,
      phone: defaultPhoneValue ? defaultPhoneValue.substring(2) : user.phone,
      streetAddress: addressUpdated ? addressUpdated : user.streetAddress,
      city: cityUpdated ? cityUpdated : user.city,
      province: provinceUpdated ? provinceUpdated : user.province,
      country: countryUpdated ? countryUpdated : user.country,
    };
    console.log(userDataUpdated);

    PUT("/api/profile", userDataUpdated).then((res) => {
      console.log(res);
      if (res.failed === false) {
        dispatch({ type: "SET_USER", user: res.data });
      } else {
        console.log("failed");
        // Show to the user that u can't done it
      }
    });

    history.push("/home");
  };

  return (
    <>
      {!user ? (
        <LoadingSpinner />
      ) : (
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
                          defaultValue={user.firstName}
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
                          defaultValue={user.lastName}
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
                          className="accountInformation_inputField"
                          defaultValue={user.email}
                          disabled
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
                            maxLength="15"
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
                          defaultValue={user.streetAddress}
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
                            defaultValue={user.city}
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
                            defaultValue={user.province}
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
                          defaultValue={user.country}
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
      )}
    </>
  );
};

export default AccountInformation;
