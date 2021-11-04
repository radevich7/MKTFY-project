import { useState } from "react";
import {
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Input,
  DropdownItem,
  Form,
} from "reactstrap";

import search_icon from "../../assets/img/search_icon.svg";
import blackCaretDown from "../../assets/img/blackCaretDown.svg";

export const SearchInput = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Row className="searchInput_container ">
      {/* BUTTON ALL */}
      <Col sm="2" className="smth">
        <span className="output_categories_span">All</span>
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
      <Col sm="2">
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="">
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
  );
};

// PROFILE INFO  ELEMENT
