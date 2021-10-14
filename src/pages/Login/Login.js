import { useState } from "react";
import { Container, Card } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/login_page/logo.svg";
import Button from "../../reusableComponent/Button";
import "./Login.css";
import LoginFormOverlay from "./LoginFormOverlay";
import SignUpFormOverlay from "./SignUpFormOverlay";
import CreatePasswordOverlay from "./CreatePasswordOverlay";

const Login = () => {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignUp, setmodalSignUp] = useState(false);
  const [modalCreatePassword, setModalCreatePassword] = useState(false);
  const toggleLogin = () => setModalLogin(!modalLogin);
  const toggleSignUp = () => setmodalSignUp(!modalSignUp);
  const toggleCreatePassword = () =>
    setModalCreatePassword(!modalCreatePassword);

  const signupData = (data) => {
    // console.log(data); data from
  };

  const createPasswordData = (data) => {
    //data
    console.log(data);
  };

  return (
    <Container fluid className="login_container">
      <LoginFormOverlay toggle={toggleLogin} modal={modalLogin} />
      <SignUpFormOverlay
        toggle={toggleSignUp}
        modal={modalSignUp}
        onOpenCreatePassword={toggleCreatePassword}
        data={signupData}
      />
      <CreatePasswordOverlay
        toggle={toggleCreatePassword}
        modal={modalCreatePassword}
        data={createPasswordData}
      />
      {/* <Button onClick={toggleCreatePassword}>Create</Button> */}
      <Card className="login_card">
        <div className="logo_image">
          <img src={logo} alt="Logo of the company" />
        </div>
        <Button className="login_button" onClick={toggleLogin}>
          Login
        </Button>

        <Button className="createAccount_button" onClick={toggleSignUp}>
          Create Account
        </Button>
      </Card>
      <div className="link_to_website">
        <span>
          Find out more about us!
          <Link to="/" className="link_text">
            Visit our website
          </Link>
        </span>
      </div>
    </Container>
  );
};

export default Login;
