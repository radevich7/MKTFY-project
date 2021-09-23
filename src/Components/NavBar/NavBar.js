import React, { useState } from "react";
import "./NavBar.css";
import {
  Container,
  Row,
  Col,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Input,
  FormGroup,
  DropdownItem,
  InputGroupAddon,
  Button,
} from "reactstrap";
import logo1 from "../../assets/MKTFY_wordmark.svg";

const NavBar = () => {
  //DropDown logic
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="background">
      <Container fluid>
        <Row>
          <Col className="col" xs={2}>
            <NavbarBrand href="/">
              <img src={logo1} alt="logo of the company" />
            </NavbarBrand>
          </Col>
          <Col className="col" xs={6}>
            <FormGroup>
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Search on MKTFY"
              >
                <InputGroupAddon>
                  <Button>sad</Button>
                </InputGroupAddon>
              </Input>
            </FormGroup>
          </Col>
          <Col className="col"></Col>
          <Col className="col">
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle caret>
                <span> Welcome back</span>
              </DropdownToggle>
              <DropdownMenu className="smth smth1">
                <DropdownItem>George Calson</DropdownItem>
                <DropdownItem header>Settings</DropdownItem>
                <DropdownItem>Account information</DropdownItem>
                <DropdownItem>Change Password</DropdownItem>
                <DropdownItem>My purchases</DropdownItem>
                <DropdownItem>My listings</DropdownItem>
                <DropdownItem header>Help</DropdownItem>
                <DropdownItem>FAQ</DropdownItem>
                <DropdownItem>Contact us</DropdownItem>
                <DropdownItem>Sign out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col className="col" xs="2">
            1 of 3
          </Col>
          <Col className="col" sm>
            2 of 3 wider
          </Col>
          <Col className="col" sm>
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
