<<<<<<< HEAD
import "./Spinner.css";
import { MdDone } from "react-icons/md";
const Spinner = (props) => {
  return (
    <>
      <div className="body_spinner">
        <div className="lds-dual-ring">
          <h5 className="spinner_text">{props.children}</h5>
        </div>
        <div className="done_icon">
          <MdDone />
        </div>
      </div>
    </>
  );
=======
export const LoadingSpinner = () => {
  return <div className="lds-dual-ring"></div>;
>>>>>>> feature/ApiConnect
};
