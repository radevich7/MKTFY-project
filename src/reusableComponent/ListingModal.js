import { useHistory } from "react-router-dom";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { PUT } from "../api/api";
import Button from "../reusableComponent/Button";
import "./ListingModal.css";
const ListingModal = (props) => {
  const history = useHistory();
  const cancelHandler = (e) => {
    props.modalHandler();
  };
  const confirmHandler = (e) => {
    e.preventDefault();
    PUT(`/api/listing/${props.listingId}/deleted`).then((res) => {
      if (!res.failed) {
        history.push("/success/deleteListing");
      } else {
        alert("There has  neem a problem, please contact customer service");
      }
    });
  };

  return (
    <div>
      <Modal
        fullscreen="md"
        size="sm"
        style={{ maxHeight: "214px", maxWidth: "394px" }}
        toggle={props.modalHandler}
        isOpen={props.toggle}
        centered
      >
        <ModalBody style={{ padding: "0px 47px" }}>
          <h1 className="listingModal_header">Heads Up!</h1>
          <p className="p-0 listingModal_text">
            You are about to delete your listing. Are you sure?
          </p>
        </ModalBody>
        <ModalFooter
          style={{ padding: "0px 47px" }}
          className="pb-4 justify-content-between"
        >
          <Button
            className="listingModal_button cancel"
            onClick={cancelHandler}
          >
            Cancel
          </Button>
          <Button
            onClick={function noRefCheck() {}}
            className="listingModal_button confirm"
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ListingModal;
