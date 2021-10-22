import { Row, Col, FormGroup } from "reactstrap";
import camera from "../../assets/camera.svg";
import closeCircle from "../../assets/closeCircle.svg";
const PreviewContent = (props) => {
  console.log(props.previewImages);
  // Remove Image

  const emptyContent = (
    <Col>
      <div className="addPhoto_secondary" onClick={props.toggle}>
        <img src={camera} alt="/" className="secondary_camera" />
      </div>
    </Col>
  );
  return (
    <FormGroup className="previewImg_container">
      <Row className="reviewPhoto_main">
        <img src={props.previewImages[0]} alt="/" />
        <span
          onClick={() => props.removeImage(0)}
          className="close_circle_main"
        >
          <img src={closeCircle} alt="/" />
        </span>
      </Row>

      <Row>
        {props.previewImages.length >= 2 ? (
          <Col>
            <div className="reviewPhoto_secondary">
              <img src={props.previewImages[1]} alt="/" />
              <span
                onClick={() => props.removeImage(1)}
                className="close_circle"
              >
                <img src={closeCircle} alt="/" />
              </span>
            </div>
          </Col>
        ) : (
          emptyContent
        )}
        {props.previewImages.length >= 3 ? (
          <Col>
            <div className="reviewPhoto_secondary">
              <img src={props.previewImages[2]} alt="/" />
              <span
                onClick={() => props.removeImage(2)}
                className="close_circle"
              >
                <img src={closeCircle} alt="/" />
              </span>
            </div>
          </Col>
        ) : (
          emptyContent
        )}
        {props.previewImages.length >= 4 ? (
          <Col>
            <div className="reviewPhoto_secondary">
              <img src={props.previewImages[3]} alt="/" />
              <span
                onClick={() => props.removeImage(3)}
                className="close_circle"
              >
                <img src={closeCircle} alt="/" />
              </span>
            </div>
          </Col>
        ) : (
          emptyContent
        )}
        {props.previewImages.length >= 5 ? (
          <Col>
            <div className="reviewPhoto_secondary">
              <img src={props.previewImages[4]} alt="/" />
              <span
                onClick={() => props.removeImage(4)}
                className="close_circle"
              >
                <img src={closeCircle} alt="/" />
              </span>
            </div>
          </Col>
        ) : (
          emptyContent
        )}
      </Row>
    </FormGroup>
  );
};

export default PreviewContent;
