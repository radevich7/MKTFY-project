import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  NavbarBrand,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Input,
  Card,
  DropdownItem,
  InputGroupAddon,
  Button,
  Form,
  Nav,
} from "reactstrap";
import logo1 from "../../assets/MKTFY_wordmark.svg";
import search_icon from "../../assets/search_icon.svg";

const NavBar = () => {
  //DropDown logic
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <Container fluid className="bg--indigo ">
        <Nav>
          <Row className="w-100">
            <Col lg="1">
              <NavbarBrand href="/">
                <img src={logo1} alt="logo of MKTFY" />
              </NavbarBrand>
            </Col>
            <Col lg="7">
              <Card>
                <Row>
                  <Col lg="2" className="smth">
                    <Button
                      outline
                      color="secondary "
                      className="w-100 border-0"
                    >
                      All
                    </Button>
                  </Col>
                  <Col lg="8">
                    <Form className="m-2">
                      <img
                        className="position-absolute icon_style"
                        src={search_icon}
                        alt="/"
                      />
                      <Input
                        className="border-custom"
                        type="search"
                        name="search"
                        id="exampleSearch"
                        placeholder="Search on MKTFY "
                      />
                    </Form>
                  </Col>
                  <Col lg="2">
                    <Dropdown
                      isOpen={dropdownOpen}
                      toggle={toggle}
                      className="m-1"
                    >
                      <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={dropdownOpen}
                      >
                        City
                      </DropdownToggle>
                      <DropdownMenu>
                        <div onClick={toggle}>
                          <Input
                            className=""
                            type="search"
                            name="search"
                            id="exampleSearch"
                            placeholder="Search city "
                          />
                        </div>
                        <div onClick={toggle}>Brooks</div>
                        <div onClick={toggle}>Camrose</div>
                        <div onClick={toggle}>Calgary</div>
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col lg="3"></Col>
          </Row>
        </Nav>
      </Container>
    </div>
  );
};

export default NavBar;
