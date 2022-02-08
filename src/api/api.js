import axios from "axios";

// HEADER
const getHeader = (type) => {
  const authStr = `Bearer ${localStorage.getItem("Auth_token")}`;
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

// FAILED CASE
const failed = (res) => {
  let messages = [];
  //LOGOUT IF UNAUTHERIZED
  if (res.status === 401) {
    window.location.replace("/logout");
  }

  for (const message in res.data) {
    if (res.data[message].length > 0) {
      messages.push(`${res.data[message]}`);
    }
  }
  let uniquemessages = [...new Set(messages)];
  let data = { ...returnData };
  data.failed = true;
  data.code = res.status;
  data.message = uniquemessages.length > 0 ? uniquemessages : res.statusText;
  data.data = res.data;
  return data;
};

// SUCCESS CASE
const success = (res) => {
  let data = { ...returnData };
  data.failed = false;
  data.code = res.status;
  data.message = "";
  data.data = res.data;
  return data;
};

// POST REQUEST

export function POST(url, data) {
  let header = getHeader();
  let apiCall = axios
    .post(`/mktfy/${url}`, data, header)
    .then((res) => {
      return success(res);
    })
    .catch((res) => {
      return failed(res.response);
    });
  return apiCall;
}
// GET REQUEST

export function GET(url) {
  let header = getHeader();
  let apiCall = axios
    .get(`/mktfy/${url}`, header)
    .then((res) => {
      return success(res);
    })
    .catch((res) => {
      return failed(res.response);
    });
  return apiCall;
}

// PUT REQUEST

export function PUT(url, data) {
  let header = getHeader();
  let apiCall = axios
    .put(`/mktfy/${url}`, data, header)
    .then((res) => {
      return success(res);
    })
    .catch((res) => {
      return failed(res.response);
    });
  return apiCall;
}

// POSTFORMDATA REQUEST
export const POSTFORMDATA = (url, data) => {
  let header = getHeader("FORMDATA");
  let apiCall = axios
    .post(`/mktfy/${url}`, data, header)
    .then((res) => {
      return success(res);
    })
    .catch((res) => {
      return failed(res.response);
    });
  return apiCall;
};

// DELETE REQUEST
export const DELETE = (url, data) => {
  let header = getHeader();
  let apiCall = axios
    .delete(`/mktfy/${url}`, data, header)
    .then((res) => {
      return success(res);
    })
    .catch((res) => {
      return failed(res.response);
    });
  return apiCall;
};
// PATCH REQUEST
export const PATCH = (url, data) => {
  let header = getHeader();
  let apiCall = axios
    .patch(`/mktfy/${url}`, data, header)
    .then((res) => {
      return success(res);
    })
    .catch((res) => {
      return failed(res.response);
    });
  return apiCall;
};
