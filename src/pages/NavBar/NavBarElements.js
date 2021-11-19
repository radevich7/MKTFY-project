import { useState, useContext } from "react";
import AppContext from "../../store/app-context";
import gold_caret from "../../assets/img/gold_caret.svg";
import exit_app from "../../assets/img/exit_to_app-24px.svg";
import notification_bell from "../../assets/img/notification_bell_main.svg";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Input,
  DropdownItem,
  Form,
  NavbarToggler,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

import search_icon from "../../assets/img/search_icon.svg";
import blackCaretDown from "../../assets/img/blackCaretDown.svg";
import icon_car from "../../assets/icon_car.svg";
import icon_computer from "../../assets/icon_computer.svg";
import icon_deals from "../../assets/icon_deals.svg";
import icon_furniture from "../../assets/icon_furniture.svg";
import icon_realestate from "../../assets/icon_realestate.svg";
import hambuger_icon_categories from "../../assets/hambuger_icon_categories.svg";

export const SearchInput = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Row className="searchInput_container g-0">
      {/* BUTTON ALL */}
      <Col className="smth col-1 col-md-2">
        <NavbarToggler
          onClick={props.toggleNav}
          aria-controls="main-nav"
          aria-label="Toggle navigation"
          className="d-xl d-xl-none"
        />
        <span className="output_categories_span d-none d-xl-flex">All</span>
      </Col>
      {/* SEARCH INPUT */}
      <Col className="border-custom">
        <Form>
          {/* <img className="icon_style1" src={search_icon} alt="/" /> */}
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
      <Col className="col-2 d-flex flex-column">
        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggle}
          className="searchCity_container"
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
              <img src={search_icon} alt="/" className="icon_style2" />
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Search City"
                className="searchInput_city"
              />
            </div>

            <DropdownItem className="dropDownItem">Brooks </DropdownItem>
            <DropdownItem className="dropDownItem">Camrose</DropdownItem>
            <DropdownItem className="dropDownItem">Calgary</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
  );
};

// CATEGORIES  ELEMENT

export const Categories = (props) => {
  return (
    <Col className="categories_column ">
      <div className="wrap_content scrool_effect">
        <span href="#" className="category_header d-none d-md-flex">
          <img
            src={hambuger_icon_categories}
            className="d-none d-md-flex pe-3"
            alt="/"
          />
          Categories
        </span>
        <span href="#">
          <img src={icon_deals} alt="/" />
          Deals
        </span>
        <span href="#">
          <img src={icon_car} alt="/" />
          <span className="d-flex flex-row">Cars & Vehicles</span>
        </span>
        <span href="#">
          <img src={icon_furniture} alt="/" />
          Furniture
        </span>
        <span href="#">
          <img src={icon_computer} alt="/" />
          Electronics
        </span>
        <span href="#">
          <img src={icon_realestate} alt="/" />
          Real Estate
        </span>
      </div>
    </Col>
  );
};

// PROFILE INFO  ELEMENT

export const UserProfileSettings = (props) => {
  const [store, dispatch] = useContext(AppContext);

  const getLetterForLogo = (props) => {
    return `${store.user.firstName}`.charAt(0);
  };
  const letterLogo = getLetterForLogo();
  //

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
        className="dropDownToggle_profile"
      >
        <h4> Welcome back,</h4>
        <h3>
          <img src={gold_caret} alt="/" />
          {store.user.firstName} {store.user.lastName}
        </h3>
      </DropdownToggle>
      <DropdownMenu className="dropDownCustom_profile arrow_profile">
        <div className="dropdown_container">
          <DropdownItem className="dropdown_user_name">
            <div className="name_logo">
              <div className="letter_logo">{letterLogo}</div>
            </div>
            <span>
              {store.user.firstName} {store.user.lastName}
            </span>
          </DropdownItem>

          <DropdownItem header className="dropdown_settings_header ">
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
          <DropdownItem
            className="dropDownItem_profile"
            to="/home/mylistings"
            tag={Link}
          >
            My Listings
          </DropdownItem>
          <DropdownItem
            className="dropDownItem_profile d-xxl-none d-flex"
            to="/home/mylistings"
            tag={Link}
          >
            Notification
          </DropdownItem>

          <DropdownItem header className="dropdown_help_header">
            Help
          </DropdownItem>
          <DropdownItem
            className="dropDownItem_profile"
            to="/home/faq"
            tag={Link}
          >
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
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

// NOTIFICATION BELL ELEMENT

export const NotificationElement = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        tag="span"
        data-toggle="dropdown"
        aria-expanded={dropdownOpen}
      >
        <img src={notification_bell} alt="/" id="notification_bell_logo" />
      </DropdownToggle>
      <DropdownMenu className="dropDownCustom_notification arrow_notification">
        <DropdownItem header className="dropdown_notification_header">
          News for you
        </DropdownItem>
        <DropdownItem className="notification_dropdown_item">
          <div className="notification_brand_logo">
            <span>MKTFY</span>
          </div>
          <div className="notification_message">
            <span> Hey George, welcome to MKTFY</span>
            <span style={{ fontSize: "12px" }}> September 02, 2020</span>
          </div>
        </DropdownItem>
        <DropdownItem header className="dropdown_notification_header">
          Previously Seen
        </DropdownItem>
        <DropdownItem className="notification_dropdown_item">
          <div className="notification_brand_logo">
            <span>MKTFY</span>
          </div>
          <div className="notification_message">
            <span> Let's create your first offer!</span>
            <span style={{ fontSize: "12px" }}>September 05, 2020</span>
          </div>
        </DropdownItem>
        <DropdownItem className="notification_dropdown_item">
          <div className="notification_brand_logo">
            <span>MKTFY</span>
          </div>
          <div className="notification_message">
            <span> Our Terms of Service has been updated</span>
            <span style={{ fontSize: "12px" }}>September 03, 2020</span>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

// NAVBAR COLAPSE MENU

export const CollapseMenu = (props) => {
  const [store, dispatch] = useContext(AppContext);

  const getLetterForLogo = (props) => {
    return `${store.user.firstName}`.charAt(0);
  };
  const letterLogo = getLetterForLogo();
  //
  return (
    <Modal
      centered
      className="modal-fullscreen-md-down "
      isOpen={props.open}
      data-backdrop="false"
    >
      <ModalHeader
        close={
          <button
            className="close close_button position-absolute top-0"
            onClick={props.toggleNav}
          >
            ×
          </button>
        }
        className="collapseMenu_closeArea"
      ></ModalHeader>
      <ModalBody className="collapseMenu_body" onClick={props.toggleNav}>
        <section className="collapseMenu_header">
          <div className="name_logo">
            <div className="letter_logo">{letterLogo}</div>
          </div>
          <span>
            {store.user.firstName} {store.user.lastName}
          </span>
        </section>
        <div className="collapseMenu_linkHeader">Settings</div>
        <section className="collapseMenu_body">
          <Link className="collapseMenu_link" to="/home/account" tag={Link}>
            Account Information
          </Link>
          <Link
            className="collapseMenu_link"
            to="/home/changepassword"
            tag={Link}
          >
            Change Password
          </Link>
          <Link className="collapseMenu_link" to="/home/purchases" tag={Link}>
            My purchases
          </Link>
          <Link className="collapseMenu_link" to="/home/mylistings" tag={Link}>
            My Listings
          </Link>
          <Link
            className="collapseMenu_link"
            to="/home/changepassword"
            tag={Link}
          >
            Notifications
          </Link>

          <div className="collapseMenu_linkHeader">Help</div>
          <Link className="collapseMenu_link" to="/home/faq" tag={Link}>
            FAQ
          </Link>
          <Link className="collapseMenu_link" to="/#">
            Contact Us
          </Link>
          <Link
            className="collapseMenu_link collapseMenu_closeLink"
            to="/logout"
            tag={Link}
          >
            Sign Out
            <img src={exit_app} alt="/icon" id="exit_logo" />
          </Link>
        </section>
      </ModalBody>
    </Modal>
  );
};