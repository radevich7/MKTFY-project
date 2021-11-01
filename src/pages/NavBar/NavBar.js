import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo1 from "../../assets/img/MKTFY_wordmark.svg";
import search_icon from "../../assets/img/search_icon.svg";
import blackCaretDown from "../../assets/img/blackCaretDown.svg";
import gold_caret from "../../assets/img/gold_caret.svg";
import exit_app from "../../assets/img/exit_to_app-24px.svg";
import notification_bell from "../../assets/img/notification_bell_main.svg";
import { BiSearchAlt2 } from "react-icons/bi";

import {
  NavItem,
  NavbarToggler,
  Collapse,
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
  Form,
  Nav,
  NavLink,
  Navbar,
} from "reactstrap";

const NavBar = () => {
  // toggle effect of the dropdown menus
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const toggle3 = () => setDropdownOpen3((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  //
  // get first letter from the name
  const getLetterForLogo = () => {
    return "George Carlson".charAt(0);
  };
  const letterLogo = getLetterForLogo();
  //

  //Categories collapse hamburger
  const [open, setIsOpen] = useState(false);
  const toggle4 = () => setIsOpen((prevState) => !prevState);

  return (
    <Container fluid>
      <Navbar expand="xl" fixed="top" className="app_container">
        <NavbarToggler onClick={toggle4} />
        <Collapse navbar isOpen={open}>
          <Nav className="me-auto w-100 border_document" navbar>
            <Row className="w-100 h-100 m-0">
              <Col lg="1">
                <NavbarBrand href="/home">
                  <img src={logo1} alt="logo of MKTFY" id="logo1" />
                </NavbarBrand>
              </Col>
              {/* SEARCH INPUT FIELD + buttons on each side */}
              <Col lg="7">
                <NavItem>
                  <Card className="search_card_padding border-0">
                    <Row>
                      {/* BUTTON ALL */}
                      <Col lg="2" className="smth">
                        <span className="output_categories_span">All</span>
                      </Col>
                      {/* SEARCH INPUT */}

                      <Col className="border-custom">
                        <Form>
                          <img
                            className="icon_style1"
                            src={search_icon}
                            alt="/"
                          />
                          <Input
                            type="search"
                            name="search"
                            id="exampleSearch"
                            placeholder="Search on MKTFY"
                            className="search_input"
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
                            <div className="dropDown_search_input2">
                              <img
                                src={search_icon}
                                alt="/"
                                className="icon_style2"
                              />
                              <Input
                                type="search"
                                name="search"
                                id="exampleSearch"
                                placeholder="Search City"
                                className="searchInput_city"
                              />
                            </div>

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

                  <Col className="categories_column ">
                    <span href="#" className="category_header">
                      <div className="hamburger_button">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      Categories
                    </span>

                    <span href="#">Deals</span>

                    <span href="#">Cars & Vehicles </span>

                    <span href="#">Furniture</span>

                    <span href="#">Electronics</span>

                    <span href="#">Real Estate</span>
                  </Col>
                </NavItem>

                {/* end search input */}
              </Col>
              {/* DROPDOWN USER PROFILE */}
              <Col lg="2" className="profile_notification_container">
                <Col lg="10">
                  <Dropdown
                    isOpen={dropdownOpen2}
                    toggle={toggle2}
                    className="m-1"
                  >
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
                        <div className="name_logo">
                          <div className="letter_logo">{letterLogo}</div>
                        </div>
                        <span> George Carlson</span>
                      </DropdownItem>

                      <DropdownItem
                        header
                        className="dropdown_settings_header "
                      >
                        Settings
                      </DropdownItem>
                      <DropdownItem
                        className="dropDownItem_profile"
                        to="/home/account"
                        tag={Link}
                      >
                        Account Information
                      </DropdownItem>
                      <DropdownItem
                        className="dropDownItem_profile"
                        to="/home/changepassword"
                        tag={Link}
                      >
                        Change Password
                      </DropdownItem>
                      <DropdownItem
                        className="dropDownItem_profile"
                        to="/home/purchases"
                        tag={Link}
                      >
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
                      <DropdownItem
                        className="dropDownItem_profile sign_out_button"
                        to="/logout"
                        tag={Link}
                      >
                        Sign Out
                        <img src={exit_app} alt="/icon" id="exit_logo" />
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
                {/* NOTIFICATION */}
                <Col
                  className="d-none d-xxl-block notificationBell_column"
                  align="center"
                >
                  <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                    <DropdownToggle
                      tag="span"
                      data-toggle="dropdown"
                      aria-expanded={dropdownOpen3}
                    >
                      <img
                        src={notification_bell}
                        alt="/"
                        id="notification_bell_logo"
                      />
                    </DropdownToggle>
                    <DropdownMenu className="dropDownCustom_notification arrow_notification">
                      <DropdownItem
                        header
                        className="dropdown_notification_header"
                      >
                        News for you
                      </DropdownItem>
                      <DropdownItem className="notification_dropdown_item">
                        <div className="notification_brand_logo">
                          <span>MKTFY</span>
                        </div>
                        <div className="notification_message">
                          <span> Hey George, welcome to MKTFY</span>
                          <span style={{ fontSize: "12px" }}>
                            {" "}
                            September 02, 2020
                          </span>
                        </div>
                      </DropdownItem>
                      <DropdownItem
                        header
                        className="dropdown_notification_header"
                      >
                        Previously Seen
                      </DropdownItem>
                      <DropdownItem className="notification_dropdown_item">
                        <div className="notification_brand_logo">
                          <span>MKTFY</span>
                        </div>
                        <div className="notification_message">
                          <span> Let's create your first offer!</span>
                          <span style={{ fontSize: "12px" }}>
                            September 05, 2020
                          </span>
                        </div>
                      </DropdownItem>
                      <DropdownItem className="notification_dropdown_item">
                        <div className="notification_brand_logo">
                          <span>MKTFY</span>
                        </div>
                        <div className="notification_message">
                          <span> Our Terms of Service has been updated</span>
                          <span style={{ fontSize: "12px" }}>
                            September 03, 2020
                          </span>
                        </div>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Col>

              {/* End userProfile} */}

              <Col lg="2" className="button_column">
                <Link to="/home/create" className="button_create_listing w-100">
                  <span id="container">
                    <span>+</span>
                  </span>
                  Create Listing
                </Link>
              </Col>
            </Row>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
// {/* <Container fluid>
// <Navbar className="app_container" fixed="top" expand="lg">
//   {/* ROW LINE */}

//   <Nav className="w-100 border_document ">
//     <Row className="w-100 ">
//       {/* LOGO */}
//       <Col lg="1">
//         <NavbarBrand href="/home">
//           <img src={logo1} alt="logo of MKTFY" id="logo1" />
//         </NavbarBrand>
//       </Col>
//       {/* CARD for the SEARCH BAR */}

//       {/* <Collapse navbar> */}
//       <Col xl="7">
// <NavItem>
//   <Card className="search_card_padding border-0">
//     <Row>
//       {/* BUTTON ALL */}
//       <Col lg="2" className="smth">
//         <span className="output_categories_span">All</span>
//       </Col>
//       {/* SEARCH INPUT */}

//       <Col className="border-custom">
//         <Form>
//           <img
//             className="icon_style1"
//             src={search_icon}
//             alt="/"
//           />
//           <Input
//             type="search"
//             name="search"
//             id="exampleSearch"
//             placeholder="Search on MKTFY"
//             className="search_input"
//           />
//         </Form>
//       </Col>
//       {/* DROPDOWN CITY */}
//       <Col lg="2">
//         <Dropdown
//           isOpen={dropdownOpen}
//           toggle={toggle}
//           className="m-1"
//         >
//           <DropdownToggle
//             tag="span"
//             data-toggle="dropdown"
//             aria-expanded={dropdownOpen}
//             className="dropDownToggle_search_card"
//           >
//             <img src={blackCaretDown} alt="/" />
//             <h3>City</h3>
//           </DropdownToggle>
//           <DropdownMenu className="dropDownCustom_search_card arrow_city_search">
//             <div className="dropDown_search_input2">
//               <img
//                 src={search_icon}
//                 alt="/"
//                 className="icon_style2"
//               />
//               <Input
//                 type="search"
//                 name="search"
//                 id="exampleSearch"
//                 placeholder="Search City"
//                 className="searchInput_city"
//               />
//             </div>

//             <DropdownItem className="dropDownItem">
//               Brooks{" "}
//             </DropdownItem>
//             <DropdownItem className="dropDownItem">
//               Camrose
//             </DropdownItem>
//             <DropdownItem className="dropDownItem">
//               Calgary
//             </DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </Col>
//     </Row>
//   </Card>
// </NavItem>
//         {/* Categories/links */}
//         <Nav className="category_links">
//           {/* <NavbarToggler onClick={toggleNavbar} className="mr-2" /> */}
//           {/* <Collapse isOpen={!collapsed} navbar> */}

//  <NavLink href="#" className="hamburger_button">
//   <div></div>
//   <div></div>
//   <div></div>
// </NavLink>
// <NavLink href="#" className="category_header">
//   Categories
// </NavLink>
// <NavLink href="#">Deals</NavLink>
// <NavLink href="#">Cars & Vehicles </NavLink>
// <NavLink href="#">Furniture</NavLink>
// <NavLink href="#">Electronics</NavLink>
// <NavLink href="#">Real Estate</NavLink>

//           {/* </Collapse> */}
//         </Nav>
//       </Col>
//       {/* DROPDOWN USER PROFILE and NOTIFICATION */}
// <Col lg="2" className="profile_notification_container">
//   {/* DROPDOWN USER PROFILE */}
//   <Dropdown isOpen={dropdownOpen2} toggle={toggle2} className="m-1">
//     <DropdownToggle
//       tag="span"
//       data-toggle="dropdown"
//       aria-expanded={dropdownOpen2}
//       className="dropDownToggle_profile"
//     >
//       <h4> Welcome back,</h4>
//       <h3>
//         <img src={gold_caret} alt="/" />
//         George Carlson
//       </h3>
//     </DropdownToggle>
//     <DropdownMenu className="dropDownCustom_profile arrow_profile">
//       <DropdownItem className="dropdown_user_name">
//         <div className="name_logo">
//           <div className="letter_logo">{letterLogo}</div>
//         </div>
//         <span> George Carlson</span>
//       </DropdownItem>

//       <DropdownItem header className="dropdown_settings_header ">
//         Settings
//       </DropdownItem>
//       <DropdownItem
//         className="dropDownItem_profile"
//         to="/home/account"
//         tag={Link}
//       >
//         Account Information
//       </DropdownItem>
//       <DropdownItem
//         className="dropDownItem_profile"
//         to="/home/changepassword"
//         tag={Link}
//       >
//         Change Password
//       </DropdownItem>
//       <DropdownItem
//         className="dropDownItem_profile"
//         to="/home/purchases"
//         tag={Link}
//       >
//         My purchases
//       </DropdownItem>
//       <DropdownItem className="dropDownItem_profile">
//         My Listings
//       </DropdownItem>
//       <DropdownItem header className="dropdown_help_header">
//         Help
//       </DropdownItem>
//       <DropdownItem className="dropDownItem_profile">
//         FAQ
//       </DropdownItem>
//       <DropdownItem className="dropDownItem_profile">
//         Contact Us
//       </DropdownItem>
//       <DropdownItem
//         className="dropDownItem_profile sign_out_button"
//         to="/logout"
//         tag={Link}
//       >
//         Sign Out
//         <img src={exit_app} alt="/icon" id="exit_logo" />
//       </DropdownItem>
//     </DropdownMenu>
//   </Dropdown>
//   {/* NOTIFICATION */}
//   <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
//     <DropdownToggle
//       tag="span"
//       data-toggle="dropdown"
//       aria-expanded={dropdownOpen3}
//     >
//       <img
//         src={notification_bell}
//         alt="/"
//         id="notification_bell_logo"
//       />
//     </DropdownToggle>
//     <DropdownMenu className="dropDownCustom_notification arrow_notification">
//       <DropdownItem header className="dropdown_notification_header">
//         News for you
//       </DropdownItem>
//       <DropdownItem className="notification_dropdown_item">
//         <div className="notification_brand_logo">
//           <span>MKTFY</span>
//         </div>
//         <div className="notification_message">
//           <span> Hey George, welcome to MKTFY</span>
//           <span style={{ fontSize: "12px" }}>
//             {" "}
//             September 02, 2020
//           </span>
//         </div>
//       </DropdownItem>
//       <DropdownItem header className="dropdown_notification_header">
//         Previously Seen
//       </DropdownItem>
//       <DropdownItem className="notification_dropdown_item">
//         <div className="notification_brand_logo">
//           <span>MKTFY</span>
//         </div>
//         <div className="notification_message">
//           <span> Let's create your first offer!</span>
//           <span style={{ fontSize: "12px" }}>
//             September 05, 2020
//           </span>
//         </div>
//       </DropdownItem>
//       <DropdownItem className="notification_dropdown_item">
//         <div className="notification_brand_logo">
//           <span>MKTFY</span>
//         </div>
//         <div className="notification_message">
//           <span> Our Terms of Service has been updated</span>
//           <span style={{ fontSize: "12px" }}>
//             September 03, 2020
//           </span>
//         </div>
//       </DropdownItem>
//     </DropdownMenu>
//   </Dropdown>
// </Col>
// <Col lg="2" className="button_column">
//   <Link to="/home/create" className="button_create_listing w-100">
//     <span id="container">
//       <span>+</span>
//     </span>
//     Create Listing
//   </Link>
// </Col>
//     </Row>
//   </Nav>
// </Navbar>
// </Container> */}
