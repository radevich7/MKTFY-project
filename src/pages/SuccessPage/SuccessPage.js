import AppContext from "../../store/app-context";
import { useHistory, useParams } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { useContext, useEffect } from "react";
import auth0js from "auth0-js";
import "./SuccessPage.css";

const SuccessPage = () => {
  const [store, dispatch] = useContext(AppContext);
  const history = useHistory();
  const type = history.location.pathname.split("/").slice(-1).join("");
  let text;

  const webAuth = new auth0js.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  });

  switch (type) {
    case "order":
      text = "ORDER PLACED";
      break;
    case "createOffer":
      text = "OFFER CREATED";
      break;
    case "accountcreated":
      text = "ACCOUNT CREATED";
      break;
    case "error":
      text = "Please contact customer support";
      break;
    case "soldListing":
      text = "OFFER SOLD";
      break;
    case "cancelOrder":
      text = "ORDER CANCELED";
      break;
    case "deleteListing":
      text = "OFFER DELETED";
      break;
    case "updateOffer":
      text = "OFFER UPDATED";
      break;
    case "reset":
      text = "CHECK YOUR EMAIL FOR INSTRUCTIONS";
      if (store.authenticated) {
        webAuth.changePassword(
          {
            connection: process.env.REACT_APP_AUTH0_CONNECTION,
            email: store.user.email,
          },
          (err, resp) => {}
        );
      }

      break;
  }
  // useEffect(() => {
  //   let mounter = true;
  //   setTimeout(() => {
  //     if (store.authenticated) {
  //       history.push("/home");
  //     } else {
  //       history.push("/");
  //     }
  //     return () => {
  //       mounter = false;
  //     };
  //   }, 3000);
  // }, []);
  return (
    <>
      <div className="body_spinner position-relative">
        <div className="lds-custom">
          <h5 className="spinner_text">{text}</h5>
        </div>
        <div className="done_icon position-absolute top-50 start-50 translate-middle">
          <MdDone />
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
