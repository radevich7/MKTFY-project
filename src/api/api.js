import axios from "axios";
const URL = "http://mktfy-env.eba-6nx34qxt.ca-central-1.elasticbeanstalk.com";

const authStr = `Bearer ${localStorage.getItem("Auth_token")}`;

const getHeader = (type) => {
  if (type == "FORMDATA") {
    return {
      headers: {
        Accept: "*/*",
        "Content-Type": "multipart/form-data",
        Authorization: authStr,
      },
    };
  } else {
    return {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        Authorization: authStr,
      },
    };
  }
};
// returned data
let returnData = {
  failed: false,
  message: "",
  code: null,
  data: {},
};

const failed = (res) => {
  let messages = [];
  //LOGOUT IF UNAUTHERIZED
  if (res.status === 401) {
    // POS('/Accoutn/Refreshtoken',{refreshtoken: localstorage.get('refreshtoken')}).then(res => localstorage.setItem('Auth_token', res.data.authenitcationToken)).catch(error => window.location.replace("/logout"); )
    // window.location.replace("/logout");
    console.log("UNATHORIZED");
  }
  for (const message in res.data) {
    if (res.data[message].length > 0) {
      messages.push(`${res.data[message]}`);
    }
  }
  let uniquemessages = [...new Set(messages)];
  returnData.failed = true;
  returnData.code = res.status;
  returnData.message = uniquemessages;
  returnData.data = res.data;
  return returnData;
};

const success = (res) => {
  let data = { ...returnData };
  data.failed = false;
  data.code = res.status;
  data.message = "";
  data.data = res.data;
  return data;
};

export function POST(url, data) {
  let header = getHeader();
  let apiCall = axios
    .post(`${process.env.REACT_APP_API_URL}${url}`, data, header)
    .then((res) => {
      return success(res);
    })
    .catch((res) => {
      return failed(res.response);
    });
  return apiCall;
}
export default POST;

export function GET(url) {
  let header = getHeader();
  let apiCall = axios
    .get(`${process.env.REACT_APP_API_URL}${url}`, header)
    .then((res) => {
      return console.log(res);
    })
    .catch((res) => {
      return failed(res.response);
    });
  return apiCall;
}
