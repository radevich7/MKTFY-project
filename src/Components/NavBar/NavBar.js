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
import gold_caret from "../../assets/gold_caret.svg";
import exit_app from "../../assets/exit_to_app-24px.svg";
import notification_bell from "../../assets/notification_bell_main.svg";

const NavBar = () => {
  //DropDown logic
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);

  const toggle3 = () => setDropdownOpen3((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <Container fluid className="app_container">
        <Nav>
          {/* ROW LINE */}
          <Row className="w-100 nav_bar ">
            {/* LOGO */}
            <Col lg="2" md="1">
              <NavbarBrand href="/">
                <img src={logo1} alt="logo of MKTFY" id="logo1" />
              </NavbarBrand>
            </Col>
            {/* CARD for the SEARCH BAR */}
            <Col>
              <Card>
                <Row>
                  {/* BUTTON ALL */}
                  <Col lg="2" className="smth">
                    <Button
                      outline
                      color="secondary "
                      className="w-100 border-0"
                    >
                      All
                    </Button>
                  </Col>
                  {/* SEARCH INPUT */}
                  <Col>
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
                  {/* DROPDOWN CITY */}
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
                        className="dropDownToggle_search_card"
                      >
                        <img src={blackCaretDown} alt="/" />
                        <h3>City</h3>
                      </DropdownToggle>
                      <DropdownMenu className="dropDownCustom_search_card arrow_city_search">
                        <DropdownItem>
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
                        <DropdownItem className="dropDownItem">
                          Brooks{" "}
                        </DropdownItem>
                        <DropdownItem className="dropDownItem">
                          Camrose
                        </DropdownItem>
                        <DropdownItem className="dropDownItem">
                          Calgary
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </Col>
                </Row>
              </Card>
            </Col>
            {/* DROPDOWN USER */}
            <Col lg="2">
              <Dropdown isOpen={dropdownOpen2} toggle={toggle2} className="m-1">
                <DropdownToggle
                  tag="span"
                  data-toggle="dropdown"
                  aria-expanded={dropdownOpen2}
                  className="dropDownToggle_profile"
                >
                  <h4> Welcome back,</h4>
                  <h3>
                    <img src={gold_caret} alt="/" />
                    George Carlson
                  </h3>
                </DropdownToggle>
                <DropdownMenu className="dropDownCustom_profile arrow_profile">
                  <DropdownItem className="dropdown_user_name">
                    LOGO, George Carlson
                  </DropdownItem>

                  <DropdownItem header className="dropdown_settings_header ">
                    Settings
                  </DropdownItem>
                  <DropdownItem className="dropDownItem_profile">
                    Account Information
                  </DropdownItem>
                  <DropdownItem className="dropDownItem_profile">
                    Change Password
                  </DropdownItem>
                  <DropdownItem className="dropDownItem_profile">
                    My purchases
                  </DropdownItem>
                  <DropdownItem className="dropDownItem_profile">
                    My Listings
                  </DropdownItem>
                  <DropdownItem header className="dropdown_help_header">
                    Help
                  </DropdownItem>
                  <DropdownItem className="dropDownItem_profile">
                    FAQ
                  </DropdownItem>
                  <DropdownItem className="dropDownItem_profile">
                    Contact Us
                  </DropdownItem>
                  <DropdownItem className="dropDownItem_profile sign_out_button">
                    Sign Out
                    <img src={exit_app} alt="/icon" id="exit_logo" />
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col lg="1">
              <Dropdown isOpen={dropdownOpen3} toggle={toggle3} className="m">
                <DropdownToggle
                  tag="span"
                  data-toggle="dropdown"
                  aria-expanded={dropdownOpen3}
                >
                  <img src={notification_bell} alt="/" />
                </DropdownToggle>
                <DropdownMenu className="dropDownCustom_notification arrow_notification">
                  <DropdownItem header className="dropdown_notification_header">
                    News for you
                  </DropdownItem>
                  <DropdownItem>notification</DropdownItem>
                  <DropdownItem header className="dropdown_notification_header">
                    Previously Seen
                  </DropdownItem>
                  <DropdownItem>notification</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
            <Col lg="2"></Col>
          </Row>
        </Nav>
      </Container>
    </div>
  );
};

export default NavBar;
