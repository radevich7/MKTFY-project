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
  Card,
  DropdownItem,
  InputGroupAddon,
  Button,
  Form,
  Nav,
} from "reactstrap";
import logo1 from "../../assets/MKTFY_wordmark.svg";
import search_icon from "../../assets/search_icon.svg";
import blackCaretDown from "../../assets/blackCaretDown.svg";

const NavBar = () => {
  //DropDown logic
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <Container fluid className="app_container">
        <Nav>
          <Row className="w-100 nav_bar ">
            <Col lg="2">
              <NavbarBrand href="/">
                <img src={logo1} alt="logo of MKTFY" id="logo1" />
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
                  <Col lg="7">
                    <Form>
                      <img className="icon_style1" src={search_icon} alt="/" />
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
                      // direction="left"
                    >
                      <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={dropdownOpen}
                      >
                        <img src={blackCaretDown} alt="/" />
                        City
                      </DropdownToggle>
                      <DropdownMenu className="dropDownCustom">
                        <DropdownItem onClick={toggle} className="arrow">
                          <img
                            src={search_icon}
                            alt="/"
                            className="icon_style2"
                          />
                          <Input
                            className="dropDown_search_input2"
                            type="search"
                            name="search"
                            id="exampleSearch"
                            placeholder="Search city"
                          />
                        </DropdownItem>
                        <DropdownItem onClick={toggle} className="dropDownItem">
                          Brooks{" "}
                        </DropdownItem>
                        <DropdownItem onClick={toggle} className="dropDownItem">
                          Camrose
                        </DropdownItem>
                        <DropdownItem onClick={toggle} className="dropDownItem">
                          Calgary
                        </DropdownItem>
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
