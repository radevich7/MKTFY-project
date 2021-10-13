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
                    className="signUp_inputField"
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
                    className="signUp_inputField"
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
                    className="signUp_inputField"
                  />
                </FormGroup>
              </Row>
              <Row>
                <FormGroup>
                  <Label for="phone">Phone</Label>

                  <Input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="+1 (000) 000-0000 "
                    className="signUp_inputField"
                  />
                </FormGroup>
              </Row>
            </Col>

            {/* RIGHT HALF */}
            <Col lg="6">
              <Row>
                <FormGroup>
                  <Label for="streetAddress">Street Address</Label>

                  <Input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    placeholder="Insert your address"
                    className="signUp_inputField"
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
                      className="signUp_inputField"
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
