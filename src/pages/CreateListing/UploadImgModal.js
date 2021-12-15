import { useRef, useState, useEffect } from "react";
import { Form, FormGroup, Modal, ModalHeader, ModalBody } from "reactstrap";
import { useDropzone } from "react-dropzone";
import Button from "../../reusableComponent/Button";
import "./CreateListing.css";

const UploadImgModal = (props) => {
  const [files, setFiles] = useState([]);
  const [maxImageError, setmaxImageError] = useState();
  const [nameFiles, setNameFiles] = useState();

  // SETTING THE DROPZONE FROM 'REACT-DROPZONE DEPENDENCY'
  const { getRootProps, getInputProps, acceptedFiles, open } = useDropzone({
    accept: "image/jpeg,image/png ",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  //SUM OF THE FILES
  let sum;
  !props.uploadFile
    ? (sum = 0)
    : (sum = props.uploadFile.length + acceptedFiles.length);

  //SETTING UI FOR THE MAX IMAGE
  useEffect(() => {
    if (acceptedFiles.length > 5 || sum > 5) {
      setmaxImageError(
        <p className="maxImage_error">
          You have exceeded maximum download limit (max 5 images)
        </p>
      );
    } else {
      setmaxImageError();
      setNameFiles(
        acceptedFiles.map((file) => (
          <li key={file.path} className="accepted_files">
            {file.path} - {file.size} bytes
          </li>
        ))
      );
    }
  }, [acceptedFiles]);

  //PASSING IMAGES TO THE CREATE LISTING PAGE
  const submitImageHandler = (e) => {
    let previewFiles = files.map((val) => val.preview);
    e.preventDefault();
    if (props.uploadFile) {
      props.setUploadFile((prev) => [...prev, ...files]);
      props.setPreviewImages((prev) => [...prev, ...previewFiles]);
    } else {
      props.setUploadFile(files);
      props.setPreviewImages(previewFiles);
    }
    setNameFiles();
    props.toggle();
  };
  const inputRef = useRef();

  return (
    <Modal
      isOpen={props.modal}
      toggle={props.toggle}
      className="parent_modal modal-lg modal-fullscreen-md-down"
    >
      <ModalHeader toggle={props.toggle} className="uploadImg_header">
        Upload Photo(s)
      </ModalHeader>
      <ModalBody className="uploadImg_body">
        <Form onSubmit={submitImageHandler}>
          <FormGroup>
            <span className="chooseFiles_button" {...getRootProps({})}>
              Choose Files
            </span>
            {!nameFiles && <span>No file Chosen</span>}
            {maxImageError}

            {!maxImageError && (
              <div
                className="uploadImg_container"
                {...getRootProps({})}
                ref={inputRef}
              >
                <h2>Drop files here</h2>
              </div>
            )}

            <input {...getInputProps()} />
            <ul> {nameFiles}</ul>
          </FormGroup>
          <Button
            className="uploadImg_button"
            disabled={sum > 5 ? true : false}
          >
            Upload
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default UploadImgModal;
