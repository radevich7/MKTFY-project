import { useRef, useState, useEffect } from "react";
import "./CreateListing.css";
import { Form, FormGroup, Modal, ModalHeader, ModalBody } from "reactstrap";
import Button from "../../reusableComponent/Button";

import { useDropzone } from "react-dropzone";
const UploadImgModal = (props) => {
  const [files, setFiles] = useState([]);
  const [maxImageError, setmaxImageError] = useState();
  const [nameFiles, setNameFiles] = useState();
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

  let sum;
  !props.uploadFile
    ? (sum = 0)
    : (sum = props.uploadFile.length + acceptedFiles.length);

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

// import { useRef, useState } from "react";
// import "./CreateListing.css";
// import { Form, FormGroup, Modal, ModalHeader, ModalBody } from "reactstrap";
// import Button from "../../reusableComponent/Button";
// const UploadImgModal = (props) => {
//   const [imageNames, setImageNames] = useState();
//   const [maxImageError, setmaxImageError] = useState();
//   const inputRef = useRef(null);

//   const [previewUrls, setPreviewUrls] = useState();
//   const [blobList, setBlobList] = useState();

//   let preview = [];

//   const downloadImageHandler = (event) => {
//     let FileList = event.target.files;

//     let sum;
//     !props.uploadFile
//       ? (sum = 0)
//       : (sum = props.uploadFile.length + FileList.length);

//     console.log(sum);
//     if (FileList.length > 5 || sum > 5) {
//       setmaxImageError(
//         <p className="maxImage_error">
//           You have exceeded maximum download limit (max 5 images)
//         </p>
//       );
//     } else {
//       setPreviewUrls(props.previewImages);
//       setBlobList(props.uploadFile);
//       for (let i = 0; i < FileList.length; i++) {
//         //   Get url's
//         let url = URL.createObjectURL(FileList[i]);
//         preview.push(url);
//         setmaxImageError();
//       }
//       let names = Array.from(FileList).map((file) => file.name);
//       setImageNames(names);

//       if (blobList) {
//         setPreviewUrls((prev) => [...prev, ...preview]);
//         setBlobList((prev) => [...prev, ...FileList]);
//       } else {
//         setPreviewUrls(preview);
//         setBlobList(FileList);
//       }
//     }
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     props.setUploadFile(blobList);
//     props.setPreviewImages(previewUrls);
//     setmaxImageError();
//     setImageNames();
//     props.toggle();
//   };

//   return (
//     <Modal
//       isOpen={props.modal}
//       toggle={props.toggle}
//       className="parent_modal"
//       size="lg"
//     >
//       <ModalHeader toggle={props.toggle} className="uploadImg_header">
//         Upload Photo(s)
//       </ModalHeader>
//       <ModalBody className="uploadImg_body">
//         <Form onSubmit={submitHandler}>
//           <FormGroup onClick={() => inputRef.current.click()}>
//             <button
//               className="chooseFiles_button"
//               onClick={(e) => e.preventDefault()}
//             >
//               Choose Files
//             </button>
//             <span>No file Chosen</span>
//             {maxImageError}
//             {!maxImageError && (
//               <div className="uploadImg_container">
//                 <h2>Drop files here</h2>
//               </div>
//             )}
//             <input
//               multiple
//               type="file"
//               ref={inputRef}
//               onChange={downloadImageHandler}
//               style={{ display: "none" }}
//             />

//             {imageNames &&
//               imageNames.map((val) => {
//                 return (
//                   <div className="imgList" key={val + 1}>
//                     <h5>File name:</h5>
//                     <p>{val}</p>
//                   </div>
//                 );
//               })}
//           </FormGroup>
//           <Button className="uploadImg_button">Upload</Button>
//         </Form>
//       </ModalBody>
//     </Modal>
//   );
// };

// export default UploadImgModal;
