import { useState, useRef } from "react";
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
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import "./CreateListing.css";
import camera from "../../assets/camera.svg";
import UploadImgModal from "./UploadImgModal";
const CreateListing = () => {
  // State managment for toggling of the dropdown menus
  const [dropdownOpenCategories, setDropdownOpenCategories] = useState(false);
  const toggleCategories = () =>
    setDropdownOpenCategories((prevState) => !prevState);
  const [dropdownOpenCondition, setDropdownOpenCondition] = useState(false);
  const toggleCondition = () =>
    setDropdownOpenCondition((prevState) => !prevState);
  const [dropdownOpenCity, setDropdownOpenCity] = useState(false);
  const toggleCity = () => setDropdownOpenCity((prevState) => !prevState);

  const [uploadImgModal, setUploadImgModal] = useState(false);
  const toggleUploadImg = () => setUploadImgModal(!uploadImgModal);
  // State managment for uploading images
  const [uploadFile, setUploadFile] = useState(null);
  const [previewImages, setPreviewImages] = useState(null);
  console.log(previewImages.map((image, index) => image));
  return (
    <Container fluid className="createListing_container">
      <UploadImgModal
        toggle={toggleUploadImg}
        modal={uploadImgModal}
        setPreviewImages={setPreviewImages}
        setUploadFile={setUploadFile}
        uploadFile={uploadFile}
      />
      <Card className="border_document_createListing">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>
          <span className="arrow_path"> {">"} </span>
          <span>product listing</span>
        </div>
        <CardBody className="cardBody_createListing">
          <Form>
            <Row className="w-100">
              <Col lg="4">
                <Row className="h-100">
                  <Card className="p-0">
                    <CardBody className="product_images_createListing">
                      {/* For uploading img */}
                      {/* <FormGroup className="p-0">
                        <div className="reviewPhoto_main"></div>
                        <Row>
                          <Col>
                            <div className="reviewPhoto_secondary"></div>
                          </Col>
                          <Col>
                            <div className="reviewPhoto_secondary"></div>
                          </Col>
                          <Col>
                            <div className="reviewPhoto_secondary"></div>
                          </Col>
                          <Col>
                            <div className="reviewPhoto_secondary"></div>
                          </Col>
                        </Row>
                      </FormGroup> */}
                      {/* For adding img */}
                      <FormGroup className="p-0" onClick={toggleUploadImg}>
                        <div className="addPhoto_main">
                          <img src={camera} alt="/" className="main_camera" />
                          <p>Choose or drag up to 5 photos</p>
                        </div>
                        <Row>
                          <Col>
                            <div className="addPhoto_secondary">
                              <img
                                src={camera}
                                alt="/"
                                className="secondary_camera"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="addPhoto_secondary">
                              <img
                                src={camera}
                                alt="/"
                                className="secondary_camera"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="addPhoto_secondary">
                              <img
                                src={camera}
                                alt="/"
                                className="secondary_camera"
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="addPhoto_secondary">
                              <img
                                src={camera}
                                alt="/"
                                className="secondary_camera"
                              />
                            </div>
                          </Col>
                        </Row>
                      </FormGroup>
                    </CardBody>
                  </Card>
                </Row>
              </Col>

              <Col>
                <Row w={100}>
                  <FormGroup className="p-0">
                    <Card className="p-0">
                      <CardBody className="product_details_createListing">
                        <Row>
                          <Label for="productName">Product Name</Label>

                          <Input
                            type="text"
                            name="productName"
                            id="productName"
                            className="createListing_inputField"
                            placeholder="Enter product name"
                          />
                        </Row>
                        <Row>
                          <Label for="description">Description</Label>
                          <Input
                            type="textarea"
                            name="description"
                            id="description"
                            className="createListing_inputField description"
                            placeholder="Enter description"
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
                              <DropdownMenu className="condition_dropdownMenu">
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
                            <DropdownMenu className="city_dropdownMenu">
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
                        <Row>
                          <Button className="postListing_button">
                            Post your listing
                          </Button>
                          <Button className="cancel_button">Cancel</Button>
                        </Row>
                      </CardBody>
                    </Card>
                  </FormGroup>
                </Row>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CreateListing;
