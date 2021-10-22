import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
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
  DropdownItem,
} from "reactstrap";
import "./CreateListing.css";
import camera from "../../assets/camera.svg";
import UploadImgModal from "./UploadImgModal";
import PreviewContent from "./PreviewContent";

import CustomSelect from "../../reusableComponent/CustomSelect";
const CreateListing = () => {
  const history = useHistory();

  // State managment for toggling of the dropdown menus
  const [dropdownOpenCategories, setDropdownOpenCategories] = useState(false);
  const toggleCategories = (e) => {
    setDropdownOpenCategories((prevState) => !prevState);
  };
  const [dropdownOpenCondition, setDropdownOpenCondition] = useState(false);
  const toggleCondition = () =>
    setDropdownOpenCondition((prevState) => !prevState);
  const [dropdownOpenCity, setDropdownOpenCity] = useState(false);
  const toggleCity = () => setDropdownOpenCity((prevState) => !prevState);
  const [dropdownOpenProvince, setDropdownOpenProvince] = useState(false);
  const toggleProvince = () =>
    setDropdownOpenProvince((prevState) => !prevState);

  const [uploadImgModal, setUploadImgModal] = useState(false);
  const toggleUploadImg = () => setUploadImgModal(!uploadImgModal);
  // State managment for uploading images
  const [uploadFile, setUploadFile] = useState(null);
  const [previewImages, setPreviewImages] = useState(null);
  // console.log(previewImages.map((image, index) => image));

  const removeImage = (index) => {
    let previewimageClone = [...previewImages];
    let uploadFileClone = [...uploadFile];

    let newImages = previewimageClone.filter((image, i) => i !== index);
    let newFiles = uploadFileClone.filter((image, i) => i !== index);
    setPreviewImages(newImages);
    setUploadFile(newFiles);
  };

  // VALIDATION OF THE FORM
  const [productName, setProductName] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [condition, setCondition] = useState();
  const [price, setPrice] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const productNameHandler = (e) => {
    setProductName(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const categoriesHandler = (e) => {
    setCategory(e.target.value);
  };
  const conditionHandler = (e) => {
    setCondition(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };
  const cityHandler = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
  };
  const provinceHandler = (e) => {
    setProvince(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const newListing = {
      productName,
      description,
      category,
      condition,
      price,
      address,
      province,
      city,
    };
    console.log(newListing);
    // let fileData = new FormData();
    // for (let i = 0; i < uploadFile.length; i++) {
    //   fileData.append("File[]", uploadFile[i]);
    // }
    // AXIOS CALL.post (url, fileData).then(res=>{})
  };

  return (
    <Container fluid className="createListing_container">
      {/* MODAL */}
      <UploadImgModal
        toggle={toggleUploadImg}
        modal={uploadImgModal}
        setPreviewImages={setPreviewImages}
        setUploadFile={setUploadFile}
        uploadFile={uploadFile}
      />
      {/* END MODAL */}
      <Card className="border_document_createListing">
        <div className="page_path">
          <Link to="/home" className="link_home">
            <span>home</span>
          </Link>
          <span className="arrow_path"> {">"} </span>
          <span>product listing</span>
        </div>
        <CardBody className="cardBody_createListing">
          <Form onSubmit={submitFormHandler}>
            <Row className="w-100">
              <Col lg="4">
                <Row className="h-100">
                  <Card className="p-0">
                    <CardBody className="product_images_createListing">
                      {uploadFile && previewImages.length > 0 ? (
                        // PREVIEW CONTENT
                        <PreviewContent
                          previewImages={previewImages}
                          toggle={toggleUploadImg}
                          removeImage={removeImage}
                        />
                      ) : (
                        // PREVIEW CONTENT
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
                      )}
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
                            onBlur={productNameHandler}
                          />
                        </Row>
                        <Row>
                          <Label for="description">Description</Label>
                          <Input
                            type="textarea"
                            name="description"
                            id="description"
                            className="createListing_inputField description"
                            placeholder="Enter description (max 250 characters)"
                            maxLength="250"
                            onBlur={descriptionHandler}
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
                              {!category ? "Select a category" : category}
                            </DropdownToggle>
                            <DropdownMenu className="categories_dropdownMenu">
                              <DropdownItem
                                onClick={categoriesHandler}
                                className="dropDownItem_createListing"
                                value="cars"
                              >
                                Cars & Vehicles
                              </DropdownItem>
                              <DropdownItem
                                onClick={categoriesHandler}
                                className="dropDownItem_createListing"
                                value="furniture"
                              >
                                Furniture
                              </DropdownItem>
                              <DropdownItem
                                onClick={categoriesHandler}
                                className="dropDownItem_createListing"
                              >
                                Electronics
                              </DropdownItem>
                              <DropdownItem
                                onClick={categoriesHandler}
                                className="dropDownItem_createListing"
                              >
                                Real State
                              </DropdownItem>
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
                              className="createListing_dropdown padddingText"
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
                                <DropdownItem
                                  onClick={conditionHandler}
                                  className="dropDownItem_createListing"
                                >
                                  Used
                                </DropdownItem>
                                <DropdownItem
                                  onClick={conditionHandler}
                                  className="dropDownItem_createListing"
                                >
                                  New
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </Col>

                          <Col lg="6" className="padding_left">
                            <Label for="price">Price</Label>
                            <Input
                              type="number"
                              name="price"
                              id="price"
                              className="createListing_inputField "
                              placeholder="Type the price"
                              onBlur={priceHandler}
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
                            onBlur={addressHandler}
                          />
                        </Row>
                        <Row>
                          <Col lg="6" className="padding_rigth">
                            <Label for="category">City</Label>
                            <Dropdown
                              isOpen={dropdownOpenCity}
                              toggle={toggleCity}
                              className="createListing_dropdown padddingText"
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
                                <DropdownItem
                                  onClick={cityHandler}
                                  className="dropDownItem_createListing"
                                >
                                  Calgary
                                </DropdownItem>
                                <DropdownItem
                                  onClick={cityHandler}
                                  className="dropDownItem_createListing"
                                >
                                  Brooks
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </Col>
                          <Col lg="6" className="padding_left">
                            <Label for="province">Province</Label>
                            <Dropdown
                              isOpen={dropdownOpenProvince}
                              toggle={toggleProvince}
                              className="createListing_dropdown padddingText"
                            >
                              <DropdownToggle
                                tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpenProvince}
                                className="createListing_dropdown_header"
                                caret
                              >
                                Select province
                              </DropdownToggle>
                              <DropdownMenu className="city_dropdownMenu">
                                <DropdownItem
                                  onClick={provinceHandler}
                                  className="dropDownItem_createListing"
                                >
                                  Alberta
                                </DropdownItem>
                                <DropdownItem
                                  onClick={provinceHandler}
                                  className="dropDownItem_createListing"
                                >
                                  Manitoba
                                </DropdownItem>
                              </DropdownMenu>
                            </Dropdown>
                          </Col>
                        </Row>
                        <Row>
                          {/* <FormGroup> */}
                          <Label for="exampleSelect">Select</Label>
                          <CustomSelect />
                        </Row>
                        <Row>
                          <Button className="postListing_button">
                            Post your listing
                          </Button>

                          <Button
                            className="cancel_button"
                            onClick={() => history.push("/home")}
                          >
                            Cancel
                          </Button>
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
