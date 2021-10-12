import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginModalOverlay.css";
import {
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";
import Button from "../../reusableComponent/Button";
import { FaEyeSlash } from "react-icons/fa";
const LoginFormOverlay = (props) => {
  return (
    <Modal
      isOpen={props.modal}
      toggle={props.toggle}
      size="lg"
      className="login_modal_content"
    >
      <ModalHeader toggle={props.toggle} className="login_header">
        Welcome Back!
      </ModalHeader>
      <ModalBody className="login_body">
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>

            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Your email"
              className="login_inputField"
            />
          </FormGroup>
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
              <button
                className="password_eye_logo"
                onClick={(e) => e.preventDefault()}
              >
                <FaEyeSlash />
              </button>
            </div>
          </FormGroup>
          <Link to="/" className="forgot_myPassword_link">
            <span>I forgot my password</span>
          </Link>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={props.toggle} className="login_input_button">
          Login
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default LoginFormOverlay;
