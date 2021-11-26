import { useHistory, useParams } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { useEffect } from "react";
import "./Spinner.css";

export const ConfirmSpinner = () => {
  const history = useHistory();
  const id = useParams();
  const text = id ? "ORDER PLACED" : "";
  useEffect(() => {
    setTimeout(() => {
      history.goBack();
    }, 3000);
  }, []);
  return (
    <>
      <div className="body_spinner">
        <div className="lds-custom">
          <h5 className="spinner_text">{text}</h5>
        </div>
        <div className="done_icon">
          <MdDone />
        </div>
      </div>
    </>
  );
};

export const LoadingSpinner = () => {
  return <div className="lds-dual-ring"></div>;
};
