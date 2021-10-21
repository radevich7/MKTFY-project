import { Row, Col, FormGroup } from "reactstrap";
import camera from "../../assets/camera.svg";
const PreviewContent = (props) => {
  console.log(props.previewImages);

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
      </Row>
      <Row>
        {props.previewImages.length >= 2 ? (
          <Col>
            <div className="reviewPhoto_secondary">
              <img src={props.previewImages[1]} alt="/" />
            </div>
          </Col>
        ) : (
          emptyContent
        )}
        {props.previewImages.length >= 3 ? (
          <Col>
            <div className="reviewPhoto_secondary">
              <img src={props.previewImages[2]} alt="/" />
            </div>
          </Col>
        ) : (
          emptyContent
        )}
        {props.previewImages.length >= 4 ? (
          <Col>
            <div className="reviewPhoto_secondary">
              <img src={props.previewImages[3]} alt="/" />
            </div>
          </Col>
        ) : (
          emptyContent
        )}
        {props.previewImages.length >= 5 ? (
          <Col>
            <div className="reviewPhoto_secondary">
              <img src={props.previewImages[4]} alt="/" />
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
