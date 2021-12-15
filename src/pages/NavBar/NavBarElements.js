import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AppContext from "../../store/app-context";
import { Link } from "react-router-dom";
import { GET } from "../../api/api";
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
  InputGroup,
} from "reactstrap";
// ICONS
import gold_caret from "../../assets/img/gold_caret.svg";
import exit_app from "../../assets/img/exit_to_app-24px.svg";
import notification_bell from "../../assets/img/notification_bell_main.svg";
import { IoMdSearch } from "react-icons/io";
import blackCaretDown from "../../assets/img/blackCaretDown.svg";
import icon_car from "../../assets/icon_car.svg";
import icon_computer from "../../assets/icon_computer.svg";
import icon_deals from "../../assets/icon_deals.svg";
import icon_furniture from "../../assets/icon_furniture.svg";
import icon_realestate from "../../assets/icon_realestate.svg";
import hambuger_icon_categories from "../../assets/hambuger_icon_categories.svg";

// SEARCH FIELD
export const SearchInput = (props) => {
  const [store, dispatch] = useContext(AppContext);

  const history = useHistory();

  const [searchInputValue, setSearchInputValue] = useState();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const submitSearchHandler = (e) => {
    e.preventDefault();
    GET(
      `/api/listing/search?searchTerm=${searchInputValue}&region=${props.city}`
    ).then((res) => {
      if (!res.failed) {
        if (res.data.length > 0) {
          dispatch({ type: "SET_SEARCH_LISTINGS", searchListings: res.data });
        } else {
          dispatch({ type: "SET_SEARCH_LISTINGS", searchListings: null });
        }

        setSearchInputValue("");
        e.target[0].value = "";

        // Pushing to the content page and setting the state to search
        history.push("/content/", { state: "search" });
      } else {
        alert("Something went wrong, please try again later");
      }
    });
  };

  return (
    <Row className="searchInput_container g-0">
      {/* BUTTON ALL */}
      <Col className="smth col-2 col-md-2">
        <NavbarToggler
          onClick={props.toggleNav}
          aria-controls="main-nav"
          aria-label="Toggle navigation"
          className="d-xl d-xl-none p-0"
        />
        <span className="output_categories_span d-none d-xl-flex">
          {props.category}
        </span>
      </Col>
      {/* SEARCH INPUT */}
      <Col className="border-custom">
        <Form onSubmit={submitSearchHandler}>
          <InputGroup>
            <Input
              type="search"
              id="exampleSearch"
              placeholder="Search on MKTFY"
              className="search_input"
              onChange={(e) => setSearchInputValue(e.target.value)}
              defaultValue={searchInputValue}
              required
            />

            <button className="search_icon">
              <IoMdSearch style={{ cursor: "pointer" }} />
            </button>
          </InputGroup>
        </Form>
      </Col>
      {/* DROPDOWN CITY */}
      <Col className="col-2 d-flex flex-column city_toggle">
        <Dropdown
          isOpen={dropdownOpen}
          toggle={toggle}
          className="searchCity_container"
        >
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={dropdownOpen}
            className="dropDownToggle_search_card d-flex justify-content-center "
            width="100%"
          >
            <img src={blackCaretDown} alt="/" className="caretDown ps-3" />

            <h3>{props.city}</h3>
          </DropdownToggle>
          <DropdownMenu className="dropDownCustom_search_card arrow_city_search">
            <InputGroup className="dropDown_search_input2">
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Search City"
                className="searchInput_city"
              />
              <span className="dropdownSearch_icon">
                <IoMdSearch style={{ cursor: "pointer" }} />
              </span>
            </InputGroup>
            <DropdownItem
              className="dropDownItem"
              onClick={(e) => props.setCity("Brooks")}
            >
              Brooks
            </DropdownItem>
            <DropdownItem
              className="dropDownItem"
              onClick={(e) => props.setCity("Camrose")}
            >
              Camrose
            </DropdownItem>
            <DropdownItem
              className="dropDownItem"
              onClick={(e) => props.setCity("Calgary")}
            >
              Calgary
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    </Row>
  );
};

// CATEGORIES  ELEMENT

export const Categories = (props) => {
  const [store, dispatch] = useContext(AppContext);
  const history = useHistory();

  const saveChanges = (category) => {
    GET(`/api/listing/category/${category}?region=${props.city}`).then(
      (res) => {
        if (!res.failed) {
          if (res.data.length > 0) {
            dispatch({ type: "SET_SEARCH_LISTINGS", searchListings: res.data });
          } else {
            dispatch({ type: "SET_SEARCH_LISTINGS", searchListings: null });
          }
          // Pushing to the content page and setting the state to search
          history.push("/content", { state: "search" });
        } else {
          alert("Something went wrong, please try again later");
        }
      }
    );
  };

  return (
    <Col className="categories_column ">
      <div className="wrap_content scrool_effect">
        <span className="d-flex d-md-none browseCategories_text">
          Browse Categories
        </span>
        <span className="category_header d-none d-md-flex nav-link">
          <img
            src={hambuger_icon_categories}
            className="d-none d-md-flex pe-3"
            alt="/"
          />
          Categories
        </span>
        <span
          className="nav-link"
          onClick={(e) => {
            saveChanges("deals");
            props.setCategory("All");
          }}
        >
          <img src={icon_deals} className="d-md-none d-flex" alt="/" />
          Deals
        </span>
        <span
          className="nav-link"
          onClick={(e) => {
            saveChanges(1);
            props.setCategory("Cars & Vehicles");
          }}
        >
          <img src={icon_car} alt="/" className="d-md-none d-flex" />
          Cars & Vehicles
        </span>
        <span
          className="nav-link"
          onClick={(e) => {
            saveChanges(2);
            props.setCategory("Furniture");
          }}
        >
          {" "}
          <img src={icon_furniture} alt="/" className="d-md-none d-flex" />
          Furniture
        </span>
        <span
          className="nav-link"
          onClick={(e) => {
            saveChanges(3);
            props.setCategory("Electronics");
          }}
        >
          <img src={icon_computer} alt="/" className="d-md-none d-flex" />
          Electronics
        </span>
        <span
          className="nav-link"
          onClick={(e) => {
            saveChanges(4);
            props.setCategory("Real Estate");
          }}
        >
          <img src={icon_realestate} alt="/" className="d-md-none d-flex" />
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
            to="/success/reset"
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
          <DropdownItem
            className="dropDownItem_profile"
            to="/contact"
            tag={Link}
          >
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
          <Link className="collapseMenu_link" to="/home/account">
            Account Information
          </Link>
          <Link className="collapseMenu_link" to="/success/reset">
            Change Password
          </Link>
          <Link className="collapseMenu_link" to="/home/purchases">
            My purchases
          </Link>
          <Link className="collapseMenu_link" to="/home/mylistings">
            My Listings
          </Link>
          <Link className="collapseMenu_link" to="/#">
            Notifications
          </Link>

          <div className="collapseMenu_linkHeader">Help</div>
          <Link className="collapseMenu_link" to="/home/faq">
            FAQ
          </Link>
          <Link className="collapseMenu_link" to="/contact">
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
