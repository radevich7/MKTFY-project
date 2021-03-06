import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../reusableComponent/Button";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./CreateListing.css";
import camera from "../../assets/camera.svg";
import UploadImgModal from "./UploadImgModal";
import PreviewContent from "./PreviewContent";
import CustomSelect from "../../reusableComponent/CustomSelect";
import { POSTFORMDATA, POST, PUT } from "../../api/api";
import ListingModal from "../../reusableComponent/ListingModal";

const CreateListing = (props) => {
  const history = useHistory();
  // Data only for the UpdateListing page
  let data = props.data;
  // Modal toggle
  const [uploadImgModal, setUploadImgModal] = useState(false);
  const toggleUploadImg = () => setUploadImgModal(!uploadImgModal);

  // State managment for uploading images
  const [uploadFile, setUploadFile] = useState(props.imagesId);
  const [previewImages, setPreviewImages] = useState(props.images);

  // Removing images on click
  const removeImage = (index) => {
    let previewimageClone = [...previewImages];
    let uploadFileClone = [...uploadFile];

    let newImages = previewimageClone.filter((image, i) => i !== index);
    let newFiles = uploadFileClone.filter((image, i) => i !== index);
    setPreviewImages(newImages);
    setUploadFile(newFiles);
  };

  // VALIDATION OF THE FORM
  const [product, setProduct] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [categoryError, setCategoryError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [conditionError, setConditionError] = useState(false);
  // Setting initial data for the UpdateListing page
  useEffect(() => {
    if (data) {
      setProduct(data.product);
      setDetails(data.details);
      setCategoryId(data.categoryId);
      // Initializ category based on the number
      setCategory(categoryName(data.categoryId));
      setCondition(data.condition);
      setPrice(data.price);
      setAddress(data.address);
      setCity(data.region);
    }
  }, [data]);
  //  Get category from categoryOptions array
  const categoryName = (id) => {
    return categoryOptions
      .filter((category) => category.id === 1)
      .map((val) => val.category);
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

  const newListing = {
    product,
    details,
    categoryId,
    condition,
    price,
    address,
    region: city,
  };

  //  POST NEW LISTING BUTTON HANDLER
  const submitFormHandler = (e) => {
    e.preventDefault();
    // CUSTOM SELECT VALIDATION
    if (!newListing.categoryId) {
      return setCategoryError(true);
    } else {
      setCategoryError(false);
    }
    if (!newListing.condition) {
      return setConditionError(true);
    } else {
      setConditionError(false);
    }
    if (!newListing.region) {
      return setCityError(true);
    } else {
      setCityError(false);
    }

    if (!uploadFile) {
      return alert("Please add an image to a page (min 1)");
    }

    let finalData;
    let formData = new FormData();
    for (let i = 0; i < uploadFile.length; i++) {
      formData.append("File[]", uploadFile[i]);
    }
    console.log([...formData]); // Think 2D array makes it more readable
    let uploadedImages = [];
    POSTFORMDATA("/api/Upload", formData).then((res) => {
      if (res.failed === false) {
        uploadedImages = res.data;

        finalData = {
          ...newListing,
          uploadIds: uploadedImages.flatMap((val) => Object.values(val)),
        };
        console.log(finalData);
        POST("/api/Listing", data).then((res) => console.log(res));
      } else {
        alert(
          "Unfortunately, the offer can not be posted at this time, please try again later"
        );
      }
    });

    // Reset the form
    e.target.reset();
    setCategory();
    setCondition();
    setCity();
    setUploadFile(null);
    setPreviewImages(null);
    history.push("/success/createOffer");
  };

  // options for the select input

  const categoryOptions = [
    { id: 1, category: "Cars & Vehicles" },
    { id: 2, category: "Furniture" },
    { id: 3, category: "Electronics" },
    { id: 4, category: "Real Estate" },
  ];
  const conditionOptions = ["New", "Used"];

  const cityOptions = ["Calgary", "Brooks", "Red Deer"];

  // SAVE CHANGES BUTTON HANDLER
  const saveChangesHanler = (e) => {
    e.preventDefault();

    let newFiles = uploadFile.filter((val) => val.path);
    let oldFiles = uploadFile.filter((val) => typeof val === "string");
    let formData = new FormData();
    for (let i = 0; i < newFiles.length; i++) {
      formData.append("File[]", newFiles[i]);
    }
    // console.log([...formData]); // Think 2D array makes it more readable
    let uploadedImages = [];
    POSTFORMDATA("/api/Upload", formData).then((res) => {
      if (res.failed === false) {
        uploadedImages = res.data;

        let data = {
          ...newListing,
          uploadIds: [
            ...oldFiles,
            ...uploadedImages.flatMap((val) => Object.values(val)),
          ],
          id: props.listingId,
        };
        console.log(data);

        const isEmptyValues = Object.values(data).every((el) => el);
        // Checking for empty fields
        if (!isEmptyValues) {
          return alert("Please fill out all input fields");
        }
        if (data.uploadIds) {
          PUT(`/api/listing/${props.listingId}`, data).then((res) => {
            if (!res.failed) {
              history.push("/success/updateOffer");
            } else {
              alert("There is a problem associated with updating your offer");
              history.push("/home");
            }
          });
        } else alert("Please add minimum of 1 image to the listing!");
      } else {
        // Handle error
        alert("Cannot download new images");
      }
    });
  };

  // SOLD LISTING BUTTON HANDLER

  const soldListingHandler = (e) => {
    e.preventDefault();
    PUT(`/api/listing/${props.listingId}/sold`).then((res) => {
      if (!res.failed) {
        history.push("/success/soldListing");
      } else {
        alert("There has  neem a problem, please contact customer service");
      }
    });
  };
  // DELETE LISTING BUTTON HANDLER
  const [toggle, setToggle] = useState(false);
  const openModalHandler = (e) => {
    e.preventDefault();
    setToggle(!toggle);
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
          <Form onSubmit={submitFormHandler} className="needs-validation">
            <Row>
              <Col className="col-12 col-xxl-4 col-lg-5">
                <Row className="h-100 ">
                  <Card className="p-0">
                    <CardBody
                      className="product_images_createListing"
                      style={{ pointerEvents: props.pending ? "none" : "" }}
                    >
                      {uploadFile && previewImages.length > 0 ? (
                        // PREVIEW CONTENT
                        <PreviewContent
                          previewImages={previewImages}
                          toggle={toggleUploadImg}
                          removeImage={removeImage}
                        />
                      ) : (
                        // PREVIEW CONTENT
                        <div className="p-0" onClick={toggleUploadImg}>
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
                        </div>
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
                      <CardBody className="product_details_createListing ">
                        {props.updateButtons && (
                          <div>
                            <p className="update_requirment ">
                              All the input fields has to be filled*
                              <br />
                              Otherwise we would use your previous data
                            </p>
                          </div>
                        )}
                        <Row className="position-relative">
                          <Label for="productName">
                            Product Name {props.updateButtons ? "*" : ""}
                          </Label>

                          <Input
                            type="text"
                            defaultValue={product}
                            name="productName"
                            id="productName"
                            className="createListing_inputField"
                            placeholder="Enter product name (max 25 characters)"
                            onChange={(e) => setProduct(e.target.value)}
                            maxLength="25"
                            disabled={props.pending}
                            required
                          />
                        </Row>

                        <Row>
                          <Label for="details">
                            Description {props.updateButtons ? "*" : ""}
                          </Label>
                          <Input
                            type="textarea"
                            defaultValue={details}
                            name="details"
                            id="details"
                            className="createListing_inputField description"
                            placeholder="Enter description"
                            maxLength="250"
                            onChange={(e) => setDetails(e.target.value)}
                            disabled={props.pending}
                            required
                          />
                        </Row>
                        {/* CATEGORIES DROPDOWN */}
                        <Row className="category">
                          <Label for="category">
                            Category {props.updateButtons ? "*" : ""}
                          </Label>
                          <CustomSelect
                            options={categoryOptions.map(
                              ({ category }) => category
                            )}
                            onSetValue={categoryHandler}
                            value={category}
                            disabled={props.pending}
                          />
                          {categoryError && (
                            <p className="inputError">Please choose category</p>
                          )}
                        </Row>
                        {/* CONDITION DROPDOWN */}
                        <Row>
                          <Col lg="6" className="padding_rigth">
                            <Label for="condition">
                              Condition {props.updateButtons ? "*" : ""}
                            </Label>
                            <CustomSelect
                              options={conditionOptions}
                              onSetValue={setCondition}
                              value={condition}
                              disabled={props.pending}
                            />
                            {conditionError && (
                              <p className="inputError">
                                Please choose condition of the listing
                              </p>
                            )}
                          </Col>

                          <Col lg="6" className="padding_left">
                            <Label for="price">
                              Price {props.updateButtons ? "*" : ""}
                            </Label>
                            <Input
                              type="number"
                              name="price"
                              min={0}
                              defaultValue={price}
                              id="price"
                              step="any"
                              className="createListing_inputField "
                              placeholder="Type the price"
                              onChange={(e) => setPrice(e.target.value)}
                              disabled={props.pending}
                              required
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Label for="address">
                            Address {props.updateButtons ? "*" : ""}
                          </Label>

                          <Input
                            type="text"
                            name="address"
                            defaultValue={address}
                            id="address"
                            className="createListing_inputField"
                            placeholder="Enter address for pick up"
                            onChange={(e) => setAddress(e.target.value)}
                            disabled={props.pending}
                            required
                          />
                        </Row>
                        <Row>
                          <Col className="padding_rigth">
                            <Label for="category">
                              City {props.updateButtons ? "*" : ""}
                            </Label>
                            <CustomSelect
                              options={cityOptions}
                              onSetValue={setCity}
                              value={city}
                              disabled={props.pending}
                            />
                            {cityError && (
                              <p className="inputError">Please choose city</p>
                            )}
                          </Col>
                        </Row>
                        {/* Based on the props, the buttons will be change either to create listing page or to update listing page */}
                        <Row>
                          {props.updateButtons && (
                            <Button
                              className="save_button listing_button"
                              onClick={saveChangesHanler}
                              children={"Save changes"}
                              disabled={props.pending}
                            />
                          )}
                          {!props.updateButtons && (
                            <Button
                              className="postListing_button listing_button"
                              children={" Post your listing"}
                            />
                          )}
                          {props.updateButtons && !props.listed && (
                            <Button
                              className="postListing_button listing_button"
                              onClick={soldListingHandler}
                              children={"Confirm sold"}
                            />
                          )}

                          {!props.updateButtons && (
                            <Button
                              className="cancel_button listing_button"
                              onClick={() => history.push("/home")}
                              children={"Cancel"}
                            />
                          )}
                          {props.updateButtons && !props.pending && (
                            <>
                              <Button
                                className="cancel_button listing_button"
                                onClick={openModalHandler}
                                children={"Delete listing"}
                              />
                              <ListingModal
                                toggle={toggle}
                                modalHandler={openModalHandler}
                                listingId={props.listingId}
                                delete={true}
                              />
                            </>
                          )}
                          {props.pending && (
                            <>
                              <Button
                                className="cancel_button listing_button"
                                onClick={openModalHandler}
                                children={"Cancel Sale"}
                              />
                              <ListingModal
                                toggle={toggle}
                                modalHandler={openModalHandler}
                                listingId={props.listingId}
                                cancelSale={true}
                              />
                            </>
                          )}

                          {/* MODAL FOR CONFIRMATION OF DELETE LISTING */}
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
