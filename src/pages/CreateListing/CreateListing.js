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
import { POST } from "../../api/api";

const CreateListing = () => {
  const history = useHistory();

  const [uploadImgModal, setUploadImgModal] = useState(false);
  const toggleUploadImg = () => setUploadImgModal(!uploadImgModal);
  // State managment for uploading images
  const [uploadFile, setUploadFile] = useState(null);
  const [previewImages, setPreviewImages] = useState(null);
  console.log(uploadFile, previewImages);

  const removeImage = (index) => {
    let previewimageClone = [...previewImages];
    let uploadFileClone = [...uploadFile];

    let newImages = previewimageClone.filter((image, i) => i !== index);
    let newFiles = uploadFileClone.filter((image, i) => i !== index);
    setPreviewImages(newImages);
    setUploadFile(newFiles);
  };

  // VALIDATION OF THE FORM
  const [product, setProduct] = useState();
  const [details, setDetails] = useState();
  const [category, setCategory] = useState();
  const [categoryId, setCategoryId] = useState();
  const [condition, setCondition] = useState();
  const [price, setPrice] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [province, setProvince] = useState();
  const productHandler = (e) => {
    setProduct(e.target.value);
  };

  const detailsHandler = (e) => {
    setDetails(e.target.value);
  };

  const categoryHandler = (e) => {
    switch (e) {
      case "Cars & Vehicles":
        setCategory("Cars & Vehicles");
        setCategoryId(1);
        break;
      case "Furniture":
        setCategory("Furniture");
        setCategoryId(2);
        break;
      case "Electronics":
        setCategory("Electronics");
        setCategoryId(3);
        break;
      case "Real Estate":
        setCategory("Real Estate");
        setCategoryId(4);
        break;
      default:
        setCategory("Select a category");
        setCategoryId(0);
    }
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };
  const newListing = {
    product,
    details,
    categoryId,
    condition,
    price,
    // address,
    // province,
    region: city,
  };
  const submitFormHandler = (e) => {
    e.preventDefault();

    let fileData = new FormData();
    for (let i = 0; i < uploadFile.length; i++) {
      fileData.append("File[]", uploadFile[i]);
    }
    console.log(fileData);
    // POST('/api/Upload', fileData)
    // AXIOS CALL.post (url, fileData).then(res=>{})

    // Reset the form
    // e.target.reset();
    // setCategory();
    // setCondition();
    // setCity();
    // setProvince();
  };

  // options for the select input

  const categoryOptions = [
    "Cars & Vehicles",
    "Furniture",
    "Electronics",
    "Real Estate",
  ];
  const conditionOptions = ["New", "Used"];

  const cityOptions = ["Calgary", "Brooks", "Red Deer"];

  const provinceOptions = ["Alberta", "Manitoba", "Saskatchewan"];

  return (
    <Container fluid className="createListing_container">
      {/* MODAL */}
      <UploadImgModal
        toggle={toggleUploadImg}
        modal={uploadImgModal}
        setPreviewImages={setPreviewImages}
        setUploadFile={setUploadFile}
        uploadFile={uploadFile}
        previewImages={previewImages}
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
              {/* INPUT FIELDS */}
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
                            onBlur={productHandler}
                            required
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
                            onBlur={detailsHandler}
                            required
                          />
                        </Row>
                        {/* CATEGORIES DROPDOWN */}
                        <Row className="category">
                          <Label for="category">Category</Label>
                          <CustomSelect
                            options={categoryOptions}
                            onSetValue={categoryHandler}
                            value={category}
                          />
                        </Row>
                        {/* CONDITION DROPDOWN */}
                        <Row>
                          <Col lg="6" className="padding_rigth">
                            <Label for="condition">Condition</Label>
                            <CustomSelect
                              options={conditionOptions}
                              onSetValue={setCondition}
                              value={condition}
                            />
                          </Col>

                          <Col lg="6" className="padding_left">
                            <Label for="price">Price</Label>
                            <Input
                              type="number"
                              name="price"
                              id="price"
                              step="any"
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
                          <Col className="padding_rigth">
                            <Label for="category">City</Label>
                            <CustomSelect
                              options={cityOptions}
                              onSetValue={setCity}
                              value={city}
                            />
                          </Col>
                          {/* <Col lg="6" className="padding_left">
                            <Label for="province">Province</Label>
                            <CustomSelect
                              options={provinceOptions}
                              onSetValue={setProvince}
                              value={province}
                            />
                          </Col> */}
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
