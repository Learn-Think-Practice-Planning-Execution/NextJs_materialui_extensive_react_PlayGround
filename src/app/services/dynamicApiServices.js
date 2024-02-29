// import { selectedBankObject } from './globalApi';

// dynamic header Clientid in headers
// const { gbleUrlPythonAuth, selectedDomainBank } = selectedBankObject;
const miltiTendencyHeader = {
  Clientid: 'selectedDomainBank'
};
const statusMessages = {
  200: 'OK',
  201: 'Created',
  202: 'Accepted',
  203: 'Non-Authoritative Information',
  204: 'No Content',
  205: 'Reset Content',
  206: 'Partial Content',
  207: 'Multi-Status (WebDAV)',
  208: 'Already Reported (WebDAV)',
  226: 'IM Used',
  300: 'Multiple Choices',
  301: 'Moved Permanently',
  302: 'Found',
  303: 'See Other',
  304: 'Not Modified',
  305: 'Use Proxy',
  306: '(Unused)',
  307: 'Temporary Redirect',
  308: 'Permanent Redirect (experimental)',
  400: 'Bad Request',
  401: 'Unauthorized',
  402: 'Payment Required',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Request Entity Too Large',
  414: 'Request-URI Too Long',
  415: 'Unsupported Media Type',
  416: 'Requested Range Not Satisfiable',
  417: 'Expectation Failed',
  418: 'I am a teapot (RFC 2324)',
  420: 'Enhance Your Calm (Twitter)',
  422: 'Unprocessable Entity (WebDAV)',
  423: 'Locked (WebDAV)',
  424: 'Failed Dependency (WebDAV)',
  425: 'Reserved for WebDAV',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  444: 'No Response (Nginx)',
  449: 'Retry With (Microsoft)',
  450: 'Blocked by Windows Parental Controls (Microsoft)',
  451: 'Unavailable For Legal Reasons',
  499: 'Client Closed Request (Nginx)',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'HTTP Version Not Supported',
  506: 'Variant Also Negotiates (Experimental)',
  507: 'Insufficient Storage (WebDAV)',
  508: 'Loop Detected (WebDAV)',
  509: 'Bandwidth Limit Exceeded (Apache)',
  510: 'Not Extended',
  511: 'Network Authentication Required',
  598: 'Network read timeout error',
  599: 'Network connect timeout error'
};
const headerDataFun = (token) => {
  const headerObj = {};

  if (token) headerObj.Authorization = `Bearer ${token}`;

  return headerObj;
};
// get all type apis
async function getToApi(endpoint, authToken) {
  const token = headerDataFun(authToken);
  let returnedData = {
    status: 'error',
    message: 'Server not responding',
    data: []
  };

  return fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...token,
      ...miltiTendencyHeader
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return {
        status: 'error',
        message: statusMessages[response.status],
        data: []
      };
    })
    .catch((error) => {
      returnedData = {
        status: 'error',
        message: 'Server not responding',
        data1: error
      };
      return returnedData;
      // return {
      //   status: 'error',
      //   message: 'Server not responding',
      //   data: []
      // };
    });
}
async function getApiWithBlobDatafun(endpoint, authToken) {
  const token = headerDataFun(authToken);
  let returnedData = {
    status: 'error',
    message: 'Server not responding',
    data: []
  };

  return fetch(endpoint, {
    method: 'GET',
    headers: {
      // 'Content-Type': 'application/json',
      ...token,
      ...miltiTendencyHeader
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.blob();
      }
      return {
        status: 'error',
        message: statusMessages[response.status],
        data: []
      };
    })
    .catch((error) => {
      returnedData = {
        status: 'error',
        message: 'Server not responding',
        data1: error
      };
      return returnedData;
      // return {
      //   status: 'error',
      //   message: 'Server not responding',
      //   data: []
      // };
    });
}
// post all type apis
async function firePostApi(endpoint, credentials, authToken) {
  const token = headerDataFun(authToken);
  let returnedData = {
    status: 'error',
    message: 'Server not responding',
    data: []
  };

  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...token,
      ...miltiTendencyHeader
    },
    body: JSON.stringify(credentials)
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return {
        status: 'error',
        message: statusMessages[response.status],
        data: []
      };
    })
    .catch((error) => {
      //   console.log(error);
      //   return {
      //     status: 'error',
      //     message: 'Server not responding',
      //     data: []
      //   };
      returnedData = {
        status: 'error',
        message: 'Server not responding',
        data1: error
      };
      return returnedData;
    });
}
async function firePostApiWithoutCredentialQueryOnly(endpoint, authToken) {
  const token = headerDataFun(authToken);
  let returnedData = {
    status: 'error',
    message: 'Server not responding',
    data: []
  };
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...token,
      ...miltiTendencyHeader
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return {
        status: 'error',
        message: statusMessages[response.status],
        data: []
      };
    })
    .catch((error) => {
      returnedData = {
        status: 'error',
        message: 'Server not responding',
        data1: error
      };
      return returnedData;
    });
}
async function firePostFormDataApi(endpoint, credentials, authToken) {
  const token = headerDataFun(authToken);
  let returnedData = {
    status: 'error',
    message: 'Server not responding',
    data: []
  };
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      ...token,
      ...miltiTendencyHeader
    },
    body: credentials
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return {
        status: 'error',
        msg: statusMessages[response.status],
        data: []
      };
    })
    .catch((error) => {
      returnedData = {
        status: 'error',
        message: 'Server not responding',
        data1: error
      };
      return returnedData;
    });
}
async function firePostApiWithHeadersAndToken(endpoint, credentials, authToken, headerData) {
  const token = headerDataFun(authToken);
  let returnedData = {
    status: 'error',
    message: 'Server not responding',
    data: []
  };
  return fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headerData,
      ...token,
      ...miltiTendencyHeader
    },
    body: JSON.stringify(credentials)
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return {
        status: 'error',
        message: statusMessages[response.status],
        data: []
      };
    })
    .catch((error) => {
      returnedData = {
        status: 'error',
        message: 'Server not responding',
        data1: error
      };
      return returnedData;
    });
}
// put apis
async function putToApi(endpoint, credential, authToken) {
  const token = headerDataFun(authToken);
  let returnedData = {
    status: 'error',
    message: 'Server not responding',
    data: []
  };
  return fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...token,
      ...miltiTendencyHeader
    },
    body: JSON.stringify(credential)
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      return {
        status: 'error',
        msg: statusMessages[response.status],
        data: []
      };
    })
    .catch((error) => {
      returnedData = {
        status: 'error',
        message: 'Server not responding',
        data1: error
      };
      return returnedData;
    });
}
async function putToApiFormData(endpoint, credential, authToken) {
  const token = headerDataFun(authToken);
  let returnedData = {
    status: 'error',
    message: 'Server not responding',
    data: []
  };

  return fetch(endpoint, {
    method: 'PUT',
    headers: {
      // 'Content-Type': 'application/json',
      ...token,
      ...miltiTendencyHeader
    },
    body: credential
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      return {
        status: 'error',
        message: statusMessages[response.status],
        data: []
      };
    })
    .catch((error) => {
      returnedData = {
        status: 'error',
        message: 'Server not responding',
        data1: error
      };
      return returnedData;
    });
}
// delete apis
async function deleteToApi(endpoint, credentials, authToken) {
  const token = headerDataFun(authToken);
  let returnedData = {
    status: 'error',
    message: 'Server not responding',
    data: []
  };

  return fetch(endpoint, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...token
    },
    body: JSON.stringify(credentials)
  })
    .then((response) => {
      console.log(response);

      if (response.ok && response.status === '200') {
        return response.json();
      }
      return {
        status: 'error',
        msg: statusMessages[response.status],
        data: []
      };
    })
    .catch((error) => {
      returnedData = {
        status: 'error',
        message: 'Server not responding',
        data1: error
      };
      return returnedData;
    });
}

export default function dynamicApiServices() {
  const getApi = async (endPoint, authToken) => {
    const isDataPosted = await getToApi(endPoint, authToken);
    return isDataPosted;
  };
  const getApiWithBlobData = async (endPoint, authToken) => {
    const isDataPosted = await getApiWithBlobDatafun(endPoint, authToken);
    return isDataPosted;
  };

  const postApi = async (endPoint, credential, authToken) => {
    const isDataPosted = await firePostApi(endPoint, credential, authToken);
    return isDataPosted;
  };

  const postFormDataApi = async (endPoint, credential, authToken) => {
    const isDataPosted = await firePostFormDataApi(endPoint, credential, authToken);
    return isDataPosted;
  };

  const putApi = async (endPoint, credential, authToken) => {
    const isDataPosted = await putToApi(endPoint, credential, authToken);
    return isDataPosted;
  };

  const postApiWithoutCredentialQueryOnly = async (endPoint, authToken) => {
    const isDataPosted = await firePostApiWithoutCredentialQueryOnly(endPoint, authToken);
    return isDataPosted;
  };

  const PostApiWithHeaderAndToken = async (endPoint, credential, headerData, authToken) => {
    const isDataPosted = await firePostApiWithHeadersAndToken(
      endPoint,
      credential,
      authToken,
      headerData
    );
    return isDataPosted;
  };

  const putApiFormData = async (endPoint, credential, authToken) => {
    const isDataPosted = await putToApiFormData(endPoint, credential, authToken);
    return isDataPosted;
  };

  const deleteApi = async (endPoint, authToken) => {
    const isDataPosted = await deleteToApi(endPoint, authToken);
    return isDataPosted;
  };

  return {
    getApi,
    getApiWithBlobData,
    postApi,
    postFormDataApi,
    PostApiWithHeaderAndToken,
    postApiWithoutCredentialQueryOnly,
    putApi,
    putApiFormData,
    deleteApi
  };
}
