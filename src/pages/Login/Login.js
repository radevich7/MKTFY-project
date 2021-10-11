import { useState } from "react";
import { Container, Card } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/login_page/logo.svg";
import Button from "../../reusableComponent/Button";
import LoginFormOverlay from "./LoginFormOverlay";
import "./Login.css";

const Login = () => {
  const [modalCart, setModalCart] = useState(false);

  const openModalCart = () => {
    setModalCart(true);
  };
  const hideModalCart = () => {
    setModalCart(false);
  };
  return (
    <Container fluid className="login_container">
      <Card className="login_card">
        <div className="logo_image">
          <img src={logo} alt="Logo of the company" />
        </div>
        <Button className="login_button" onClick={openModalCart}>
          Login
        </Button>
        {/* {modalCart && <LoginModalOverlay />} */}
        <Button className="createAccount_button">Create Account</Button>
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
