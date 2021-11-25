import "./Spinner.css";
import { MdDone } from "react-icons/md";
export const ConfirmSpinner = (props) => {
  return (
    <>
      <div className="body_spinner">
        <div className="lds-custom">
          <h5 className="spinner_text">{props.children}</h5>
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
