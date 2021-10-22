import { useRef, useState } from "react";
import "./CreateListing.css";
import { Form, FormGroup, Modal, ModalHeader, ModalBody } from "reactstrap";
import Button from "../../reusableComponent/Button";
const UploadImgModal = (props) => {
  const [imageNames, setImageNames] = useState();
  const [maxImageError, setmaxImageError] = useState();
  const inputRef = useRef(null);
  let previewUrls = [];

  const downloadImageHandler = (event) => {
    let FileList = event.target.files;

    if (FileList.length > 5) {
      setmaxImageError(
        <p className="maxImage_error">
          You have exceeded maximum download limit (max 5 images){" "}
        </p>
      );
    } else {
      for (let i = 0; i < FileList.length; i++) {
        //   Get url's
        let url = URL.createObjectURL(FileList[i]);
        previewUrls.push(url);

        setmaxImageError();
      }
      let names = Array.from(FileList).map((file) => file.name);
      setImageNames(names);
      props.setUploadFile(FileList);
      props.setPreviewImages(previewUrls);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.toggle();
  };

  return (
    <Modal
      isOpen={props.modal}
      toggle={props.toggle}
      className="parent_modal"
      size="lg"
    >
      <ModalHeader toggle={props.toggle} className="uploadImg_header">
        Upload Photo(s)
      </ModalHeader>
      <ModalBody className="uploadImg_body">
        <Form onSubmit={submitHandler}>
          <FormGroup onClick={() => inputRef.current.click()}>
            <button
              className="chooseFiles_button"
              onClick={(e) => e.preventDefault()}
            >
              Choose Files
            </button>
            <span>No file Chosen</span>
            {maxImageError}
            {!imageNames && (
              <div className="uploadImg_container">
                <h2>Drop files here</h2>
              </div>
            )}
            <input
              multiple
              type="file"
              ref={inputRef}
              onChange={downloadImageHandler}
              style={{ display: "none" }}
            />

            {imageNames &&
              imageNames.map((val) => {
                return (
                  <div className="imgList" key={val + 1}>
                    <h5>File name:</h5>
                    <p>{val}</p>
                  </div>
                );
              })}
          </FormGroup>
          <Button className="uploadImg_button">Upload</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default UploadImgModal;
