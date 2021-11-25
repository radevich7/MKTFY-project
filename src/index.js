import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import AppProvider from "./store/AppProvider";
ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
    responseType={"token"}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
