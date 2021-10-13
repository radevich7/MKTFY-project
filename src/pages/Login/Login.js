import { useState } from "react";
import { Container, Card } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/login_page/logo.svg";
import Button from "../../reusableComponent/Button";
import LoginFormOverlay from "./LoginFormOverlay";
import "./Login.css";
import SignUpFormOverlay from "./SignUpFormOverlay";

const Login = () => {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignUp, setmodalSignUp] = useState(false);
  const toggleLogin = () => setModalLogin(!modalLogin);
  const toggleSignUp = () => setmodalSignUp(!modalSignUp);

  return (
    <Container fluid className="login_container">
      <LoginFormOverlay toggle={toggleLogin} modal={modalLogin} />
      <SignUpFormOverlay toggle={toggleSignUp} modal={modalSignUp} />
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
