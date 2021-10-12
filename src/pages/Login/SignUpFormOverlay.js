import { useState } from "react";

import "./SignUpFormOverlay.css";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const SignUpFormOverlay = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>Hello</Button>
      <Modal isOpen={modal} toggle={toggle} className="signup_container">
        <ModalHeader toggle={toggle} className="signUp_header">
          <h2>Welcome to MKTFY!</h2>
          <p>
            It’s nice to meet you. At MKTFY you are able to buy, sell and donate
            awesome stuff to a community of awesome people. Please fill out the
            form below to get started.
          </p>
        </ModalHeader>
        <ModalBody className="signUp_modal_body">
          <Form>
            <Row>
              <Col lg="6" className="border">
                <Row>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>

                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Your first name"
                      className="login_inputField"
                    />
                  </FormGroup>
                </Row>
              </Col>
              <Col lg="6" className="border">
                <Row>
                  <FormGroup>
                    <Label for="firstName">Street Address</Label>

                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="Your first name"
                      className="login_inputField"
                    />
                  </FormGroup>
                </Row>
              </Col>
            </Row>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <div className="password_input_field">
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="Your password"
                  className="login_inputField"
                ></Input>
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default SignUpFormOverlay;
