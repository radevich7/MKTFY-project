import { useState } from "react";
import Button from "../../reusableComponent/Button";
import { Link } from "react-router-dom";
import {
  Container,
  Dropdown,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./CreateListing.css";

const CreateListing = () => {
  const [dropdownOpenCategories, setDropdownOpenCategories] = useState(false);
  const toggleCategories = () =>
    setDropdownOpenCategories((prevState) => !prevState);
  const [dropdownOpenCondition, setDropdownOpenCondition] = useState(false);
  const toggleCondition = () =>
    setDropdownOpenCondition((prevState) => !prevState);
  const [dropdownOpenCity, setDropdownOpenCity] = useState(false);
  const toggleCity = () => setDropdownOpenCity((prevState) => !prevState);

  return (
    <Container fluid className="createListing_container">
      <Card className="border_document_createListing">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>
          <span className="arrow_path"> {">"} </span>
          <span>product listing</span>
        </div>
        <CardBody className="cardBody_createListing">
          <Row className="w-100" className="border">
            {/* First column -carousel*/}
            <Col lg="4">
              <Row>
                {" "}
                <Card className="product_images_createListing">
                  <CardBody>sad</CardBody>
                </Card>
              </Row>
            </Col>

            <Col className="">
              <Row>
                {" "}
                <Card className="product_details_createListing">
                  <CardBody>
                    <Form>
                      <FormGroup>
                        <Row>
                          <Label for="productName">Product Name</Label>

                          <Input
                            type="text"
                            name="productName"
                            id="productName"
                            className="createListing_inputField"
                          />
                        </Row>
                        <Row>
                          <Label for="description">Description</Label>
                          <Input
                            type="textarea"
                            name="description"
                            id="description"
                            className="createListing_inputField description"
                          />
                        </Row>
                        {/* CATEGORIES DROPDOWN */}
                        <Row>
                          <Label for="category">Category</Label>
                          <Dropdown
                            isOpen={dropdownOpenCategories}
                            toggle={toggleCategories}
                            className="createListing_dropdown category"
                          >
                            <DropdownToggle
                              tag="span"
                              data-toggle="dropdown"
                              aria-expanded={dropdownOpenCategories}
                              className="createListing_dropdown_header"
                              caret
                            >
                              Select a category
                            </DropdownToggle>
                            <DropdownMenu className="categories_dropdownMenu">
                              <div
                                onClick={toggleCategories}
                                className="dropDownItem_createListing"
                              >
                                Cars & Vehicles
                              </div>
                              <div
                                onClick={toggleCategories}
                                className="dropDownItem_createListing"
                              >
                                Furniture
                              </div>
                              <div
                                onClick={toggleCategories}
                                className="dropDownItem_createListing"
                              >
                                Electronics
                              </div>
                              <div
                                onClick={toggleCategories}
                                className="dropDownItem_createListing"
                              >
                                Real State
                              </div>
                            </DropdownMenu>
                          </Dropdown>
                        </Row>
                        {/* CONDITION DROPDOWN */}
                        <Row>
                          <Col lg="6" className="padding_rigth">
                            <Label for="condition">Condition</Label>
                            <Dropdown
                              isOpen={dropdownOpenCondition}
                              toggle={toggleCondition}
                              className="createListing_dropdown condition"
                            >
                              <DropdownToggle
                                tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpenCondition}
                                className="createListing_dropdown_header"
                                caret
                              >
                                Select condition
                              </DropdownToggle>
                              <DropdownMenu className="categories_dropdownMenu">
                                <div
                                  onClick={toggleCondition}
                                  className="dropDownItem_createListing"
                                >
                                  Used
                                </div>
                                <div
                                  onClick={toggleCondition}
                                  className="dropDownItem_createListing"
                                >
                                  New
                                </div>
                              </DropdownMenu>
                            </Dropdown>
                          </Col>

                          <Col lg="6" className=" padding_left">
                            <Label for="price">Price</Label>
                            <Input
                              type="number"
                              name="price"
                              id="price"
                              className="createListing_inputField "
                              placeholder="Type the price"
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Label for="address">Address</Label>

                          <Input
                            type="text"
                            name="address"
                            id="address"
                            className="createListing_inputField"
                            placeholder="Enter address for pick up"
                          />
                        </Row>
                        <Row>
                          <Label for="category">City</Label>
                          <Dropdown
                            isOpen={dropdownOpenCity}
                            toggle={toggleCity}
                            className="createListing_dropdown category"
                          >
                            <DropdownToggle
                              tag="span"
                              data-toggle="dropdown"
                              aria-expanded={dropdownOpenCity}
                              className="createListing_dropdown_header"
                              caret
                            >
                              Select city
                            </DropdownToggle>
                            <DropdownMenu className="categories_dropdownMenu">
                              <div
                                onClick={toggleCity}
                                className="dropDownItem_createListing"
                              >
                                Cars & Vehicles
                              </div>
                              <div
                                onClick={toggleCity}
                                className="dropDownItem_createListing"
                              >
                                Furniture
                              </div>
                            </DropdownMenu>
                          </Dropdown>
                        </Row>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CreateListing;
