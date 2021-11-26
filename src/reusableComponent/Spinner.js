import { useHistory, useParams } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { useContext, useEffect } from "react";
import auth0js from "auth0-js";
import "./Spinner.css";
import AppContext from "../store/app-context";

export const ConfirmSpinner = () => {
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
    case "reset":
      text = "CHECK YOUR EMAIL FOR INSTRUCTIONS";
      webAuth.changePassword(
        {
          connection: process.env.REACT_APP_AUTH0_CONNECTION,
          email: store.user.email,
        },
        (err, resp) => {}
      );

      break;
  }
  useEffect(() => {
    setTimeout(() => {
      history.push("/home");
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
