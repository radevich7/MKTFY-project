import "./Spinner.css";
const ConfirmSpinner = () => {
  return (
    <>
      <div className="body_spinner">
        <div className="spinner">
          <div></div>
          <div></div>
        </div>
      </div>
      ;
    </>
  );
};

export default ConfirmSpinner;

export const LoadingSpinner = () => {
  return <div className="lds-dual-ring"></div>;
};
