import { useState } from "react";
import "./LoginModalOverlay.css";
import {
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
  Input,
} from "reactstrap";
import { AiOutlineEyeInvisible } from "react-icons/all";
const LoginFormOverlay = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="login_form">
      <Button
        onClick={() => {
          setModal(true);
        }}
      >
        sads
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle} className="login_header">
          Welcome Back!
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <span>
                <AiOutlineEyeInvisible />
              </span>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Your email"
              />
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Your password"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Login
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoginFormOverlay;
